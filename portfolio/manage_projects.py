#!/usr/bin/env python3
"""
Portfolio Management Script for Mehdi Ben Hamida's Website

This script helps manage portfolio projects by:
1. Creating new project templates
2. Updating the projects.json metadata file
3. Syncing data with JavaScript for GitHub Pages compatibility
4. Validating existing projects

Usage:
    python manage_projects.py create "Project Title" --subtitle "Tech • Stack • Year" --description "Brief description" --github "https://github.com/user/repo"
    python manage_projects.py list
    python manage_projects.py validate
    python manage_projects.py sync
"""

import json
import os
import argparse
from datetime import datetime
from pathlib import Path
import re

PORTFOLIO_DIR = Path(__file__).parent
PROJECTS_JSON = PORTFOLIO_DIR / "projects.json"
TEMPLATE_PATH = PORTFOLIO_DIR / "project-template.html"
JS_LOADER_PATH = PORTFOLIO_DIR.parent / "assets" / "js" / "portfolio-loader.js"

def slugify(text):
    """Convert title to URL-friendly slug"""
    text = re.sub(r'[^\w\s-]', '', text.lower())
    return re.sub(r'[-\s]+', '-', text)

def sync_projects_to_js():
    """Sync projects.json data to the JavaScript file for GitHub Pages compatibility"""
    try:
        # Load projects data
        with open(PROJECTS_JSON, 'r', encoding='utf-8') as f:
            projects_data = json.load(f)

        # Read the JavaScript file
        with open(JS_LOADER_PATH, 'r', encoding='utf-8') as f:
            js_content = f.read()

        # Format the projects data as JavaScript
        projects_js = json.dumps(projects_data, indent=6, ensure_ascii=False)

        # Find and replace the projectsData array in the JavaScript file
        import re
        pattern = r'(this\.projectsData = \[)[^;]*(\];)'
        replacement = f'\\1\n{projects_js.replace("]", "    ]")}\\2'

        updated_js = re.sub(pattern, replacement, js_content, flags=re.DOTALL)

        # Write back the updated JavaScript
        with open(JS_LOADER_PATH, 'w', encoding='utf-8') as f:
            f.write(updated_js)

        print(f"✅ Synced {len(projects_data)} projects to JavaScript loader")
        return True

    except Exception as e:
        print(f"❌ Error syncing projects to JavaScript: {e}")
        return False

def create_project_template():
    """Create the project template file"""
    template = '''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{{TITLE}} — Mehdi Ben Hamida</title>
  <meta name="description" content="{{DESCRIPTION}}" />
  <link rel="icon" href="../assets/img/favicon.ico" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/styles.css" />
  <link rel="stylesheet" href="../assets/css/prism-theme.css" />
  <style>
    .project-header {
      text-align: center;
      margin-bottom: 3rem;
      padding: 2rem 0;
    }
    .project-meta {
      color: var(--muted);
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    .project-content {
      max-width: 65ch;
      margin: 0 auto;
      line-height: 1.7;
    }
    .project-content h2 {
      margin-top: 2.5rem;
      margin-bottom: 1rem;
    }
    .project-content p {
      margin-bottom: 1.25rem;
    }
    .project-content code {
      background: var(--bg-card);
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-size: 0.9em;
    }
    .project-content pre {
      background: var(--bg-card);
      padding: 1.5rem;
      border-radius: 8px;
      overflow-x: auto;
      margin: 1.5rem 0;
    }
    .project-links-header {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin: 2rem 0;
      flex-wrap: wrap;
    }
    .project-links-header .inline-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8rem 1.5rem;
      background: rgba(0, 212, 255, 0.1);
      border: 1px solid rgba(0, 212, 255, 0.3);
      border-radius: 8px;
      transition: all 0.2s var(--ease);
    }
    .project-links-header .inline-link:hover {
      background: rgba(0, 212, 255, 0.2);
      transform: translateY(-2px);
    }
    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--accent);
      text-decoration: none;
      margin-bottom: 2rem;
      transition: color 0.2s var(--ease);
    }
    .back-link:hover {
      color: var(--accent-2);
    }
  </style>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header" role="banner">
    <nav class="nav" aria-label="Primary">
      <a class="logo" href="/">MBH</a>
      <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="nav-menu">
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
      </button>
      <ul id="nav-menu" class="nav-menu">
        <li><a href="../index.html">About</a></li>
        <li><a href="../articles.html">Articles</a></li>
        <li><a href="../portfolio.html">Portfolio</a></li>
        <li><a href="../books.html">Books</a></li>
        <li><a href="../resume.html">Resume</a></li>
        <li><a href="mailto:mehdi@example.com" rel="nofollow noopener">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main id="main" class="main-content">
    <a href="../portfolio.html" class="back-link">← Back to Portfolio</a>
    
    <article class="project-header">
      <h1>{{TITLE}}</h1>
      <p class="project-meta">{{SUBTITLE}}</p>
      
      <div class="project-links-header">
        <a class="inline-link" href="{{GITHUB}}" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
        <!-- {{DEMO_LINK}} placeholder for demo link if available -->
      </div>
    </article>

    <div class="project-content">
      <p>{{DESCRIPTION}}</p>

      <h2>Overview</h2>
      
      <p>Detailed description of your project goes here...</p>

      <h2>Key Features</h2>
      
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>

      <h2>Technical Implementation</h2>
      
      <p>Explain the technical aspects of your project:</p>

      <pre><code># Example code snippet
def example_function():
    """Example implementation"""
    return "Hello, World!"</code></pre>

      <h2>Installation & Usage</h2>

      <p>How to install and use your project:</p>

      <pre><code># Clone the repository
git clone {{GITHUB}}

# Install dependencies
pip install -r requirements.txt

# Run the project
python main.py</code></pre>

      <!-- Add more sections as needed -->
    </div>
  </main>

  <footer class="site-footer">
    <p>© <span id="year"></span> Mehdi Ben Hamida • <a href="https://github.com/mehdibenhamida" target="_blank" rel="noopener noreferrer">GitHub</a></p>
  </footer>

  <script src="../assets/js/main.js"></script>
  <script src="../assets/js/syntax-highlighter.js"></script>
</body>
</html>'''

    TEMPLATE_PATH.write_text(template)
    print(f"Created project template at {TEMPLATE_PATH}")

def load_projects():
    """Load projects from JSON file"""
    if not PROJECTS_JSON.exists():
        return []

    with open(PROJECTS_JSON, 'r') as f:
        return json.load(f)

def save_projects(projects):
    """Save projects to JSON file"""
    with open(PROJECTS_JSON, 'w') as f:
        json.dump(projects, f, indent=2)

def create_project(title, subtitle="Tech • Stack • Year", description="", github="", demo="", technologies=None, featured=False, status="draft"):
    """Create a new project"""
    projects = load_projects()

    # Generate slug and filename
    slug = slugify(title)
    filename = f"{slug}.html"

    # Check if project already exists
    if any(project['id'] == slug for project in projects):
        print(f"❌ Project with slug '{slug}' already exists!")
        return False

    # Parse technologies
    if technologies is None:
        # Try to extract from subtitle
        tech_parts = subtitle.split(' • ')
        technologies = [tech.strip() for tech in tech_parts if tech.strip()]

    # Create project data
    project_data = {
        "id": slug,
        "title": title,
        "subtitle": subtitle,
        "description": description,
        "github": github,
        "demo": demo,
        "technologies": technologies or [],
        "status": status,
        "created": datetime.now().strftime("%Y-%m-%d"),
        "featured": featured
    }

    # Add to projects list
    projects.insert(0, project_data)

    # Save projects
    save_projects(projects)

    # Create HTML file from template
    project_path = PORTFOLIO_DIR / filename
    if TEMPLATE_PATH.exists():
        template_content = TEMPLATE_PATH.read_text()

        # Replace placeholders
        content = template_content.replace('{{TITLE}}', title)
        content = content.replace('{{SUBTITLE}}', subtitle)
        content = content.replace('{{DESCRIPTION}}', description)
        content = content.replace('{{GITHUB}}', github)

        # Handle demo link
        if demo:
            demo_link = f'''<a class="inline-link demo-link" href="{demo}" target="_blank" rel="noopener noreferrer">Live Demo →</a>'''
        else:
            demo_link = ''
        content = content.replace('<!-- {{DEMO_LINK}} placeholder for demo link if available -->', demo_link)

        project_path.write_text(content)
        print(f"✅ Created project '{title}'")
        print(f"   File: {filename}")
        print(f"   ID: {slug}")
        print(f"   Status: {status}")
        if featured:
            print(f"   🌟 Featured project")
    else:
        print(f"❌ Template file not found at {TEMPLATE_PATH}")
        return False

    return True

def list_projects():
    """List all projects"""
    projects = load_projects()

    if not projects:
        print("No projects found.")
        return

    print(f"Found {len(projects)} projects:")
    print("=" * 50)

    for project in projects:
        status_indicator = "✅" if project["status"] == "published" else "📝"
        featured_indicator = "🌟 " if project.get("featured", False) else ""
        print(f"{status_indicator} {featured_indicator}{project['title']}")
        print(f"   ID: {project['id']}")
        print(f"   Subtitle: {project['subtitle']}")
        print(f"   Status: {project['status']}")
        print(f"   Created: {project['created']}")
        if project.get('github'):
            print(f"   GitHub: {project['github']}")
        if project.get('technologies'):
            print(f"   Tech: {', '.join(project['technologies'])}")
        print()

def validate_projects():
    """Validate projects and check for issues"""
    projects = load_projects()
    issues = []

    for project in projects:
        project_path = PORTFOLIO_DIR / f"{project['id']}.html"

        # Check if HTML file exists
        if not project_path.exists():
            issues.append(f"Missing file: {project['id']}.html for project '{project['title']}'")

        # Check for required fields
        required_fields = ['id', 'title', 'subtitle', 'description', 'created', 'status']
        for field in required_fields:
            if not project.get(field):
                issues.append(f"Missing {field} for project '{project['title']}'")

    if issues:
        print("Validation issues found:")
        for issue in issues:
            print(f"❌ {issue}")
    else:
        print("✅ All projects validated successfully!")

def main():
    parser = argparse.ArgumentParser(description="Manage portfolio projects for Mehdi Ben Hamida's website")
    subparsers = parser.add_subparsers(dest='command', help='Available commands')

    # Create command
    create_parser = subparsers.add_parser('create', help='Create a new project')
    create_parser.add_argument('title', help='Project title')
    create_parser.add_argument('--subtitle', default='Tech • Stack • Year', help='Project subtitle')
    create_parser.add_argument('--description', default='', help='Project description')
    create_parser.add_argument('--github', default='', help='GitHub repository URL')
    create_parser.add_argument('--demo', default='', help='Demo URL')
    create_parser.add_argument('--technologies', nargs='*', help='Technologies used')
    create_parser.add_argument('--featured', action='store_true', help='Mark as featured project')
    create_parser.add_argument('--status', choices=['draft', 'published'], default='draft', help='Project status')

    # List command
    subparsers.add_parser('list', help='List all projects')

    # Validate command
    subparsers.add_parser('validate', help='Validate projects')

    # Template command
    subparsers.add_parser('template', help='Create project template')

    # Sync command
    subparsers.add_parser('sync', help='Sync projects data to JavaScript for GitHub Pages')

    args = parser.parse_args()

    if args.command == 'create':
        create_project(
            args.title,
            args.subtitle,
            args.description,
            args.github,
            args.demo,
            args.technologies,
            args.featured,
            args.status
        )
    elif args.command == 'list':
        list_projects()
    elif args.command == 'validate':
        validate_projects()
    elif args.command == 'template':
        create_project_template()
    elif args.command == 'sync':
        sync_projects_to_js()
    else:
        parser.print_help()

if __name__ == "__main__":
    main()
