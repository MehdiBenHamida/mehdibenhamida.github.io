(function () {
  var currentYearTargets = document.querySelectorAll("[data-current-year]");
  var siteData = window.siteData || {};

  currentYearTargets.forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });

  var ICONS = {
    mail:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.85 9.73.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z"/></svg>',
    calendar:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>'
  };

  var SOCIAL_LINKS = [
    { key: "github", label: "GitHub", url: "https://github.com/MehdiBenHamida" },
    { key: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/mehdi-ben-hamida-746758105/" },
    { key: "mail", label: "Email", url: "mailto:mhdibenhamida@gmail.com" },
    { key: "calendar", label: "Book a meeting", url: "https://calendar.app.google/GiaZzt1keA8A7Rp9A" }
  ];

  function setupFooterSocial() {
    var footerInner = document.querySelector(".footer-inner");
    if (!footerInner) {
      return;
    }

    var social = document.createElement("div");
    social.className = "footer-social";
    social.innerHTML = SOCIAL_LINKS.map(function (link) {
      var isExternal = link.url.indexOf("http") === 0;
      var attrs = isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";
      return (
        '<a href="' + link.url + '"' + attrs + ' aria-label="' + link.label + '" title="' + link.label + '">' +
        ICONS[link.key] +
        "</a>"
      );
    }).join("");

    var existingLink = footerInner.querySelector("a");
    if (existingLink) {
      footerInner.insertBefore(social, existingLink);
    } else {
      footerInner.appendChild(social);
    }
  }

  function markCurrentPage() {
    var pathName = window.location.pathname;
    var currentPath = pathName.split("/").pop() || "index.html";
    var currentSection = "";

    if (pathName.indexOf("/articles/") !== -1) {
      currentSection = "articles";
    } else if (pathName.indexOf("/portfolio/") !== -1) {
      currentSection = "portfolio";
    } else if (pathName.indexOf("/books/") !== -1) {
      currentSection = "books";
    }

    document.querySelectorAll(".nav-links a").forEach(function (link) {
      var href = link.getAttribute("href");
      var matchesSection =
        (currentSection === "articles" && (href === "articles.html" || href === "../articles.html")) ||
        (currentSection === "portfolio" && (href === "portfolio.html" || href === "../portfolio.html")) ||
        (currentSection === "books" && (href === "books.html" || href === "../books.html"));

      if (href === currentPath || matchesSection) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function setupThemeToggle() {
    var navShell = document.querySelector(".nav-shell");
    if (!navShell) {
      return;
    }

    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "theme-toggle";
    toggle.setAttribute("aria-label", "Toggle color theme");
    toggle.innerHTML =
      '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>' +
      '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';

    syncThemeState(toggle);

    toggle.addEventListener("click", function () {
      var isDark = document.documentElement.getAttribute("data-theme") === "dark";
      var nextTheme = isDark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      try {
        localStorage.setItem("theme", nextTheme);
      } catch (error) {
        /* storage unavailable */
      }
      syncThemeState(toggle);
    });

    navShell.appendChild(toggle);
  }

  function syncThemeState(toggle) {
    var isDark = document.documentElement.getAttribute("data-theme") === "dark";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.title = isDark ? "Switch to light mode" : "Switch to dark mode";
  }

  function setupMobileNavigation() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".nav-links");

    if (!toggle || !nav) {
      return;
    }

    toggle.addEventListener("click", function () {
      var isExpanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isExpanded));
      nav.classList.toggle("is-open", !isExpanded);
    });
  }

  function setupResumePrint() {
    var printButton = document.querySelector("[data-print-resume]");
    if (!printButton) {
      return;
    }

    printButton.addEventListener("click", function (event) {
      event.preventDefault();

      if (typeof window.print === "function") {
        window.print();
        return;
      }

      if (typeof document.execCommand === "function") {
        document.execCommand("print", false, null);
      }
    });

    printButton.setAttribute("title", "Print to PDF");
  }

  function renderCollections() {
    document.querySelectorAll("[data-collection]").forEach(function (container) {
      var collectionName = container.getAttribute("data-collection");
      var limit = Number(container.getAttribute("data-limit") || 0);
      var items = siteData[collectionName] || [];
      var visibleItems = limit > 0 ? items.slice(0, limit) : items;

      container.innerHTML = visibleItems.map(renderCard).join("");
    });
  }

  function renderCard(item) {
    var target = item.external ? ' target="_blank" rel="noopener noreferrer"' : "";
    var tags = (item.tags || []).map(function (tag) {
      return "<li>" + escapeHtml(tag) + "</li>";
    }).join("");

    return [
      '<article class="content-card">',
      '<p class="content-card-meta">' + escapeHtml(item.meta) + "</p>",
      "<div>",
      "<h3>" + escapeHtml(item.title) + "</h3>",
      "<p>" + escapeHtml(item.description) + "</p>",
      "</div>",
      tags ? '<ul class="tag-row">' + tags + "</ul>" : "",
      '<div class="content-card-footer">',
      '<a href="' + escapeAttribute(item.url) + '"' + target + ">" + escapeHtml(item.linkLabel) + "</a>",
      "</div>",
      "</article>"
    ].join("");
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value);
  }

  markCurrentPage();
  setupThemeToggle();
  setupFooterSocial();
  setupMobileNavigation();
  setupResumePrint();
  renderCollections();
})();
