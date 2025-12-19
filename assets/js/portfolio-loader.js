// Portfolio loader - compatible with GitHub Pages static hosting
// Based on ArticlesLoader pattern for consistency
class PortfolioLoader {
  constructor() {
    this.projects = [];
    this.portfolioContainer = null;
    // Embedded projects data for GitHub Pages compatibility
    this.projectsData = [
[
      {
            "id": "data-pipeline-orchestrator",
            "title": "Data Pipeline Orchestrator",
            "subtitle": "Python • Airflow • Docker",
            "description": "Composable DAGs, clear observability, and robust retries for production pipelines.",
            "github": "https://github.com/mehdibenhamida/data-pipeline-orchestrator",
            "demo": "",
            "technologies": [
                  "Python",
                  "Apache Airflow",
                  "Docker",
                  "PostgreSQL"
                ],
            "status": "published",
            "created": "2024-08-15",
            "featured": true
      },
      {
            "id": "fastapi-service-template",
            "title": "FastAPI Service Template",
            "subtitle": "FastAPI • Pydantic • Testing",
            "description": "Opinionated template with health checks, logging, error handling, and CI.",
            "github": "https://github.com/mehdibenhamida/fastapi-service-template",
            "demo": "",
            "technologies": [
                  "FastAPI",
                  "Pydantic",
                  "pytest",
                  "Docker"
                ],
            "status": "published",
            "created": "2024-06-20",
            "featured": true
      },
      {
            "id": "cli-toolkit",
            "title": "CLI Toolkit",
            "subtitle": "Python • Typer • Rich",
            "description": "Developer-friendly CLI tools for automation and daily workflows.",
            "github": "https://github.com/mehdibenhamida/cli-toolkit",
            "demo": "",
            "technologies": [
                  "Python",
                  "Typer",
                  "Rich",
                  "Click"
                ],
            "status": "published",
            "created": "2024-05-10",
            "featured": false
      },
      {
            "id": "microservices-auth",
            "title": "Microservices Authentication",
            "subtitle": "JWT • Redis • FastAPI",
            "description": "Scalable authentication service with JWT tokens, refresh mechanisms, and Redis caching.",
            "github": "https://github.com/mehdibenhamida/microservices-auth",
            "demo": "",
            "technologies": [
                  "FastAPI",
                  "JWT",
                  "Redis",
                  "PostgreSQL"
                ],
            "status": "published",
            "created": "2024-03-15",
            "featured": true
      },
      {
            "id": "ml-pipeline-automation",
            "title": "ML Pipeline Automation",
            "subtitle": "MLOps • Python • Kubernetes",
            "description": "End-to-end machine learning pipeline with automated training, validation, and deployment.",
            "github": "https://github.com/mehdibenhamida/ml-pipeline-automation",
            "demo": "",
            "technologies": [
                  "Python",
                  "scikit-learn",
                  "Kubernetes",
                  "MLflow"
                ],
            "status": "published",
            "created": "2024-02-01",
            "featured": false
      }
    ]];
  }

  async init() {
    this.loadProjects();
    this.portfolioContainer = document.querySelector('.portfolio-grid, .grid');
    if (this.portfolioContainer) {
      this.renderProjects();
    }
  }

  loadProjects() {
    try {
      // Filter to only show published projects
      this.projects = this.projectsData.filter(project => project.status === 'published');
      // Sort by creation date (newest first), with featured projects prioritized
      this.projects.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.created) - new Date(a.created);
      });
      console.log('Loaded projects:', this.projects);
    } catch (error) {
      console.error('Error loading projects:', error);
      this.projects = [];
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

  createProjectCard(project) {
    const githubUrl = project.github || '#';
    const demoUrl = project.demo || '';
    const featuredClass = project.featured ? ' featured' : '';

    // Create technology tags
    const techTags = project.technologies?.slice(0, 4).map(tech =>
      `<span class="tech-tag">${tech}</span>`
    ).join('') || '';

    return `
      <article class="card project-card${featuredClass}">
        ${project.featured ? '<div class="featured-badge">Featured</div>' : ''}
        <div class="card-content">
          <h2>${project.title}</h2>
          <p class="card-meta">${project.subtitle}</p>
          <p>${project.description}</p>
          ${techTags ? `<div class="tech-tags">${techTags}</div>` : ''}
          <div class="project-links">
            <a class="inline-link" href="${githubUrl}" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
            ${demoUrl ? `<a class="inline-link demo-link" href="${demoUrl}" target="_blank" rel="noopener noreferrer">Live Demo →</a>` : ''}
          </div>
        </div>
      </article>
    `;
  }

  renderProjects() {
    if (!this.portfolioContainer) return;

    if (this.projects.length === 0) {
      this.portfolioContainer.innerHTML = `
        <div class="empty-state">
          <p>No projects available at the moment.</p>
        </div>
      `;
      return;
    }

    const projectsHTML = this.projects
      .map(project => this.createProjectCard(project))
      .join('');

    this.portfolioContainer.innerHTML = projectsHTML;
  }

  // Method to add a new project (for future admin functionality)
  addProject(projectData) {
    // Add to the embedded data
    this.projectsData.unshift(projectData);
    // Reload and re-render
    this.loadProjects();
    this.renderProjects();
  }

  // Helper method to get all projects data (useful for maintenance)
  getAllProjectsData() {
    return this.projectsData;
  }

  // Helper method to export current projects as JSON string
  exportProjectsJSON() {
    return JSON.stringify(this.projectsData, null, 2);
  }

  // Update filter button active states
  updateFilterButtons(activeButton) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (activeButton) {
      activeButton.classList.add('active');
    }
  }

  // Filter projects by technology
  filterByTechnology(tech, buttonElement = null) {
    if (!tech) {
      this.loadProjects();
    } else {
      this.projects = this.projectsData.filter(project =>
        project.status === 'published' &&
        project.technologies?.some(t => t.toLowerCase().includes(tech.toLowerCase()))
      );
    }
    this.renderProjects();
    this.updateFilterButtons(buttonElement);
  }

  // Show only featured projects
  showFeaturedOnly(buttonElement = null) {
    this.projects = this.projectsData.filter(project =>
      project.status === 'published' && project.featured
    );
    this.renderProjects();
    this.updateFilterButtons(buttonElement);
  }

  // Show all projects
  showAllProjects(buttonElement = null) {
    this.loadProjects();
    this.renderProjects();
    this.updateFilterButtons(buttonElement);
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.portfolioLoader = new PortfolioLoader();
});

// Export for manual use
window.PortfolioLoader = PortfolioLoader;
