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
      title: "Topological Machine learning",
      text: "Sheaf Theory, Simplicial complexes, hypergraphs, and higher-order neural architectures that go beyond pairwise graph interactions."
    },
    {
      symbol: "∂",
      title: "Topological Signal Processing",
     text: "Sheaf Theory, Simplicial complexes, hypergraphs, and higher-order neural architectures that go beyond pairwise graph interactions."
    },
    {
      symbol: "▦",
      title: "Tensor and Matrix Decompositions",
      text: "Developing efficient tensor and matrix decomposition methods for high-dimensional data analysis, dimensionality reduction, and feature extraction."
    },
    {
      symbol: "✦",
      title: "Biomedical & Spatiotemporal AI",
      text: "Graph-centric learning for brain signals, seizure analysis, sleep, weather, traffic, and other sensor-driven applications."
    }
  ],

  currentPeople: [
    {
      name: "Antoine Vialle",
      role: "PhD student · Télécom Paris, Nov 2025–present",
      topic: "Geometric Deep Learning",
      image: "assets/images/person_logo.png",
      link: ""
    },
    {
      name: "Sergei Gerasimov",
      role: "PhD student · Télécom Paris, Nov 2026–present",
      topic: "Graph Summarization",
      image: "assets/images/person_logo.png",
      link: ""
    },
    {
      name: "Deniz Rezapour Kiani",
      role: "PhD student · Télécom SudParis, Nov 2026–present",
      topic: "Graph Signal processing, Hidden Markov Model",
      image: "assets/images/person_logo_female.png",
      link: ""
    },
  ],

  
   visitingPeople: [
    {
      name: "Zepeng Zhang",
      role: "Visiting PhD student. EPFL, Apr–Aug 2025",
      topic: "Geometric deep learning",
      link: "https://zepengzhang.github.io/"
    },

    {
      name: "Maria José Guerrero Muriel",
      role: "Visiting PhD student. Universidad de Antioquia, Nov–Dec 2024 ",
      topic: "Learning graphs from data",


    },
  ],



  pastPeople: [
    {
      name: "Sergei Gerasimov",
      role: "Research intern. Télécom Paris, Apr–Sep 2026",
      topic: "now PhD student",
  
    },

    {
      name: "Kian Bakhtari",
      role: "Research intern. Télécom Paris, 2025",
      topic: "now PhD student",

    },

    {
      name: "Antoine Vialle",
      role: "Research intern. Télécom Paris, 2025",
      topic: "now PhD student",

    }, 
  ],

  publications: [
    {
      year: 2026,
      type: "preprint",
      title: "WiGNeXt: Windowed Vision Graph Neural Network with eXtended Locality",
      authors: "Gabriele Spadaro, Kian Bakhtari, Aref Einizade, Marco Grangetto, Attilio Fiandrotti, Enzo Tartaglione, Jhony H. Giraldo",
      venue: "Available at SSRN 7291685",
      image: "assets/images/paper/preprint/WiGNeXt.png",
      links: { ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7291685" }
    },
    {
      year: 2026,
      type: "conference",
      title: "Spatiotemporal Imputation with Graph-Informed Flow Matching",
      authors: "Zepeng Zhang, Aref Einizade, Jhony H. Giraldo, Olga Fink",
      venue: "International Conference on Machine Learning (ICML 2026)",
      image: "assets/images/paper/conf/Spatiotemporal Imputation with Graph-Informed Flow Matching.png",
      links: { ICML: "https://icml.cc/virtual/2026/poster/65534", arxiv: "https://arxiv.org/abs/2606.06682" }
    },
    {
      year: 2026,
      type: "conference",
      title: "Consistent Soundscape Connectomes via Stability-Refined Graph Learning",
      authors: "Maria J. Guerrero, Aref Einizade, Jhony H. Giraldo, César A. Uribe",
      venue: "International Joint Conference on Neural Networks (IJCNN / IEEE WCCI 2026)",
      image: "assets/images/paper/conf/Consistent Soundscape Connectomes via Stability-Refined Graph Learning.png",
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
      image: "assets/images/paper/preprint/Scaling Higher-Order Graph Learning with Maximal Clique Complexes.png",
      links: { arxiv: "https://arxiv.org/abs/2605.31373" }
    },


    {
      year: 2025,
      type: "conference",
      title: "Continuous Simplicial Neural Networks",
      authors: "Aref Einizade, Dorina Thanou, Fragkiskos D. Malliaros, Jhony H. Giraldo",
      venue: "The Thirty-Ninth Annual Conference on Neural Information Processing Systems (NeurIPS 2025)",
      image: "assets/images/paper/conf/Continuous simplicial neural networks.png",
      links: {doi:"https://doi.org/10.52202/085713-1990", pdf:"https://www.proceedings.com/content/085/085713-1990open.pdf", code: "https://github.com/ArefEinizade2/COSIMO"}
    },
    {
      year: 2025,
      type: "conference",
      title: "Soundscape Connectomes: Unsupervised Graph-Based Approach for Soundscape Mapping",
      authors: "Maria J Guerrero, Aref Einizade, Jhony H Giraldo, Victor M Martinez-Arias, Claudia Isaza, Cesar A Uribe",
      venue: "The Thirty-Ninth Annual Conference on Neural Information Processing Systems, ( workshop: AI for non-human animal communication )",
      image: "assets/images/paper/conf/Soundscape Connectomes.png",
      links: {arxiv:"https://openreview.net/forum?id=YofxQ71vqK", pdf:"https://openreview.net/pdf?id=YofxQ71vqK"}
    },
    {
      year: 2025,
      type: "conference",
      title: "Second-Order Tensorial Partial Differential Equations on Graphs",
      authors: "Aref Einizade, Fragkiskos D. Malliaros, Jhony H. Giraldo",
      venue: "NeurIPS 2025 Workshop: New Perspectives in Graph Machine Learning",
      image: "assets/images/paper/conf/Second-Order Tensorial Partial Differential Equations on Graphs.png",
      links: {arxiv:"https://arxiv.org/abs/2509.02015"}
    },
    {
      year: 2025,
      type: "conference",
      title: "Subgraph Gaussian Embedding Contrast for Self-Supervised Graph Representation Learning",
      authors: "Shifeng Xie, Aref Einizade, Jhony H. Giraldo",
      venue: "Joint European Conference on Machine Learning and Knowledge Discovery in Databases (ECML-PKDD) 2025",
      image: "assets/images/paper/conf/Subgraph Gaussian Embedding.png",
      links: {arxiv:"https://arxiv.org/abs/2505.23529", pdf: "https://link.springer.com/chapter/10.1007/978-3-032-06106-5_25"}
    },
    {
      year: 2024,
      type: "preprint",
      title: "Spatiotemporal Forecasting Meets Efficiency: Causal Graph Process Neural Networks",
      authors: "Aref Einizade, Fragkiskos D. Malliaros, Jhony H. Giraldo",
      venue: "arXiv preprint",
      image: "assets/images/paper/preprint/Spatiotemporal Forecasting Meets Efficiency.png",
      links: {arxiv:"https://arxiv.org/abs/2405.18879"}
    },

    {
      year: 2024,
      type: "conference",
      title: "Continuous Product Graph Neural Networks",
      authors: "Aref Einizade, Fragkiskos D. Malliaros, Jhony H. Giraldo",
      venue: "Advances in Neural Information Processing Systems (NeurIPS 2024)",
      image: "assets/images/paper/conf/Continuous Product Graph Neural Networks.png",
      links: {doi:"https://doi.org/10.52202/079017-2864", pdf: "https://www.proceedings.com/content/079/079017-2864open.pdf" ,code: "https://github.com/ArefEinizade2/CITRUS"}
    },
    {
      year: 2024,
      type: "journal",
      title: "Higher-Order GNNs Meet Efficiency: Sparse Sobolev Graph Neural Networks",
      authors: "Jhony H. Giraldo, Aref Einizade, Andjela Todorovic, Jhon A. Castro-Correa, Mohsen Badiey, Thierry Bouwmans, Fragkiskos D. Malliaros",
      venue: "IEEE Transactions on Signal and Information Processing over Networks",
      image: "assets/images/paper/journal/Higher-Order GNNs Meet Efficiency.png",
      links: { doi: "https://doi.org/10.1109/TSIPN.2024.3503416" }
    },
    {
      year: 2024,
      type: "journal",
      title: "Estimation of a Causal Directed Acyclic Graph Process using Non-Gaussianity",
      authors: "Aref Einizade, Jhony H. Giraldo, Fragkiskos D. Malliaros, Sepideh Hajipour Sardouie",
      venue: "Digital Signal Processing, 146, 104400",
      image: "assets/images/paper/journal/Estimation of a causal directed acyclic graph process.png",
      links: { doi: "https://doi.org/10.1016/j.dsp.2024.104400" }
    },

    {
      year: 2023,
      type: "preprint",
      title: "Kernel-based Joint Multiple Graph Learning and Clustering of Graph Signals",
      authors: "Mohamad H Alizade, Aref Einizade, Jhony H Giraldo",
      venue: "arXiv preprint",
      image: "assets/images/paper/preprint/Kernel-based Joint Multiple Graph Learning and Clustering of Graph Signals.png",
      links: {arxiv:"https://arxiv.org/abs/2310.19005"}
    },
    {
      year: 2023,
      type: "journal",
      title: "Learning Product Graphs from Spectral Templates",
      authors: "Aref Einizade, Sepideh Hajipour Sardouie",
      venue: "IEEE Transactions on Signal and Information Processing over Networks 9, 357-372",
      image: "assets/images/paper/journal/Learning Product Graphs from Spectral Templates.png",
      links: {doi:"https://doi.org/10.1109/TSIPN.2023.3279513"}
    },
    {
      year: 2023,
      type: "journal",
      title: "ProductGraphSleepNet: Sleep staging using product spatio-temporal graph learning with attentive temporal aggregation",
      authors: "Aref Einizade, Samaneh Nasiri, Sepideh Hajipour Sardouie, Gari D Clifford",
      venue: "Neural Networks 164, 667-680",
      image: "assets/images/paper/journal/ProductGraphSleepNet.png",
      links: {doi: "https://doi.org/10.1016/j.neunet.2023.05.016"}
    },
    {
      year: 2023,
      type: "journal",
      title: "Iterative Pseudo-Sparse Partial Least Square and its Higher-Order variant: Application to inference from high-dimensional biosignals",
      authors: "Aref Einizade, Sepideh Hajipour Sardouie",
      venue: "IEEE Transactions on Cognitive and Developmental Systems 16 (1), 296-307",
      image: "assets/images/paper/journal/Iterative Pseudo-Sparse Partial Least Square and its Higher-Order variant.png",
      links: {doi:"https://doi.org/10.1109/TCDS.2023.3267010"}
    },
    {
      year: 2023,
      type: "journal",
      title: "Joint Graph Learning and Blind Separation of Smooth Graph Signals Using Minimization of Mutual Information and Laplacian Quadratic Forms",
      authors: "Aref Einizade, Sepideh Hajipour Sardouie",
      venue: "IEEE Transactions on Signal and Information Processing over Networks, 9, 35–47",
      image: "assets/images/paper/journal/Joint Graph.png",
      links: {doi:"https://doi.org/10.1109/TSIPN.2023.3240893"}
    },
    {
      year: 2023,
      type: "journal",
      title: "Explainable automated seizure detection using attentive deep multi-view networks",
      authors: "Aref Einizade, S. Nasiri, M. Mozafari, Sepideh Hajipour Sardouie, G. D. Clifford",
      venue: "Biomedical Signal Processing and Control 79, 104076",
      image: "assets/images/paper/journal/Explainable automated seizure detection using attentive deep multi-view networks.png",
      links: {doi:"https://doi.org/10.1016/j.bspc.2022.104076"}
    },
    {
      year: 2023,
      type: "journal",
      title: "Robust blind separation of smooth graph signals using minimization of graph regularized mutual information",
      authors: "Aref Einizade, Sepideh Hajipour Sardouie",
      venue: "Digital Signal Processing, 132, 103792",
      image: "assets/images/paper/journal/Robust blind separation of smooth graph signals using minimization of graph regularized mutual information.png",
      links: {doi:"https://doi.org/10.1016/j.dsp.2022.103792"}
    },

    {
      year: 2022,
      type: "journal",
      title: "Neural decoding of imagined speech from EEG signals using the fusion of graph signal processing and graph learning techniques",
      authors: "Aref Einizade, M. Mozafari, M. Jalilpour, S. Bagheri, Sepideh Hajipour Sardouie",
      venue: "Neuroscience Informatics, 2(3), 100091",
      image: "assets/images/paper/journal/Neural decoding of imagined speech from EEG signals using the fusion of graph signal processing and graph learning techniques.png",
      links: {doi:"https://doi.org/10.1016/j.neuri.2022.100091"}
    },
    {
      year: 2022,
      type: "journal",
      title: "A unified approach for simultaneous graph learning and blind separation of graph signal sources",
      authors: "Aref Einizade, Sepideh Hajipour Sardouie",
      venue: "IEEE Transactions on Signal and Information Processing over Networks, 8, 543–555",
      image: "assets/images/paper/journal/A Unified Approach for Simultaneous Graph Learning and Blind Separation of Graph Signal Sources.png",
      links: {doi:"https://doi.org/10.1109/TSIPN.2022.3183498"}
    },

    {
      year: 2021,
      type: "journal",
      title: "Simultaneous graph learning and blind separation of graph signal sources",
      authors: "Aref Einizade, Sepideh Hajipour Sardouie, Mohammad B Shamsollahi",
      venue: "IEEE Signal Processing Letters, 28, 1495–1499",
      image: "assets/images/paper/journal/Simultaneous Graph Learning and Blind Separation of Graph Signal Sources.png",
      links: {doi:"https://doi.org/10.1109/LSP.2021.3093872"}
    },

    {
      year: 2020,
      type: "journal",
      title: "Cross-subject and cross-paradigm learning using convolutional neural network for P300 event-related potential detection",
      authors: "A. M. Mijani, Aref Einizade, M. B. Shamsollahi, B. T. Beyglou",
      venue: "Journal of Neuroscience, 11(5), 329",
      image: "assets/images/paper/journal/Cross-subject and cross-paradigm learning using convolutional neural network for P300 event-related potential detection.png",
      links: {pdf:"https://www.researchgate.net/profile/Amirmohammad-Mijani/publication/344044325_Cross-Subject_and_Cross-Paradigm_learning_using_Convolutional_Neural_Network_for_P300_Event-Related_Potential_Detection/links/5f4f8b18458515e96d22fa35/Cross-Subject-and-Cross-Paradigm-learning-using-Convolutional-Neural-Network-for-P300-Event-Related-Potential-Detection.pdf"}
    },
    {
      year: 2020,
      type: "conference",
      title: "A deep learning-based method for automatic detection of epileptic seizure in a dataset with both generalized and focal seizure types",
      authors: "Aref Einizade, M. Mozafari, Sepideh Hajipour Sardouie, S. Nasiri, G. D. Clifford",
      venue: "IEEE Signal Processing in Medicine and Biology Symposium (SPMB 2020)",
      image: "assets/images/paper/journal/A deep learning-based method for automatic detection of epileptic seizure in a dataset with both generalized and focal seizure types.png",
      links: {doi:"https://doi.org/10.1109/SPMB50085.2020.9353629"}
    },
    {
      year: 2020,
      type: "conference",
      title: "Detecting ADHD children based on EEG signals using Graph Signal Processing techniques",
      authors: "Aref Einizade, M. Mozafari, M. Rezaei-Dastjerdehei, E. Aghdaei, A. M. Mijani, Sepideh Hajipour Sardouie",
      venue: "27th National and 5th International Iranian Conference on Biomedical Engineering (ICBME 2020)",
      image: "assets/images/paper/journal/Detecting ADHD children based on EEG signals using Graph Signal Processing techniques.png",
      links: {doi:"https://doi.org/10.1109/ICBME51989.2020.9319456"}
    },
    {
      year: 2020,
      type: "journal",
      title: "Sparsification of the PLS Regression Algorithm using L2-Norm of Weighted Coefficients: Application in Emotion Recognition",
      authors: "Aref Einizade, Sepideh Hajipour Sardouie",
      venue: "Iranian Journal of Biomedical Engineering",
      image: "assets/images/placeholder.jpg",
      links: {pdf:"https://www.ijbme.org/article_44750_c850753590544abfd16eadb4e5e2f764.pdf"}
    }
  ],

  teaching: [
    {
      period: "Institut Polytechnique de Paris (IP paris) · Feb 2026",
      title: "Graph Neural Networks",
      text: "Explore the course description, learning objectives, lecture topics, and detailed course information.",
      // href: "teaching/graph-learning-fundamentals/"
      href:"teaching/Graph Neural Networks/index.html"
    },
    {
      period: "Institut Polytechnique de Paris (IP paris) · Sep - Nov 2026",
      title: "Fundamentals of Machine Learning",
      text: "Explore the course description, learning objectives, lecture topics, and detailed course information.",
      // href: "teaching/machine-learning-signal-processing/"
      href: "teaching/Fundamentals of Machine Learning/index.html"
    },
    {
      period: "Institut Polytechnique de Paris (IP paris) · Jan - Mar 2026",
      title: "Advanced Machine Learning",
      text: "Explore the course description, learning objectives, lecture topics, and detailed course information.",
      // href: "teaching/machine-learning-signal-processing/"
      href: "teaching/Advanced ML/index.html"
    },
    {
      period: "Institut Polytechnique de Paris (IP paris) · Jan - Mar 2026",
      title: "Graph Machine Learning",
      text: "Explore the course description, learning objectives, lecture topics, and detailed course information.",
      // href: "teaching/machine-learning-signal-processing/"
      href: "teaching/Graph Machine Learning/index.html"
    }
  ],

  news: [
    {
      date: "Sep 2026",
      title: "1 paper accepted and presented orally at EUSIPCO 2026",
      text: "Spatiotemporal graph learning for interpretable seizure onset zone analysis from intracranial EEG was presented at the 34th European Signal Processing Conference in Bruges.",
      link: "https://eusipco2026.org/"
    },
    {
      date: "Jun 2026",
      title: "Delivered talk at LoG Paris Meetup 2026",
      text: "Title: Tensorial Partial Differential Equations on Graphs",
      link: "https://sites.google.com/view/learning-on-graph-paris-meetup/schedule"
    },
    {
      date: "Jul 2026",
      title: "1 paper accepted at ICML 2026",
      text: "Spatiotemporal Imputation with Graph-Informed Flow Matching appeared at ICML 2026.",
      link: "https://icml.cc/virtual/2026/poster/65534"
    },
    {
      date: "Jul 2026",
      title: "1 paper accepted at IJCNN / WCCI 2026",
      text: "Consistent Soundscape Connectomes via Stability-Refined Graph Learning was presented at IJCNN 2026.",
      link: "https://scholar.google.com/scholar?oi=bibs&cluster=8977716731314936627&btnI=1&hl=en"
    },
    {
      date: "May 2026",
      title: "1 preprint available",
      text: "Scaling Higher-Order Graph Learning with Maximal Clique Complexes was released on arXiv.",
      link: "https://arxiv.org/abs/2605.31373"
    },
    {
      date: "Feb 2026",
      title: "Joined Télécom SudParis, Institut Polytechnique de Paris",
      text: "Started as Assistant Professor (Maître de Conférences) at Télécom SudParis, Institut Polytechnique de Paris.",
      link: "https://www.ip-paris.fr/actualites/graph-machine-learning-et-intelligence-artificielle-les-recherches-daref-einizade-sur-les-graphes"
    }
  ]
};
