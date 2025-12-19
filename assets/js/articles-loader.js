// Articles loader - compatible with GitHub Pages static hosting
class ArticlesLoader {
  constructor() {
    this.articles = [];
    this.articlesContainer = null;
    // Embedded articles data for GitHub Pages compatibility
    this.articlesData = [
      {
            "id": "syntax-highlighting-demo",
            "title": "Syntax Highlighting Demo",
            "subtitle": "Demo • Features • 2025",
            "description": "Demonstration of automatic syntax highlighting for multiple programming languages.",
            "cover": "placeholder.svg",
            "published": "2025-01-16",
            "status": "published",
            "url": "syntax-highlighting-demo.html"
      },
      {
            "id": "python-project-structure",
            "title": "Practical Python Project Structure",
            "subtitle": "Architecture • Python • 2025",
            "description": "Guidelines for structuring medium-sized Python services for clarity and maintainability.",
            "cover": "python-structure.svg",
            "published": "2025-01-15",
            "status": "published",
            "url": "python-project-structure.html"
      },
      {
            "id": "observability-backend",
            "title": "Observability for Backend Services",
            "subtitle": "Monitoring • Logging • 2025",
            "description": "Setting up logging, metrics, and traces without overwhelming complexity.",
            "cover": "observability.svg",
            "published": "2025-01-10",
            "status": "draft",
            "url": "observability-backend.html"
      },
      {
            "id": "fastapi-patterns",
            "title": "FastAPI Patterns that Scale",
            "subtitle": "FastAPI • APIs • 2025",
            "description": "Patterns for routers, dependencies, error handling, and testing.",
            "cover": "fastapi-patterns.svg",
            "published": "2025-01-05",
            "status": "published",
            "url": "fastapi-patterns.html"
      },
      {
            "id": "docker-best-practices",
            "title": "Docker Best Practices",
            "subtitle": "DevOps • Containers • 2025",
            "description": "Essential Docker patterns for development and production environments.",
            "cover": "docker-best-practices.svg",
            "published": "2025-12-19",
            "status": "published",
            "url": "docker-best-practices.html"
      }
    ];
  }

  async init() {
    this.loadArticles();
    this.articlesContainer = document.querySelector('.articles-grid, .grid');
    if (this.articlesContainer) {
      this.renderArticles();
    }
  }

  loadArticles() {
    try {
      // Filter to only show published articles
      this.articles = this.articlesData.filter(article => article.status === 'published');
      // Sort by publication date (newest first)
      this.articles.sort((a, b) => new Date(b.published) - new Date(a.published));
      console.log('Loaded articles:', this.articles);
    } catch (error) {
      console.error('Error loading articles:', error);
      this.articles = [];
    }
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  createArticleCard(article) {
    const articleUrl = `./articles/${article.url}`;
    const coverUrl = `assets/img/covers/${article.cover}`;

    return `
      <article class="card card-with-cover">
        <div class="card-cover">
          <img src="${coverUrl}" alt="${article.title} cover" />
        </div>
        <div class="card-content">
          <h2>${article.title}</h2>
          <p class="card-meta">${article.subtitle}</p>
          <p>${article.description}</p>
          <a class="inline-link" href="${articleUrl}">Read article →</a>
        </div>
      </article>
    `;
  }

  renderArticles() {
    if (!this.articlesContainer) return;

    if (this.articles.length === 0) {
      this.articlesContainer.innerHTML = `
        <div class="card">
          <h2>No Articles Yet</h2>
          <p>Articles will appear here once they're published. Check back soon!</p>
        </div>
      `;
      return;
    }

    const articlesHTML = this.articles
      .map(article => this.createArticleCard(article))
      .join('');

    this.articlesContainer.innerHTML = articlesHTML;

    // Reinitialize card hover effects for new content
    this.initializeCardEffects();
  }

  initializeCardEffects() {
    const cards = this.articlesContainer.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * 1.5;
          const rotateY = ((centerX - x) / centerX) * 1.5;
          const scale = 1.01;

          card.style.transform = `
            translateY(-4px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            scale(${scale})
          `;
        }
      });

      card.addEventListener('mouseleave', () => {
        if (window.innerWidth > 768) {
          card.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
        }
      });
    });
  }

  // Method to add a new article (for future admin functionality)
  addArticle(articleData) {
    // Add to the embedded data
    this.articlesData.unshift(articleData);
    // Reload and re-render
    this.loadArticles();
    this.renderArticles();
  }

  // Helper method to get all articles data (useful for maintenance)
  getAllArticlesData() {
    return this.articlesData;
  }

  // Helper method to export current articles as JSON string
  exportArticlesJSON() {
    return JSON.stringify(this.articlesData, null, 2);
  }
}

// Auto-initialize if we're on the articles page
document.addEventListener('DOMContentLoaded', () => {
  // Check if we're on the articles page
  if (document.querySelector('.articles-grid, .grid') &&
      (window.location.pathname.includes('articles.html') ||
       window.location.pathname === '/articles.html')) {
    const loader = new ArticlesLoader();
    loader.init();
  }
});

// Export for potential use in other scripts
window.ArticlesLoader = ArticlesLoader;
