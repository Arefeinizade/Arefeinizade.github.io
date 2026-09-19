(() => {
  const data = window.SITE_DATA;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escapeHtml = (value = "") => value.replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const scholarUrl = title => `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;

  function renderCareer() {
    const target = $('#careerTimeline');
    target.innerHTML = data.career.map(item => `
      <article class="timeline-item reveal">
        <div class="timeline-date">${escapeHtml(item.dates)}</div>
        <div class="timeline-marker" aria-hidden="true"></div>
        <div class="timeline-content">
          <h4>${escapeHtml(item.title)}</h4>
          <div class="timeline-place">${escapeHtml(item.place)}</div>
          <div class="timeline-detail">${escapeHtml(item.detail)}</div>
        </div>
      </article>`).join('');
  }

  function renderResearch() {
    $('#researchGrid').innerHTML = data.research.map(item => `
      <article class="research-card reveal">
        <span class="research-symbol" aria-hidden="true">${escapeHtml(item.symbol)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </article>`).join('');
  }

  function personCard(person) {
    const body = `
      <div class="person-photo"><img src="${person.image}" alt="Placeholder image for ${escapeHtml(person.name)}" /></div>
      <div class="person-info">
        <h4>${escapeHtml(person.name)}</h4>
        <p class="person-role">${escapeHtml(person.role)}</p>
        <p class="person-topic">${escapeHtml(person.topic)}</p>
      </div>`;
    return person.link
      ? `<a class="person-card reveal" href="${person.link}" target="_blank" rel="noopener">${body}</a>`
      : `<article class="person-card reveal">${body}</article>`;
  }

  function renderPeople() {
    $('#currentPeople').innerHTML = data.currentPeople.map(personCard).join('');
    $('#pastPeople').innerHTML = data.pastPeople.map(personCard).join('');
  }

  function linkButtons(pub) {
    const links = { ...pub.links };
    links.scholar = scholarUrl(pub.title);
    const labels = { paper: 'Paper', pdf: 'PDF', doi: 'DOI', arxiv: 'arXiv', code: 'Code', project: 'Project', scholar: 'Scholar' };
    return Object.entries(links).filter(([, url]) => url).map(([key, url]) =>
      `<a class="paper-link" href="${url}" target="_blank" rel="noopener">${labels[key] || key}</a>`
    ).join('');
  }

  function renderPublications(filter = 'all') {
    const pubs = data.publications.filter(p => filter === 'all' || p.type === filter);
    const grouped = pubs.reduce((acc, pub) => {
      (acc[pub.year] ||= []).push(pub);
      return acc;
    }, {});
    const years = Object.keys(grouped).map(Number).sort((a,b) => b-a);
    $('#publicationList').innerHTML = years.map(year => `
      <section class="publication-year" data-year="${year}">
        <h3>${year}</h3>
        ${grouped[year].map(pub => `
          <article class="publication-card reveal">
            <div class="publication-thumb"><img src="${pub.image}" alt="Placeholder teaser for ${escapeHtml(pub.title)}" /></div>
            <div class="publication-content">
              <span class="paper-tag">${escapeHtml(pub.type)}</span>
              <h4>${escapeHtml(pub.title)}</h4>
              <p class="publication-authors">${escapeHtml(pub.authors)}</p>
              <p class="publication-venue">${escapeHtml(pub.venue)}</p>
              <div class="publication-links">${linkButtons(pub)}</div>
            </div>
          </article>`).join('')}
      </section>`).join('');
    observeReveals();
  }

  function renderTeaching() {
    $('#teachingGrid').innerHTML = data.teaching.map(item => `
      <article class="teaching-card reveal">
        <span class="teaching-period">${escapeHtml(item.period)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </article>`).join('');
  }

  function renderNews() {
    $('#newsList').innerHTML = data.news.map(item => `
      <article class="news-item reveal">
        <div class="news-date">${escapeHtml(item.date)}</div>
        <div class="news-main"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p></div>
        <div class="news-arrow" aria-hidden="true">↗</div>
      </article>`).join('');
  }

  // Mobile menu
  const menuToggle = $('#menuToggle');
  const nav = $('#primaryNav');
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  $$('#primaryNav a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));

  // Modals
  $$('[data-modal-open]').forEach(btn => btn.addEventListener('click', () => {
    const modal = document.getElementById(btn.dataset.modalOpen);
    if (modal?.showModal) modal.showModal();
  }));
  $$('[data-modal-close]').forEach(btn => btn.addEventListener('click', () => btn.closest('dialog')?.close()));
  $$('.modal').forEach(dialog => dialog.addEventListener('click', e => {
    const rect = dialog.getBoundingClientRect();
    const inDialog = rect.top <= e.clientY && e.clientY <= rect.bottom && rect.left <= e.clientX && e.clientX <= rect.right;
    if (!inDialog) dialog.close();
  }));

  // Filters
  $$('.filter-button').forEach(btn => btn.addEventListener('click', () => {
    $$('.filter-button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPublications(btn.dataset.filter);
  }));

  // Scroll reveal
  let revealObserver;
  function observeReveals() {
    if (!('IntersectionObserver' in window)) {
      $$('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: .08 });
    }
    $$('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
  }

  // Active navigation
  const navLinks = $$('.primary-nav a');
  const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: '-34% 0px -55% 0px', threshold: 0 });
    sections.forEach(section => sectionObserver.observe(section));
  }

  // Delaunay triangulation background (Bowyer-Watson; self-contained)
  function initTriangulation() {
    const canvas = $('#triangulationCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const points = [];
    const baseCount = 46;
    let mouse = { x: -9999, y: -9999 };
    let w = 0, h = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = Math.floor(w * dpr); canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!points.length) seed();
    };

    const seed = () => {
      points.length = 0;
      for (let i=0; i<baseCount; i++) {
        points.push({ x: Math.random()*w, y: Math.random()*h, vx: (Math.random()-.5)*.11, vy: (Math.random()-.5)*.11 });
      }
    };

    const circumcircle = (a,b,c) => {
      const d = 2*(a.x*(b.y-c.y)+b.x*(c.y-a.y)+c.x*(a.y-b.y));
      if (Math.abs(d) < 1e-8) return {x:0,y:0,r2:-1};
      const a2=a.x*a.x+a.y*a.y, b2=b.x*b.x+b.y*b.y, c2=c.x*c.x+c.y*c.y;
      const ux=(a2*(b.y-c.y)+b2*(c.y-a.y)+c2*(a.y-b.y))/d;
      const uy=(a2*(c.x-b.x)+b2*(a.x-c.x)+c2*(b.x-a.x))/d;
      const dx=ux-a.x, dy=uy-a.y;
      return {x:ux,y:uy,r2:dx*dx+dy*dy};
    };

    const triangulate = input => {
      if (input.length < 3) return [];
      const margin = Math.max(w,h)*6;
      const p = input.map((v,i)=>({...v, i}));
      const n = p.length;
      p.push({x:-margin,y:-margin,i:n},{x:w+margin*2,y:-margin,i:n+1},{x:w/2,y:h+margin*2,i:n+2});
      let triangles = [{a:n,b:n+1,c:n+2}];
      for (let i=0; i<n; i++) {
        const bad=[];
        for (const t of triangles) {
          const cc=circumcircle(p[t.a],p[t.b],p[t.c]);
          const dx=p[i].x-cc.x, dy=p[i].y-cc.y;
          if (cc.r2 >= 0 && dx*dx+dy*dy < cc.r2) bad.push(t);
        }
        const edges=[];
        bad.forEach(t=>[[t.a,t.b],[t.b,t.c],[t.c,t.a]].forEach(e=>edges.push(e)));
        triangles = triangles.filter(t=>!bad.includes(t));
        const boundary = edges.filter((e,idx)=>!edges.some((f,j)=>j!==idx && e[0]===f[1] && e[1]===f[0]));
        boundary.forEach(e=>triangles.push({a:e[0],b:e[1],c:i}));
      }
      return triangles.filter(t=>t.a<n && t.b<n && t.c<n);
    };

    const draw = () => {
      ctx.clearRect(0,0,w,h);
      points.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -20 || p.x > w+20) p.vx *= -1;
        if (p.y < -20 || p.y > h+20) p.vy *= -1;
      });
      const tris = triangulate(points);
      ctx.lineWidth = .7;
      tris.forEach(t => {
        const a=points[t.a], b=points[t.b], c=points[t.c];
        const cx=(a.x+b.x+c.x)/3, cy=(a.y+b.y+c.y)/3;
        const dm=Math.hypot(cx-mouse.x, cy-mouse.y);
        const hot=dm<145;
        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.lineTo(c.x,c.y); ctx.closePath();
        ctx.strokeStyle = hot ? 'rgba(14,109,117,.34)' : 'rgba(58,88,95,.12)';
        ctx.fillStyle = hot ? 'rgba(14,109,117,.025)' : 'rgba(255,255,255,.006)';
        ctx.fill(); ctx.stroke();
      });
      points.forEach(p => {
        const d=Math.hypot(p.x-mouse.x,p.y-mouse.y);
        ctx.beginPath(); ctx.arc(p.x,p.y,d<75?2.6:1.3,0,Math.PI*2);
        ctx.fillStyle = d<75 ? 'rgba(14,109,117,.72)' : 'rgba(38,68,75,.25)'; ctx.fill();
      });
      requestAnimationFrame(draw);
    };

    canvas.addEventListener('pointermove', e => {
      const r=canvas.getBoundingClientRect(); mouse={x:e.clientX-r.left,y:e.clientY-r.top};
    });
    canvas.addEventListener('pointerleave', ()=>mouse={x:-9999,y:-9999});
    canvas.addEventListener('click', e => {
      const r=canvas.getBoundingClientRect();
      points.push({x:e.clientX-r.left,y:e.clientY-r.top,vx:(Math.random()-.5)*.1,vy:(Math.random()-.5)*.1});
      if (points.length>70) points.splice(0,1);
    });
    window.addEventListener('resize', resize, {passive:true});
    resize(); draw();
  }

  renderCareer();
  renderResearch();
  renderPeople();
  renderPublications();
  renderTeaching();
  renderNews();
  observeReveals();
  initTriangulation();
  $('#year').textContent = new Date().getFullYear();
})();
