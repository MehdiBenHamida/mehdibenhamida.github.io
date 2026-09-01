(function () {
  var TRANSLATIONS = {
    en: {
      heroEyebrow: "Resume",
      heroTitle: "Curriculum vitae",
      heroLead:
        "A structured overview of my experience. Use <strong>Export to PDF</strong> to save a clean, print-ready copy directly from your browser.",
      printButton: "Export to PDF",
      roleSubtitle: "Senior Software Engineer \u00b7 Backend & Architecture",
      bookMeeting: "Book a meeting",

      secProfile: "Profile",
      secExperience: "Experience",
      secProjects: "Projects",
      secEducation: "Education",
      secSkills: "Core skills",
      secStrengths: "Strengths",
      secLanguages: "Languages",
      secInterests: "Interests",

      profileText:
        "Software engineer with 8+ years of experience designing, developing, and deploying REST-based systems. Strong background in Python, Flask, FastAPI, PostgreSQL, SQLAlchemy, microservices, and event-driven architecture, with a consistent focus on scalability, maintainability, and product impact.",

      job1Title: "Senior Software Engineer",
      job1Date: "Apr 2023 - Present",
      job1b1: "Designed backend applications with FastAPI to orchestrate LLM APIs, including OpenAI and Anthropic, for scalable AI-powered solutions.",
      job1b2: "Implemented a customized webhook solution with the product team to support real-time communication needs.",
      job1b3: "Refactored service discovery from a database-driven approach to a lighter event-driven architecture.",
      job1b4: "Introduced domain-driven design principles to improve code quality, scalability, and business alignment.",

      job2Title: "Software Engineer",
      job2Date: "Oct 2020 - Mar 2023",
      job2b1: "Led the refactoring of the Gorgias phone solution, increasing reliability and reducing system degradation.",
      job2b2: "Implemented a zero-downtime migration strategy for production systems.",
      job2b3: "Contributed to partner API integrations and new REST resources for the helpdesk platform.",
      job2b4: "Performed technical feasibility analysis, code reviews, production support, and monitoring with Datadog and Sentry.",

      job3Title: "Software & Data Engineer",
      job3Date: "Jan 2019 - Sep 2020",
      job3b1: "Designed and deployed the YOOTEL information system using a microservices-based architecture.",
      job3b2: "Built a centralized data warehouse and customer-facing dashboards, billing, and service configuration tools.",
      job3b3: "Created an API for dynamic definition of value-added services, reducing time-to-market.",
      job3b4: "Implemented CI/CD pipelines and supervised a team of interns on an academic end-of-study project.",

      job4Title: "Software Engineer",
      job4Date: "Feb 2017 - Aug 2018",
      job4b1: "Designed and developed a platform for configuring and executing data mining algorithms on large-scale data.",
      job4b2: "Enabled process teams to define sequential workflows, run algorithms on clusters, and visualize results.",
      job4b3: "Built a modular architecture and customized topological sorting logic to derive execution sequences.",
      job4b4: "Deployed the solution on a Spark cluster and contributed to a significant time-to-market reduction.",

      proj1b1: "Designed a software solution intended to deliver a cinematic and immersive movie-watching experience through a dedicated simulator application.",
      proj2b1: "Feature enriched web framework on top of FastAPI to provide a simple and efficient way to build REST APIs with authentication, authorization, and database integration.",

      edu1Sub: "Software Engineering Diploma",
      edu1Date: "Sep 2014 - Jun 2017",
      edu2Sub: "Pre-engineering studies focused on mathematics, physics, and technology",
      edu2Date: "Sep 2012 - Jun 2014",

      skillEventDriven: "Event-driven architecture",
      tagTeamLeadership: "Team Leadership",
      tagDesktopApp: "Desktop App",

      strength1: "Technical feasibility analysis",
      strength2: "API integration and platform design",
      strength3: "Bug fixing and production reliability",
      strength4: "Mentoring and project supervision",

      lang1: "French - Bilingual",
      lang2: "English - Full professional proficiency",
      lang3: "German - Basic knowledge",

      interest1: "Amateur theater",
      interest2: "Cinema",
      interest3: "Photography"
    },
    fr: {
      heroEyebrow: "CV",
      heroTitle: "Curriculum vit\u00e6",
      heroLead:
        "Un aper\u00e7u structur\u00e9 de mon exp\u00e9rience. Utilisez <strong>Exporter en PDF</strong> pour enregistrer une version pr\u00eate \u00e0 imprimer directement depuis votre navigateur.",
      printButton: "Exporter en PDF",
      roleSubtitle: "Ing\u00e9nieur logiciel senior \u00b7 Backend & Architecture",
      bookMeeting: "R\u00e9server un cr\u00e9neau",

      secProfile: "Profil",
      secExperience: "Exp\u00e9rience",
      secProjects: "Projets",
      secEducation: "Formation",
      secSkills: "Comp\u00e9tences cl\u00e9s",
      secStrengths: "Atouts",
      secLanguages: "Langues",
      secInterests: "Centres d'int\u00e9r\u00eat",

      profileText:
        "Ing\u00e9nieur logiciel avec plus de 8 ans d'exp\u00e9rience dans la conception, le d\u00e9veloppement et le d\u00e9ploiement de syst\u00e8mes REST. Solide ma\u00eetrise de Python, Flask, FastAPI, PostgreSQL, SQLAlchemy, des microservices et de l'architecture \u00e9v\u00e8nementielle, avec une attention constante \u00e0 la scalabilit\u00e9, \u00e0 la maintenabilit\u00e9 et \u00e0 l'impact produit.",

      job1Title: "Ing\u00e9nieur logiciel senior",
      job1Date: "Avr. 2023 - Aujourd'hui",
      job1b1: "Conception d'applications backend avec FastAPI pour orchestrer des API de LLM, dont OpenAI et Anthropic, au service de solutions IA scalables.",
      job1b2: "Mise en place d'une solution de webhooks personnalis\u00e9e avec l'\u00e9quipe produit pour r\u00e9pondre aux besoins de communication en temps r\u00e9el.",
      job1b3: "Refonte de la d\u00e9couverte de services, d'une approche bas\u00e9e sur la base de donn\u00e9es vers une architecture \u00e9v\u00e8nementielle plus l\u00e9g\u00e8re.",
      job1b4: "Introduction des principes du Domain-Driven Design pour am\u00e9liorer la qualit\u00e9 du code, la scalabilit\u00e9 et l'alignement m\u00e9tier.",

      job2Title: "Ing\u00e9nieur logiciel",
      job2Date: "Oct. 2020 - Mars 2023",
      job2b1: "Pilotage de la refonte de la solution de t\u00e9l\u00e9phonie de Gorgias, augmentant la fiabilit\u00e9 et r\u00e9duisant la d\u00e9gradation du syst\u00e8me.",
      job2b2: "Mise en \u0153uvre d'une strat\u00e9gie de migration sans interruption de service pour les syst\u00e8mes en production.",
      job2b3: "Contribution aux int\u00e9grations d'API partenaires et \u00e0 de nouvelles ressources REST pour la plateforme de support.",
      job2b4: "Analyses de faisabilit\u00e9 technique, revues de code, support en production et supervision avec Datadog et Sentry.",

      job3Title: "Ing\u00e9nieur logiciel & donn\u00e9es",
      job3Date: "Janv. 2019 - Sept. 2020",
      job3b1: "Conception et d\u00e9ploiement du syst\u00e8me d'information YOOTEL selon une architecture microservices.",
      job3b2: "Construction d'un entrep\u00f4t de donn\u00e9es centralis\u00e9 et d'applications clientes : tableaux de bord, facturation et configuration des services.",
      job3b3: "Cr\u00e9ation d'une API pour la d\u00e9finition dynamique de services \u00e0 valeur ajout\u00e9e, r\u00e9duisant le temps de mise sur le march\u00e9.",
      job3b4: "Mise en place de pipelines CI/CD et encadrement d'une \u00e9quipe de stagiaires sur un projet de fin d'\u00e9tudes.",

      job4Title: "Ing\u00e9nieur logiciel",
      job4Date: "F\u00e9vr. 2017 - Ao\u00fbt 2018",
      job4b1: "Conception et d\u00e9veloppement d'une plateforme de configuration et d'ex\u00e9cution d'algorithmes de data mining sur des donn\u00e9es \u00e0 grande \u00e9chelle.",
      job4b2: "Permettre aux \u00e9quipes m\u00e9tier de d\u00e9finir des workflows s\u00e9quentiels, d'ex\u00e9cuter des algorithmes sur des clusters et de visualiser les r\u00e9sultats.",
      job4b3: "Construction d'une architecture modulaire et personnalisation d'un tri topologique pour d\u00e9river les s\u00e9quences d'ex\u00e9cution.",
      job4b4: "D\u00e9ploiement de la solution sur un cluster Spark, contribuant \u00e0 une r\u00e9duction significative du temps de mise sur le march\u00e9.",

      proj1b1: "Conception d'une solution logicielle destin\u00e9e \u00e0 offrir une exp\u00e9rience cin\u00e9matographique et immersive de visionnage de films via une application de simulateur d\u00e9di\u00e9e.",
      proj2b1: "Framework web enrichi bas\u00e9 sur FastAPI offrant une mani\u00e8re simple et efficace de cr\u00e9er des API REST avec authentification, autorisation et int\u00e9gration \u00e0 la base de donn\u00e9es.",

      edu1Sub: "Dipl\u00f4me d'ing\u00e9nieur en g\u00e9nie logiciel",
      edu1Date: "Sept. 2014 - Juin 2017",
      edu2Sub: "Classes pr\u00e9paratoires (math\u00e9matiques, physique et technologie)",
      edu2Date: "Sept. 2012 - Juin 2014",

      skillEventDriven: "Architecture \u00e9v\u00e8nementielle",
      tagTeamLeadership: "Encadrement d'\u00e9quipe",
      tagDesktopApp: "Application bureau",

      strength1: "Analyse de faisabilit\u00e9 technique",
      strength2: "Int\u00e9gration d'API et conception de plateformes",
      strength3: "Correction de bugs et fiabilit\u00e9 en production",
      strength4: "Mentorat et supervision de projets",

      lang1: "Fran\u00e7ais - Bilingue",
      lang2: "Anglais - Comp\u00e9tence professionnelle compl\u00e8te",
      lang3: "Allemand - Notions",

      interest1: "Th\u00e9\u00e2tre amateur",
      interest2: "Cin\u00e9ma",
      interest3: "Photographie"
    }
  };

  var STORAGE_KEY = "resumeLang";

  function getInitialLang() {
    var stored;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      stored = null;
    }
    if (stored === "en" || stored === "fr") {
      return stored;
    }
    var navLang = (navigator.language || "en").toLowerCase();
    return navLang.indexOf("fr") === 0 ? "fr" : "en";
  }

  function applyLanguage(lang) {
    var dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (dict[key] != null) {
        node.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (node) {
      var key = node.getAttribute("data-i18n-html");
      if (dict[key] != null) {
        node.innerHTML = dict[key];
      }
    });

    document.documentElement.setAttribute("lang", lang);
    document.title = (lang === "fr" ? "CV" : "Resume") + " | Mehdi Ben Hamida";

    document.querySelectorAll(".lang-option").forEach(function (button) {
      var isActive = button.getAttribute("data-lang") === lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function setLanguage(lang) {
    applyLanguage(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* storage unavailable */
    }
  }

  function init() {
    var switcher = document.querySelector(".lang-switch");
    if (!switcher) {
      return;
    }

    switcher.addEventListener("click", function (event) {
      var button = event.target.closest(".lang-option");
      if (!button) {
        return;
      }
      setLanguage(button.getAttribute("data-lang"));
    });

    applyLanguage(getInitialLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
