/* Self-contained inline SVG for the About section research atlas.
   Uses the site's publication list and a multi-label classifier (title + abstract + venue). */
(() => {
  'use strict';
  const svg = document.getElementById('aboutAtlasSvg');
  const panel = document.getElementById('aboutAtlasNetwork');
  const tooltip = document.getElementById('aboutAtlasTooltip');
  const publications = window.SITE_DATA?.publications || [];
  const classifier = window.ATLAS_CLASSIFIER;
  if (!svg || !panel || !classifier) return;

  const NS = 'http://www.w3.org/2000/svg';
  const WIDTH = 580, HEIGHT = 430;
  const { TOPICS: topics, classify, normalize } = classifier;
  const paperRecords = publications.filter(p => p && p.title);
  const papers = paperRecords.map((p, i) => ({
    id: 'p' + i,
    title: p.title,
    year: p.year,
    venue: p.venue,
    links: p.links || {},
    x: WIDTH / 2,
    y: HEIGHT / 2,
    vx: 0,
    vy: 0,
    seed: (i + 1) * 2.117,
    tags: [],
    primaryTag: null,
    classification: null,
    color: '#9aa7b2'
  }));

  const make = (tag, attrs = {}, parent = svg) => {
    const el = document.createElementNS(NS, tag);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, String(v)));
    parent.appendChild(el);
    return el;
  };
  const edgeLayer = make('g');
  const paperLayer = make('g');
  const topicLayer = make('g');

  let metadata = {};
  let active = null;
  let dragging = null;
  let origin = null;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const inView = { visible: true };
  let lastTime = 0;

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { inView.visible = entries[0].isIntersecting; }, { threshold: 0 }).observe(panel);
  }

  const tip = value => {
    tooltip.replaceChildren();
    if (typeof value === 'string') {
      tooltip.textContent = value;
    } else {
      const title = document.createElement('div');
      title.className = 'atlas-tooltip-title';
      title.textContent = value.title;
      const venue = document.createElement('div');
      venue.className = 'atlas-tooltip-venue';
      venue.textContent = value.venue || 'Venue not specified';
      tooltip.append(title, venue);
    }
    tooltip.hidden = false;
  };
  const hideTip = () => { tooltip.hidden = true; };

  const topicMap = {};
  const anchors = {};
  const orbitTargets = new Map();
  const edges = [];
  topics.forEach(t => { topicMap[t.id] = t; anchors[t.id] = []; });

  function labelText(id) {
    const t = topicMap[id];
    return t ? t.label.join(' ') : id;
  }

  function refreshClassification() {
    papers.forEach((p, i) => {
      const source = paperRecords[i];
      const match = metadata[normalize(p.title)] || {};
      const abstract = source.abstract || match.abstract || '';
      p.classification = classify(source, abstract);
      p.tags = p.classification.tags;
      p.primaryTag = p.classification.primaryTag || p.tags[0] || topics[i % topics.length].id;
      p.color = topicMap[p.primaryTag]?.color || '#9aa7b2';
      if (p.el) {
        p.el.setAttribute('fill', p.color);
        p.el.setAttribute('aria-label', p.title + '. Topics: ' + (p.tags.map(labelText).join(', ') || 'Unclassified'));
      }
    });
  }

  function rebuildGraphStructure() {
    topics.forEach(t => { anchors[t.id] = []; });
    edges.splice(0, edges.length).forEach(e => e.el.remove());
    orbitTargets.clear();

    papers.forEach((p, i) => {
      const primary = topicMap[p.primaryTag] || topics[i % topics.length];
      anchors[primary.id].push(p);
    });

    topics.forEach(t => {
      const own = anchors[t.id];
      const n = own.length;
      own.forEach((p, i) => {
        const ring = Math.floor(i / 7);
        const slot = i % 7;
        const angle = (Math.PI * 2 * slot / Math.max(1, Math.min(7, n))) - Math.PI / 2 + ring * 0.32;
        const radius = 42 + ring * 19 + (i % 2) * 5;
        p.x = Math.min(WIDTH - 12, Math.max(12, t.x + Math.cos(angle) * radius));
        p.y = Math.min(HEIGHT - 12, Math.max(12, t.y + Math.sin(angle) * radius));
        p.vx = p.vy = 0;
        orbitTargets.set(p.id, { topic: t, angle, radius, drift: ((i % 5) - 2) * 0.14 });
      });
    });

    papers.forEach(p => {
      const tags = p.tags.length ? p.tags : [p.primaryTag].filter(Boolean);
      tags.forEach(id => {
        if (!topicMap[id]) return;
        edges.push({ p, t: topicMap[id], el: make('line', { class: 'atlas-edge' }, edgeLayer) });
      });
    });

    updateSelection();
    draw();
  }

  function openPublication(paper) {
    const order = ['doi', 'pdf', 'arxiv', 'ssrn', 'code'];
    const href = order.map(key => paper.links[key]).find(Boolean) || Object.values(paper.links)[0];
    if (href) window.open(href, '_blank', 'noopener');
  }

  function draw() {
    edges.forEach(e => {
      e.el.setAttribute('x1', e.p.x);
      e.el.setAttribute('y1', e.p.y);
      e.el.setAttribute('x2', e.t.x);
      e.el.setAttribute('y2', e.t.y);
    });
    papers.forEach(p => {
      p.el.setAttribute('cx', p.x);
      p.el.setAttribute('cy', p.y);
    });
    topics.forEach(t => t.el.setAttribute('transform', `translate(${t.x} ${t.y})`));
  }

  function updateSelection() {
    topics.forEach(t => {
      const on = !active || t.id === active;
      t.el.style.opacity = on ? '1' : '.34';
      t.el.setAttribute('aria-pressed', String(t.id === active));
    });
    papers.forEach(p => {
      p.el.style.opacity = !active || p.tags.includes(active) ? '1' : '.12';
      p.el.setAttribute('r', (!active || p.tags.includes(active)) ? '4.5' : '3.5');
    });
    edges.forEach(e => {
      e.el.style.opacity = !active || e.t.id === active ? '1' : '.06';
    });
  }

  refreshClassification();

  papers.forEach(p => {
    const circle = make('circle', {
      class: 'atlas-paper',
      r: 4.2,
      fill: p.color,
      tabindex: 0,
      role: 'link',
      'aria-label': p.title
    }, paperLayer);
    p.el = circle;

    circle.addEventListener('click', () => { if (!p.skipClick) openPublication(p); p.skipClick = false; });
    circle.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPublication(p);
      }
    });
    circle.addEventListener('pointerenter', () => {
      tip({ title: p.title, venue: p.venue });
    });
    circle.addEventListener('focus', () => tip({ title: p.title, venue: p.venue }));
    circle.addEventListener('blur', hideTip);
    circle.addEventListener('pointerleave', hideTip);
    circle.addEventListener('pointerdown', e => {
      if (e.button !== 0) return;
      e.preventDefault();
      p.hold = true;
      p.dragStart = { x: e.clientX, y: e.clientY };
      p.skipClick = false;
      circle.setPointerCapture(e.pointerId);
    });
    circle.addEventListener('pointermove', e => {
      if (!p.hold) return;
      const rect = svg.getBoundingClientRect();
      if (Math.abs(e.clientX - p.dragStart.x) + Math.abs(e.clientY - p.dragStart.y) > 4) p.skipClick = true;
      p.x = Math.max(8, Math.min(WIDTH - 8, (e.clientX - rect.left) * WIDTH / rect.width));
      p.y = Math.max(8, Math.min(HEIGHT - 8, (e.clientY - rect.top) * HEIGHT / rect.height));
      p.vx = p.vy = 0;
      draw();
    });
    const releasePaper = () => { p.hold = false; };
    circle.addEventListener('pointerup', releasePaper);
    circle.addEventListener('pointercancel', releasePaper);
  });

  topics.forEach(t => {
    const g = make('g', { class: 'atlas-topic', tabindex: 0, role: 'button', 'aria-label': t.label.join(' '), 'aria-pressed': false }, topicLayer);
    make('circle', { r: 31, fill: t.color, opacity: .13 }, g);
    make('circle', { class: 'atlas-node-circle', r: 23, fill: t.color, stroke: '#ffffffcc', 'stroke-width': 1 }, g);
    const text = make('text', { y: 36 }, g);
    t.label.forEach((line, i) => {
      const span = make('tspan', { x: 0, dy: i === 0 ? 0 : 13 }, text);
      span.textContent = line;
    });
    t.el = g;

    const select = () => {
      active = active === t.id ? null : t.id;
      updateSelection();
    };
    g.addEventListener('click', e => { if (t.skipClick) { t.skipClick = false; return; } select(); });
    g.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        select();
      }
    });
    g.addEventListener('pointerenter', () => tip(t.label.join(' ') + ' · ' + papers.filter(p => p.tags.includes(t.id)).length + ' papers'));
    g.addEventListener('pointerleave', hideTip);
    g.addEventListener('pointerdown', e => {
      if (e.button !== 0) return;
      origin = { x: e.clientX, y: e.clientY, tx: t.x, ty: t.y };
      dragging = null;
      g.setPointerCapture(e.pointerId);
    });
    g.addEventListener('pointermove', e => {
      if (!origin) return;
      const box = svg.getBoundingClientRect();
      const dx = (e.clientX - origin.x) * WIDTH / box.width;
      const dy = (e.clientY - origin.y) * HEIGHT / box.height;
      if (Math.abs(dx) + Math.abs(dy) > 4) {
        dragging = t.id;
        t.skipClick = true;
      }
      if (dragging) {
        t.x = Math.max(34, Math.min(WIDTH - 34, origin.tx + dx));
        t.y = Math.max(34, Math.min(HEIGHT - 46, origin.ty + dy));
        draw();
      }
    });
    const end = () => { origin = null; dragging = null; };
    g.addEventListener('pointerup', end);
    g.addEventListener('pointercancel', end);
  });

  function animate(time) {
    requestAnimationFrame(animate);
    if (reducedMotion || !inView.visible || document.hidden) { lastTime = time; return; }
    if (time - lastTime < 28) return;
    const delta = Math.min(2, (time - lastTime) / 33 || 1);
    lastTime = time;

    for (const p of papers) {
      if (p.hold) continue;
      const o = orbitTargets.get(p.id);
      if (!o) continue;
      const phase = time * 0.00016 + p.seed * 0.18 + o.drift;
      const targetX = o.topic.x + Math.cos(o.angle + phase) * o.radius;
      const targetY = o.topic.y + Math.sin(o.angle + phase) * o.radius;
      p.vx += (targetX - p.x) * 0.014 * delta;
      p.vy += (targetY - p.y) * 0.014 * delta;

      for (const q of papers) {
        if (q === p) continue;
        const dx = p.x - q.x, dy = p.y - q.y, d2 = dx * dx + dy * dy;
        if (d2 > 1 && d2 < 240) {
          const force = (240 - d2) / d2 * 0.015 * delta;
          p.vx += dx * force;
          p.vy += dy * force;
        }
      }
      p.vx *= 0.9;
      p.vy *= 0.9;
      p.x = Math.max(8, Math.min(WIDTH - 8, p.x + p.vx * delta));
      p.y = Math.max(8, Math.min(HEIGHT - 8, p.y + p.vy * delta));
    }
    draw();
  }

  rebuildGraphStructure();

  fetch('assets/data/publication-abstracts.json', { cache: 'no-cache' })
    .then(r => { if (!r.ok) throw Error('No cached abstracts'); return r.json(); })
    .then(data => {
      metadata = data.papers || {};
      refreshClassification();
      rebuildGraphStructure();
    })
    .catch(() => {});

  if (!reducedMotion) requestAnimationFrame(animate);
})();
