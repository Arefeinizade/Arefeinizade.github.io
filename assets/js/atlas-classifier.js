/* Multi-label topic tagging for the About research atlas.
   It uses title + abstract (+ venue as weak context) and keeps the 6 main nodes
   aligned with the visible research directions on the site. */
(function(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.ATLAS_CLASSIFIER = api;
})(typeof window !== 'undefined' ? window : null, function() {
  'use strict';

  const TOPICS = [
    {
      id: 'gml',
      label: ['Graph Machine', 'Learning'],
      color: '#86b4ff',
      x: 112, y: 126,
      rules: [
        [/\bgraph (?:machine )?learning\b|\bgraph representation learning\b|\bgraph embedding\w*\b|\bgraph-informed\b|\bstructure learning\b|\bself-supervised graph\b|\bgraph-based\b/i, 4],
        [/\bproduct graph\w*\b|\bmultiple graph\w*\b|\bjoint multiple graph learning\b|\bgraph clustering\b|\bgraph process neural network\w*\b/i, 3],
        [/\bgraph\b/i, 1]
      ]
    },
    {
      id: 'gsp',
      label: ['Graph Signal', 'Processing'],
      color: '#68c7e5',
      x: 284, y: 78,
      rules: [
        [/\bgraph signal processing\b|\bgraph signal\w*\b|\bgraph filter\w*\b|\bspectral template\w*\b|\blaplacian quadratic\b|\bsource separation\b|\bblind separation\b|\bgraph regulari[sz]ed\b|\bgraph process\b/i, 4],
        [/\bsignal processing\b|\bspectral\b|\bfiltering\b|\bsource separation\b/i, 2]
      ]
    },
    {
      id: 'tml',
      label: ['Topological', 'Machine Learning'],
      color: '#c8b0fb',
      x: 450, y: 122,
      rules: [
        [/\btopological\b|\bsimplicial\b|\bsimplicial complex(?:es)?\b|\bhypergraph\w*\b|\bsheaf\b|\bclique complex(?:es)?\b|\bhodge\b/i, 4],
        [/\bhigher-order\b.{0,55}\b(?:graph|gnn|neural|learning|network|simplicial|hypergraph|topolog)\b|\b(?:graph|gnn|neural|learning|network|simplicial|hypergraph|topolog)\b.{0,55}\bhigher-order\b/i, 3],
        [/\b(?:graph neural network\w*|gnn\w*|neural network\w*)\b.{0,45}\b(?:simplicial|hypergraph|sheaf|topological)\b|\b(?:simplicial|hypergraph|sheaf|topological)\b.{0,45}\b(?:graph neural network\w*|gnn\w*|neural network\w*)\b/i, 3]
      ]
    },
    {
      id: 'tsp',
      label: ['Topological', 'Signal Processing'],
      color: '#7fd6c4',
      x: 120, y: 312,
      rules: [
        [/\b(?:simplicial|hypergraph|sheaf|topological|hodge)\b.{0,60}\b(?:signal|signals|filter|spectral|pde|processing)\b|\b(?:signal|signals|filter|spectral|pde|processing)\b.{0,60}\b(?:simplicial|hypergraph|sheaf|topological|hodge)\b/i, 4],
        [/\bsecond-order tensorial partial differential equations on graphs\b/i, 4],
        [/\btopological signal processing\b|\bsimplicial signal processing\b|\bsheaf signal processing\b/i, 4]
      ]
    },
    {
      id: 'tensor',
      label: ['Tensor and Matrix', 'Decompositions'],
      color: '#f4b36e',
      x: 296, y: 362,
      rules: [
        [/\bpartial least squares?\b|\bpls\b|\bpseudo-sparse\b|\btensor\w*\b|\bmatrix\b.{0,24}\bdecomposition\w*\b|\bmatrix factori[sz]ation\b|\blow-rank\b|\bspectral template\w*\b/i, 4],
        [/\bdecomposition\w*\b|\bfactori[sz]ation\b/i, 2]
      ]
    },
    {
      id: 'bio_spatio',
      label: ['Biomedical &', 'Spatiotemporal AI'],
      color: '#ef8fbe',
      x: 462, y: 310,
      rules: [
        [/\bbiosignal\w*\b|\bbio-signal\w*\b|\bbiomedical\b|\bbrain\b|\bneural decoding\b|\belectroencephalograph\w*\b|\beeg\b|\becg\b|\bemg\b|\becog\b|\bintracranial eeg\b|\bseizure\w*\b|\bepilep\w*\b|\bsleep stag\w*\b|\bsleep\b|\badhd\b|\bconnectom\w*\b|\bclinical\b|\bmedical imag\w*\b|\bfmri\b|\bmeg\b|\bp300\b|\bimagined speech\b|\bspatio[- ]?temporal\b|\bspatiotemporal\b|\btime series\b|\bforecast\w*\b|\bimputation\b|\btraffic\b|\bweather\b|\btime-varying\b|\bdynamic graph\w*\b/i, 4],
        [/\bmedical\b|\bhealth\w*\b|\bpatient\w*\b|\bdiagnos\w*\b|\bforecasting\b|\btemporal\b/i, 2]
      ]
    }
  ];

  const TITLE_WEIGHT = 2.2;
  const ABSTRACT_WEIGHT = 1.3;
  const VENUE_WEIGHT = 0.8;
  const THRESHOLD = 4;

  const normalize = s => String(s || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

  const REVIEWED = [
    {
      title: 'Continuous Simplicial Neural Networks',
      add: ['tml', 'tsp'],
      note: 'Explicitly connects this paper to both Topological Machine Learning and Topological Signal Processing.'
    },
    {
      title: 'Iterative Pseudo-Sparse Partial Least Square and its Higher-Order variant: Application to inference from high-dimensional biosignals',
      doi: '10.1109/TCDS.2023.3267010',
      add: ['tensor', 'bio_spatio'],
      remove: ['tml', 'tsp'],
      note: 'High-dimensional biosignals implies the biomedical node; higher-order PLS alone does not imply topology.'
    },
    {
      title: 'ProductGraphSleepNet: Sleep staging using product spatio-temporal graph learning with attentive temporal aggregation',
      doi: '10.1016/j.neunet.2023.05.016',
      add: ['gml', 'bio_spatio'],
      note: 'Sleep staging is biomedical and the title explicitly states spatio-temporal graph learning.'
    },
    {
      title: 'Spatiotemporal Imputation with Graph-Informed Flow Matching',
      add: ['gml', 'bio_spatio'],
      note: 'This paper is graph-informed and spatiotemporal.'
    },
    {
      title: 'SpaTeoGL: Spatiotemporal Graph Learning for Interpretable Seizure Onset Zone Analysis from Intracranial EEG',
      add: ['gml', 'bio_spatio'],
      note: 'Intracranial EEG and seizure analysis are biomedical; spatiotemporal graph learning is explicit.'
    },
    {
      title: 'Second-Order Tensorial Partial Differential Equations on Graphs',
      add: ['tsp', 'tensor', 'gsp'],
      note: 'Tensorial PDEs on graphs align with topological signal processing and tensor methods.'
    }
  ];

  function hasDoi(publication, doi) {
    const target = String(doi || '').toLowerCase();
    return Object.values(publication.links || {}).some(link => String(link || '').toLowerCase().includes(target));
  }

  function scoreTopic(topic, title, abstract, venue) {
    let total = 0;
    const hits = [];
    for (const [pattern, weight] of topic.rules) {
      const titleHit = pattern.test(title);
      const abstractHit = abstract && pattern.test(abstract);
      const venueHit = venue && pattern.test(venue);
      if (titleHit) { total += weight * TITLE_WEIGHT; hits.push('title'); }
      else if (abstractHit) { total += weight * ABSTRACT_WEIGHT; hits.push('abstract'); }
      else if (venueHit) { total += weight * VENUE_WEIGHT; hits.push('venue'); }
    }

    // Synergy bonuses for better multi-label behaviour.
    if (topic.id === 'gml' && /\b(graph|graphs)\b/i.test(title + ' ' + abstract) && /\b(learning|embedding|representation|clustering|neural network|imputation|forecasting)\b/i.test(title + ' ' + abstract)) {
      total += 1.5;
    }
    if (topic.id === 'gsp' && /\b(graph|graphs)\b/i.test(title + ' ' + abstract) && /\b(signal|signals|spectral|filter|source separation|laplacian)\b/i.test(title + ' ' + abstract)) {
      total += 1.5;
    }
    if (topic.id === 'tml' && /\b(simplicial|hypergraph|sheaf|topological|clique complex|higher-order)\b/i.test(title + ' ' + abstract) && /\b(learning|neural|network|gnn|representation)\b/i.test(title + ' ' + abstract)) {
      total += 1.5;
    }
    if (topic.id === 'tsp' && /\b(simplicial|hypergraph|sheaf|topological|pde|higher-order)\b/i.test(title + ' ' + abstract) && /\b(signal|signals|processing|spectral|filter|equation)\b/i.test(title + ' ' + abstract)) {
      total += 1.5;
    }
    if (topic.id === 'tensor' && /\b(tensor|matrix|partial least squares?|pls|decomposition|factorization|low-rank)\b/i.test(title + ' ' + abstract)) {
      total += 1.25;
    }
    if (topic.id === 'bio_spatio' && /\b(biosignal|biomedical|brain|eeg|ecg|seizure|sleep|adhd|speech|clinical|spatiotemporal|forecast|time series|weather|traffic|imputation)\b/i.test(title + ' ' + abstract)) {
      total += 1.25;
    }

    return { id: topic.id, score: Math.round(total * 10) / 10, matched: total > 0, evidence: [...new Set(hits)] };
  }

  function classify(publication, abstractText) {
    const title = String(publication?.title || '');
    const abstract = String(abstractText || publication?.abstract || '').replace(/<[^>]*>/g, ' ');
    const venue = String(publication?.venue || '');
    const source = abstract.trim() ? 'title + abstract' : 'title + venue';

    let scores = TOPICS.map(topic => scoreTopic(topic, title, abstract, venue))
      .sort((a, b) => b.score - a.score);

    let tags = scores.filter(item => item.score >= THRESHOLD).map(item => item.id);

    // If nothing crosses the threshold, keep the strongest label only when it is not weak.
    if (!tags.length && scores[0] && scores[0].score >= 2.8) {
      tags = [scores[0].id];
    }

    const reviewed = REVIEWED.find(rule =>
      normalize(rule.title) === normalize(title) || (rule.doi && hasDoi(publication, rule.doi))
    );

    if (reviewed) {
      tags = tags.filter(id => !(reviewed.remove || []).includes(id));
      tags.push(...(reviewed.add || []));
    }

    tags = [...new Set(tags)].sort((a, b) => {
      const sa = scores.find(s => s.id === a)?.score || 0;
      const sb = scores.find(s => s.id === b)?.score || 0;
      return sb - sa;
    });

    return {
      tags,
      primaryTag: tags[0] || (scores[0]?.score >= 2.8 ? scores[0].id : null),
      source,
      reviewed: reviewed?.note || null,
      scores
    };
  }

  return { TOPICS, classify, normalize };
});
