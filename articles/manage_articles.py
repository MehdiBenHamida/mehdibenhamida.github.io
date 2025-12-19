#!/usr/bin/env python3
"""
Article Management Script for Mehdi Ben Hamida's Website

This script helps manage articles by:
1. Creating new article templates
2. Updating the articles.json metadata file
3. Syncing data with JavaScript for GitHub Pages compatibility
4. Validating existing articles

Usage:
    python manage_articles.py create "Article Title" --subtitle "Category • Topic • Year" --description "Brief description"
    python manage_articles.py list
    python manage_articles.py validate
    python manage_articles.py sync
"""

import json
import os
import argparse
from datetime import datetime
from pathlib import Path
import re

ARTICLES_DIR = Path(__file__).parent
ARTICLES_JSON = ARTICLES_DIR / "articles.json"
TEMPLATE_PATH = ARTICLES_DIR / "article-template.html"
JS_LOADER_PATH = ARTICLES_DIR.parent / "assets" / "js" / "articles-loader.js"

def slugify(text):
    """Convert title to URL-friendly slug"""
    text = re.sub(r'[^\w\s-]', '', text.lower())
    return re.sub(r'[-\s]+', '-', text)

def sync_articles_to_js():
    """Sync articles.json data to the JavaScript file for GitHub Pages compatibility"""
    try:
        # Load articles data
        with open(ARTICLES_JSON, 'r', encoding='utf-8') as f:
            articles_data = json.load(f)

        # Read the JavaScript file
        with open(JS_LOADER_PATH, 'r', encoding='utf-8') as f:
            js_content = f.read()

        # Format the articles data as JavaScript
        articles_js = json.dumps(articles_data, indent=6, ensure_ascii=False)

        # Find and replace the articlesData array in the JavaScript file
        import re
        pattern = r'(this\.articlesData = \[)[^;]*(\];)'
        replacement = f'\\1\n{articles_js.replace("]", "    ]")}\\2'

        updated_js = re.sub(pattern, replacement, js_content, flags=re.DOTALL)

        # Write back the updated JavaScript
        with open(JS_LOADER_PATH, 'w', encoding='utf-8') as f:
            f.write(updated_js)

        print(f"✅ Synced {len(articles_data)} articles to JavaScript loader")
        return True

    except Exception as e:
        print(f"❌ Error syncing articles to JavaScript: {e}")
        return False

def create_article_template():
    """Create a reusable article template"""
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
    .article-header {
      text-align: center;
      margin-bottom: 3rem;
      padding: 2rem 0;
    }
    .article-meta {
      color: var(--muted);
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    .article-content {
      max-width: 65ch;
      margin: 0 auto;
      line-height: 1.7;
    }
    .article-content h2 {
      margin-top: 2.5rem;
      margin-bottom: 1rem;
    }
    .article-content p {
      margin-bottom: 1.25rem;
    }
    .article-content code {
      background: var(--bg-card);
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-size: 0.9em;
    }
    .article-content pre {
      background: var(--bg-card);
      padding: 1.5rem;
      border-radius: 8px;
      overflow-x: auto;
      margin: 1.5rem 0;
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
    <a href="../articles.html" class="back-link">← Back to Articles</a>
    
    <article class="article-header">
      <h1>{{TITLE}}</h1>
      <p class="article-meta">{{SUBTITLE}}</p>
    </article>

    <div class="article-content">
      <p>{{DESCRIPTION}}</p>

      <h2>Section Title</h2>
      
      <p>Your content here...</p>

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
    print(f"Created article template at {TEMPLATE_PATH}")

def load_articles():
    """Load articles from JSON file"""
    if not ARTICLES_JSON.exists():
        return []

    with open(ARTICLES_JSON, 'r') as f:
        return json.load(f)

def save_articles(articles):
    """Save articles to JSON file"""
    with open(ARTICLES_JSON, 'w') as f:
        json.dump(articles, f, indent=2)

def create_article(title, subtitle="Article • Topic • 2025", description="", cover="placeholder.svg", status="draft"):
    """Create a new article"""
    articles = load_articles()

    # Generate slug and filename
    slug = slugify(title)
    filename = f"{slug}.html"
    article_path = ARTICLES_DIR / filename

    # Check if article already exists
    if any(article['id'] == slug for article in articles):
        print(f"Error: Article with id '{slug}' already exists")
        return False

    # Create article metadata
    article_data = {
        "id": slug,
        "title": title,
        "subtitle": subtitle,
        "description": description or f"An article about {title.lower()}.",
        "cover": cover,
        "published": datetime.now().strftime("%Y-%m-%d"),
        "status": status,
        "url": filename
    }

    # Create article HTML from template
    if not TEMPLATE_PATH.exists():
        create_article_template()

    template_content = TEMPLATE_PATH.read_text()
    article_content = template_content.replace("{{TITLE}}", title)
    article_content = article_content.replace("{{SUBTITLE}}", subtitle)
    article_content = article_content.replace("{{DESCRIPTION}}", article_data["description"])

    article_path.write_text(article_content)

    # Add to articles list
    articles.append(article_data)
    save_articles(articles)

    print(f"Created article: {filename}")
    print(f"Article ID: {slug}")
    print(f"Status: {status}")
    print(f"Edit the file: {article_path}")

    return True

def list_articles():
    """List all articles"""
    articles = load_articles()

    if not articles:
        print("No articles found.")
        return

    print(f"Found {len(articles)} articles:")
    print("=" * 50)

    for article in articles:
        status_indicator = "✅" if article["status"] == "published" else "📝"
        print(f"{status_indicator} {article['title']}")
        print(f"   ID: {article['id']}")
        print(f"   Subtitle: {article['subtitle']}")
        print(f"   Status: {article['status']}")
        print(f"   Published: {article['published']}")
        print()

def validate_articles():
    """Validate articles and check for issues"""
    articles = load_articles()
    issues = []

    for article in articles:
        article_path = ARTICLES_DIR / article["url"]

        # Check if HTML file exists
        if not article_path.exists():
            issues.append(f"Missing file: {article['url']} for article '{article['title']}'")

        # Check for required fields
        required_fields = ['id', 'title', 'subtitle', 'description', 'published', 'status', 'url']
        for field in required_fields:
            if not article.get(field):
                issues.append(f"Missing {field} for article '{article['title']}'")

    if issues:
        print("Validation issues found:")
        for issue in issues:
            print(f"❌ {issue}")
    else:
        print("✅ All articles validated successfully!")

def main():
    parser = argparse.ArgumentParser(description="Manage articles for Mehdi Ben Hamida's website")
    subparsers = parser.add_subparsers(dest='command', help='Available commands')

    # Create command
    create_parser = subparsers.add_parser('create', help='Create a new article')
    create_parser.add_argument('title', help='Article title')
    create_parser.add_argument('--subtitle', default='Article • Topic • 2025', help='Article subtitle')
    create_parser.add_argument('--description', default='', help='Article description')
    create_parser.add_argument('--cover', default='placeholder.svg', help='Cover image filename')
    create_parser.add_argument('--status', choices=['draft', 'published'], default='draft', help='Article status')

    # List command
    subparsers.add_parser('list', help='List all articles')

    # Validate command
    subparsers.add_parser('validate', help='Validate articles')

    # Template command
    subparsers.add_parser('template', help='Create article template')

    # Sync command
    subparsers.add_parser('sync', help='Sync articles data to JavaScript for GitHub Pages')

    args = parser.parse_args()

    if args.command == 'create':
        create_article(args.title, args.subtitle, args.description, args.cover, args.status)
    elif args.command == 'list':
        list_articles()
    elif args.command == 'validate':
        validate_articles()
    elif args.command == 'template':
        create_article_template()
    elif args.command == 'sync':
        sync_articles_to_js()
    else:
        parser.print_help()

if __name__ == "__main__":
    main()
