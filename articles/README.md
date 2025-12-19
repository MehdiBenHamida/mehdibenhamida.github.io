# Articles Management for GitHub Pages

This articles system provides a dynamic, GitHub Pages-compatible solution for managing technical content and blog posts, using embedded data to avoid CORS issues while maintaining a clean development workflow.

## How it Works

Instead of fetching articles from `articles.json` at runtime (which doesn't work on GitHub Pages), the articles data is embedded directly in the JavaScript file `assets/js/articles-loader.js`. This approach ensures fast loading and compatibility with static hosting.

## Managing Articles

### Option 1: Manual Update (Recommended for GitHub Pages)

1. Edit the `articlesData` array in `/assets/js/articles-loader.js` directly
2. Add/modify/remove articles in the array
3. Commit and push to GitHub

### Option 2: Using the Python Script (For Development)

If you're working locally, you can use the Python management script:

```bash
# List all articles
python3 articles/manage_articles.py list

# Create a new article
python3 articles/manage_articles.py create "New Article Title" \
  --subtitle "Category • Topic • 2025" \
  --description "Brief description of the article content" \
  --cover "article-cover.svg" \
  --status published

# Validate articles
python3 articles/manage_articles.py validate

# Sync articles.json to JavaScript (keeps both files in sync)
python3 articles/manage_articles.py sync

# Create article template
python3 articles/manage_articles.py template
```

## Article Structure

Each article should have the following properties:

```json
{
  "id": "article-slug",
  "title": "Article Title",
  "subtitle": "Category • Topic • Year",
  "description": "Brief description of the article content and key takeaways",
  "cover": "cover-image.svg",
  "published": "2025-01-15",
  "status": "published", // or "draft"
  "url": "article-filename.html"
}
```

## Current Articles

### **Published Articles**

1. **Syntax Highlighting Demo** (2025-01-16)
   - Demo • Features • 2025
   - Demonstration of automatic syntax highlighting features

2. **Practical Python Project Structure** (2025-01-15)  
   - Architecture • Python • 2025
   - Guidelines for structuring medium-sized Python services

3. **FastAPI Patterns that Scale** (2025-01-05)
   - FastAPI • APIs • 2025
   - Patterns for routers, dependencies, error handling, and testing

4. **Docker Best Practices** (2024-12-19)
   - DevOps • Containers • 2025
   - Essential Docker patterns for development and production

### **Draft Articles**

5. **Observability for Backend Services** (2025-01-10)
   - Monitoring • Logging • 2025
   - Setting up logging, metrics, and traces without complexity

## Features

### **Dynamic Content Loading**
- **Automatic Sorting**: Articles sorted by publication date (newest first)
- **Status Filtering**: Only published articles appear on the website
- **Cover Images**: Professional SVG covers matching site design
- **Responsive Cards**: Mobile-optimized article cards

### **Syntax Highlighting**
- **Automatic Language Detection**: Detects Python, JavaScript, SQL, Docker, etc.
- **Futuristic Theme**: Custom colors matching site design
- **Professional Fonts**: JetBrains Mono for optimal code readability
- **GitHub Pages Compatible**: Uses CDN resources, no local dependencies

### **Article Templates**
- **Consistent Structure**: Pre-built HTML template with navigation
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Syntax Highlighting Ready**: Prism.js integration included
- **Responsive Design**: Works on all devices

## File Structure

```
articles/
├── articles.json              # Source of truth (for development)
├── manage_articles.py         # Management CLI tool
├── article-template.html      # Template for new articles
├── README.md                 # This documentation
├── python-project-structure.html
├── fastapi-patterns.html
├── docker-best-practices.html
├── observability-backend.html
└── syntax-highlighting-demo.html

assets/js/
└── articles-loader.js        # Contains embedded articles data

assets/css/
└── prism-theme.css          # Custom syntax highlighting theme
```

## Article Covers

All article covers are stored in `/assets/img/covers/` and follow a consistent futuristic design:

- **clean-architecture.svg** - Software architecture content
- **designing-data-intensive.svg** - Data engineering topics  
- **docker-best-practices.svg** - Container and DevOps content
- **effective-python.svg** - Python development articles
- **fastapi-patterns.svg** - API development content
- **observability.svg** - Monitoring and logging topics
- **python-structure.svg** - Python architecture content
- **syntax-highlighting.svg** - Development tools and features
- **placeholder.svg** - Generic fallback for new articles

## Creating New Articles

### Using the Management Script

```bash
# Create a new Python article
python3 articles/manage_articles.py create "Advanced Python Decorators" \
  --subtitle "Python • Patterns • 2025" \
  --description "Deep dive into decorator patterns and practical applications" \
  --cover "effective-python.svg" \
  --status draft

# Publish when ready
# Edit the article, then change status in articles.json and sync
python3 articles/manage_articles.py sync
```

### Manual Creation

1. **Add Article Data** to `articles-loader.js`:
```javascript
{
  "id": "new-article-slug",
  "title": "New Article Title", 
  "subtitle": "Category • Topic • 2025",
  "description": "Article description",
  "cover": "appropriate-cover.svg",
  "published": "2025-12-19", 
  "status": "published",
  "url": "new-article-slug.html"
}
```

2. **Create HTML File** from `article-template.html`
3. **Add Content** with syntax highlighting support
4. **Commit and Push** to GitHub

## Syntax Highlighting Usage

Articles support automatic syntax highlighting for code blocks:

```html
<!-- Python example -->
<pre><code>
def example_function():
    """This will be automatically highlighted as Python"""
    return "Hello, World!"
</code></pre>

<!-- JavaScript example -->  
<pre><code>
const fetchData = async () => {
    // Automatically detected as JavaScript
    const response = await fetch('/api/data');
    return response.json();
};
</code></pre>
```

### Supported Languages
- Python, JavaScript, TypeScript
- SQL, CSS, HTML
- Docker, Bash, YAML, JSON
- And more via Prism.js

## Content Guidelines

### **Article Structure**
- **Introduction**: Clear problem statement and what readers will learn
- **Code Examples**: Well-commented, practical examples
- **Best Practices**: Actionable recommendations
- **Conclusion**: Summary of key takeaways

### **Technical Writing**
- **Clear Headlines**: Descriptive H2/H3 sections
- **Code Quality**: Production-ready examples
- **Explanations**: Context for why, not just how
- **Resources**: Links to relevant documentation

### **SEO Optimization**
- **Descriptive Titles**: Include primary keywords
- **Meta Descriptions**: Compelling 150-character summaries  
- **Semantic HTML**: Proper heading hierarchy
- **Internal Links**: Cross-reference related articles

## GitHub Pages Deployment

The articles system is fully compatible with GitHub Pages:

- ✅ **Static Files**: No server-side processing required
- ✅ **Fast Loading**: Embedded data prevents fetch requests
- ✅ **SEO Friendly**: All content statically available
- ✅ **Mobile Ready**: Responsive design for all devices
- ✅ **Syntax Highlighting**: CDN-based, no local dependencies

## Maintenance

### **Adding New Articles**
1. Use the management script for development
2. Run `sync` command to update JavaScript
3. Validate with `validate` command
4. Commit and push to deploy

### **Updating Existing Articles**
1. Edit the HTML file directly
2. Update metadata in both `articles.json` and `articles-loader.js`
3. Ensure cover images exist in `/assets/img/covers/`

### **Managing Covers**
- Use consistent SVG format for all covers
- Follow the futuristic design theme
- Optimize for fast loading
- Create new covers for new article categories

The articles system automatically updates when you push changes to GitHub, making it perfect for maintaining a professional technical blog with your personal website's futuristic aesthetic!
