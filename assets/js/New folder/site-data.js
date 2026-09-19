/*
  Central content file. Edit this file first when Aref gains a new paper,
  student, award, or news item. The HTML is rendered automatically.
*/
window.SITE_DATA = {
  career: [
    {
      dates: "Feb 2026 — Present",
      title: "Assistant Professor",
      place: "Télécom SudParis · Institut Polytechnique de Paris",
      detail: "Graph Machine Learning, Generative Models, Graph Signal Processing, Biomedical Applications"
    },
    {
      dates: "Nov 2023 — Jan 2026",
      title: "Postdoctoral Researcher",
      place: "Télécom Paris · Institut Polytechnique de Paris",
      detail: "Learning multi-domain graphs from data via Graph Machine Learning"
    },
    {
      dates: "Oct 2018 — Feb 2023",
      title: "PhD in Electrical Engineering",
      place: "Sharif University of Technology · Tehran, Iran",
      detail: "Subspace Identification and Graph Learning of Graph Signals: Application in Brain Signal Processing"
    },
    {
      dates: "Oct 2016 — Sep 2018",
      title: "MSc in Electrical Engineering",
      place: "Sharif University of Technology · Tehran, Iran",
      detail: "Bioelectric Engineering · Ranked 1st in MSc"
    },
    {
      dates: "Oct 2011 — Sep 2015",
      title: "BSc in Electrical Engineering — Digital Systems",
      place: "Shahid Beheshti University · Tehran, Iran",
      detail: "Electrical Engineering and Digital Systems"
    }
  ],

  research: [
    {
      symbol: "G",
      title: "Graph Machine Learning",
      text: "Learning over graph-structured and multimodal data with principled models, scalable methods, and interpretable structure learning."
    },
    {
      symbol: "λ",
      title: "Graph Signal Processing",
      text: "Extending signal-processing ideas to irregular domains, including graph filtering, structure learning, source separation, and compression."
    },
    {
      symbol: "△",
      title: "Higher-order Learning",
      text: "Simplicial complexes, hypergraphs, and higher-order neural architectures that go beyond pairwise graph interactions."
    },
    {
      symbol: "∂",
      title: "Continuous Graph Models",
      text: "Continuous GNNs, PDE-inspired graph models, and theoretically motivated dynamics over multi-domain structured data."
    },
    {
      symbol: "↝",
      title: "Generative Models",
      text: "Flow matching and related generative approaches for spatiotemporal data, missing-data imputation, and structured signals."
    },
    {
      symbol: "✦",
      title: "Biomedical & Spatiotemporal AI",
      text: "Graph-centric learning for brain signals, seizure analysis, sleep, weather, traffic, and other sensor-driven applications."
    }
  ],

  currentPeople: [
    {
      name: "Current PhD student",
      role: "PhD student · name to be confirmed",
      topic: "Graph Signal Processing / Graph Machine Learning",
      image: "assets/images/placeholder.jpg",
      link: ""
    },
    {
      name: "Current research intern",
      role: "Research intern · name to be confirmed",
      topic: "Efficient processing and compression of graph data",
      image: "assets/images/placeholder.jpg",
      link: ""
    },
    {
      name: "Future SIGMA PhD",
      role: "Fully funded PhD · planned start Dec 2026",
      topic: "Signal-aware Graph Summarization with GNN Guarantees",
      image: "assets/images/placeholder.jpg",
      link: ""
    }
  ],

  pastPeople: [
    {
      name: "Omid Rostamabadi",
      role: "BSc research student · Sharif University",
      topic: "Large-scale graph learning for functional brain connectivity",
      image: "assets/images/placeholder.jpg"
    },
    {
      name: "Alireza Rafiee Sardoee",
      role: "BSc research student · Sharif University",
      topic: "Large-scale graph learning for functional brain connectivity",
      image: "assets/images/placeholder.jpg"
    },
    {
      name: "Yasamin Medghalchi",
      role: "BSc research student · Sharif University",
      topic: "Support Matrix Machines + Graph Learning for EEG classification",
      image: "assets/images/placeholder.jpg"
    }
  ],

  publications: [
    {
      year: 2026,
      type: "conference",
      title: "Spatiotemporal Imputation with Graph-Informed Flow Matching",
      authors: "Zepeng Zhang, Aref Einizade, Jhony H. Giraldo, Olga Fink",
      venue: "International Conference on Machine Learning (ICML 2026)",
      image: "assets/images/placeholder.jpg",
      links: { arxiv: "https://arxiv.org/abs/2606.06682" }
    },
    {
      year: 2026,
      type: "conference",
      title: "Consistent Soundscape Connectomes via Stability-Refined Graph Learning",
      authors: "Maria J. Guerrero, Aref Einizade, Jhony H. Giraldo, César A. Uribe",
      venue: "International Joint Conference on Neural Networks (IJCNN / WCCI 2026)",
      image: "assets/images/placeholder.jpg",
      links: {}
    },
    {
      year: 2026,
      type: "conference",
      title: "SpaTeoGL: Spatiotemporal Graph Learning for Interpretable Seizure Onset Zone Analysis from Intracranial EEG",
      authors: "Elham Rostami, Aref Einizade, Taous-Meriem Laleg-Kirati",
      venue: "European Signal Processing Conference (EUSIPCO 2026) · oral presentation",
      image: "assets/images/paper/conf/SpaTeoGL.png",
      links: { arxiv: "https://arxiv.org/abs/2602.11801"}
    },
    {
      year: 2026,
      type: "preprint",
      title: "Scaling Higher-Order Graph Learning with Maximal Clique Complexes",
      authors: "Antoine Vialle, Aref Einizade, Fragkiskos D. Malliaros, Jhony H. Giraldo",
      venue: "CoRR / arXiv preprint",
      image: "assets/images/placeholder.jpg",
      links: { arxiv: "https://arxiv.org/abs/2605.31373" }
    },
    {
      year: 2026,
      type: "preprint",
      title: "No Labels, No Problem: An Unsupervised Criterion for Graph Learning Evaluation and Selection",
      authors: "Maria J. Guerrero, Tianyao Wei, Aref Einizade, Jhony H. Giraldo, César A. Uribe, Claudia Victoria Isaza Narváez",
      venue: "Preprint · posted August 2026",
      image: "assets/images/placeholder.jpg",
      links: { paper: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7269843" }
    },
    {
      year: 2025,
      type: "conference",
      title: "Continuous Simplicial Neural Networks",
      authors: "Aref Einizade, Dorina Thanou, Fragkiskos D. Malliaros, Jhony H. Giraldo",
      venue: "The Thirty-Ninth Annual Conference on Neural Information Processing Systems (NeurIPS 2025)",
      image: "assets/images/placeholder.jpg",
      links: {}
    },
    {
      year: 2025,
      type: "conference",
      title: "Second-Order Tensorial Partial Differential Equations on Graphs",
      authors: "Aref Einizade, Fragkiskos D. Malliaros, Jhony H. Giraldo",
      venue: "NeurIPS 2025 Workshop: New Perspectives in Graph Machine Learning",
      image: "assets/images/placeholder.jpg",
      links: {}
    },
    {
      year: 2025,
      type: "conference",
      title: "Subgraph Gaussian Embedding Contrast for Self-Supervised Graph Representation Learning",
      authors: "Shifeng Xie, Aref Einizade, Jhony H. Giraldo",
      venue: "ECML-PKDD 2025",
      image: "assets/images/placeholder.jpg",
      links: {}
    },
    {
      year: 2025,
      type: "preprint",
      title: "Spatiotemporal Forecasting Meets Efficiency: Causal Graph Process Neural Networks",
      authors: "Aref Einizade, Fragkiskos D. Malliaros, Jhony H. Giraldo",
      venue: "arXiv preprint · under review in the CV version supplied",
      image: "assets/images/placeholder.jpg",
      links: {}
    },
    {
      year: 2024,
      type: "conference",
      title: "Continuous Product Graph Neural Networks",
      authors: "Aref Einizade, Fragkiskos D. Malliaros, Jhony H. Giraldo",
      venue: "NeurIPS 2024",
      image: "assets/images/placeholder.jpg",
      links: {}
    },
    {
      year: 2024,
      type: "journal",
      title: "Higher-Order GNNs Meet Efficiency: Sparse Sobolev Graph Neural Networks",
      authors: "Jhony H. Giraldo, Aref Einizade, Andjela Todorovic, Jhon A. Castro-Correa, Mohsen Badiey, Thierry Bouwmans, Fragkiskos D. Malliaros",
      venue: "IEEE Transactions on Signal and Information Processing over Networks",
      image: "assets/images/placeholder.jpg",
      links: { doi: "https://doi.org/10.1109/TSIPN.2024.3503416" }
    },
    {
      year: 2024,
      type: "journal",
      title: "Estimation of a Causal Directed Acyclic Graph Process using Non-Gaussianity",
      authors: "Aref Einizade, Jhony H. Giraldo, Fragkiskos D. Malliaros, Sepideh Hajipour Sardouie",
      venue: "Digital Signal Processing, 146, 104400",
      image: "assets/images/placeholder.jpg",
      links: { doi: "https://doi.org/10.1016/j.dsp.2024.104400" }
    },
    {
      year: 2023,
      type: "journal",
      title: "Learning Product Graphs from Spectral Templates",
      authors: "Aref Einizade, Sepideh Hajipour Sardouie",
      venue: "IEEE Transactions on Signal and Information Processing over Networks",
      image: "assets/images/placeholder.jpg",
      links: {}
    },
    {
      year: 2023,
      type: "journal",
      title: "ProductGraphSleepNet: Sleep staging using product spatio-temporal graph learning with attentive temporal aggregation",
      authors: "Aref Einizade, S. Nasiri, Sepideh Hajipour Sardouie, G. D. Clifford",
      venue: "Neural Networks",
      image: "assets/images/placeholder.jpg",
      links: {}
    },
    {
      year: 2023,
      type: "journal",
      title: "Iterative Pseudo-Sparse Partial Least Square and its Higher-Order variant: Application to inference from high-dimensional biosignals",
      authors: "Aref Einizade, Sepideh Hajipour Sardouie",
      venue: "IEEE Transactions on Cognitive and Developmental Systems",
      image: "assets/images/placeholder.jpg",
      links: {}
    },
    {
      year: 2023,
      type: "journal",
      title: "Joint Graph Learning and Blind Separation of Smooth Graph Signals Using Minimization of Mutual Information and Laplacian Quadratic Forms",
      authors: "Aref Einizade, Sepideh Hajipour Sardouie",
      venue: "IEEE Transactions on Signal and Information Processing over Networks, 9, 35–47",
      image: "assets/images/placeholder.jpg",
      links: {}
    },
    {
      year: 2023,
      type: "journal",
      title: "Explainable automated seizure detection using attentive deep multi-view networks",
      authors: "Aref Einizade, S. Nasiri, M. Mozafari, Sepideh Hajipour Sardouie, G. D. Clifford",
      venue: "Biomedical Signal Processing and Control",
      image: "assets/images/placeholder.jpg",
      links: {}
    },
    {
      year: 2022,
      type: "journal",
      title: "Robust blind separation of smooth graph signals using minimization of graph regularized mutual information",
      authors: "Aref Einizade, Sepideh Hajipour Sardouie",
      venue: "Digital Signal Processing, 132, 103792",
      image: "assets/images/placeholder.jpg",
      links: {}
    },
    {
      year: 2022,
      type: "journal",
      title: "Neural decoding of imagined speech from EEG signals using the fusion of graph signal processing and graph learning techniques",
      authors: "Aref Einizade, M. Mozafari, M. Jalilpour, S. Bagheri, Sepideh Hajipour Sardouie",
      venue: "Neuroscience Informatics, 2(3), 100091",
      image: "assets/images/placeholder.jpg",
      links: {}
    },
    {
      year: 2022,
      type: "journal",
      title: "A unified approach for simultaneous graph learning and blind separation of graph signal sources",
      authors: "Aref Einizade, Sepideh Hajipour Sardouie",
      venue: "IEEE Transactions on Signal and Information Processing over Networks, 8, 543–555",
      image: "assets/images/placeholder.jpg",
      links: {}
    },
    {
      year: 2021,
      type: "journal",
      title: "Simultaneous graph learning and blind separation of graph signal sources",
      authors: "Aref Einizade, Sepideh Hajipour Sardouie, M. B. Shamsollahi",
      venue: "IEEE Signal Processing Letters, 28, 1495–1499",
      image: "assets/images/placeholder.jpg",
      links: {}
    },
    {
      year: 2020,
      type: "journal",
      title: "Cross-subject and cross-paradigm learning using convolutional neural network for P300 event-related potential detection",
      authors: "A. M. Mijani, Aref Einizade, M. B. Shamsollahi, B. T. Beyglou",
      venue: "Journal of Neuroscience, 11(5), 329",
      image: "assets/images/placeholder.jpg",
      links: {}
    },
    {
      year: 2020,
      type: "conference",
      title: "A deep learning-based method for automatic detection of epileptic seizure in a dataset with both generalized and focal seizure types",
      authors: "Aref Einizade, M. Mozafari, Sepideh Hajipour Sardouie, S. Nasiri, G. D. Clifford",
      venue: "IEEE Signal Processing in Medicine and Biology Symposium (SPMB 2020)",
      image: "assets/images/placeholder.jpg",
      links: {}
    },
    {
      year: 2020,
      type: "conference",
      title: "Detecting ADHD children based on EEG signals using Graph Signal Processing techniques",
      authors: "Aref Einizade, M. Mozafari, M. Rezaei-Dastjerdehei, E. Aghdaei, A. M. Mijani, Sepideh Hajipour Sardouie",
      venue: "27th National and 5th International Iranian Conference on Biomedical Engineering (ICBME 2020)",
      image: "assets/images/placeholder.jpg",
      links: {}
    },
    {
      year: 2020,
      type: "journal",
      title: "Sparsification of the PLS Regression Algorithm using L2-Norm of Weighted Coefficients: Application in Emotion Recognition",
      authors: "Aref Einizade, Sepideh Hajipour Sardouie",
      venue: "Iranian Journal of Biomedical Engineering",
      image: "assets/images/placeholder.jpg",
      links: {}
    }
  ],

  teaching: [
    {
      period: "2024 — Present",
      title: "Teaching Assistant · Télécom Paris",
      text: "Source Separation, Non-negative Matrix Factorization, Introduction to Machine Learning, Statistical Learning, and Graph Machine Learning labs."
    },
    {
      period: "2023 — Present",
      title: "Research supervision",
      text: "Co-supervision of PhD, Master's and internship projects in graph learning and related applications."
    },
    {
      period: "2017 — 2022",
      title: "Teaching Assistant · Sharif University of Technology",
      text: "Deep Learning, Computer Vision, Tensor Decompositions in Signal Processing, EEG Signal Processing, Medical Image Processing, Medical Image Systems, and Biomedical Signal & Image Processing Lab (~150 hours)."
    },
    {
      period: "2020",
      title: "Sharif Neuroscience Symposium",
      text: "EEG signal processing presentation."
    }
  ],

  news: [
    {
      date: "Sep 2026",
      title: "SpaTeoGL presented orally at EUSIPCO 2026",
      text: "Spatiotemporal graph learning for interpretable seizure onset zone analysis from intracranial EEG was presented at the 34th European Signal Processing Conference in Bruges."
    },
    {
      date: "Jul 2026",
      title: "ICML 2026 — Graph-informed flow matching",
      text: "Spatiotemporal Imputation with Graph-Informed Flow Matching appeared at ICML 2026."
    },
    {
      date: "Jul 2026",
      title: "IJCNN / WCCI 2026",
      text: "Consistent Soundscape Connectomes via Stability-Refined Graph Learning was presented at IJCNN 2026."
    },
    {
      date: "May 2026",
      title: "Higher-order graph learning preprint",
      text: "Scaling Higher-Order Graph Learning with Maximal Clique Complexes was released on arXiv."
    },
    {
      date: "Feb 2026",
      title: "Joined Télécom SudParis",
      text: "Started as Assistant Professor (Maître de Conférences) at Télécom SudParis, Institut Polytechnique de Paris."
    },
    {
      date: "2026–2029",
      title: "Hi! PARIS Fellow",
      text: "Selected as a Hi! PARIS Fellow for the 2026–2029 period."
    }
  ]
};
