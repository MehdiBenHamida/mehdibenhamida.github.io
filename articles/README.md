# Articles Management for GitHub Pages

This website uses a GitHub Pages-compatible approach for managing articles that doesn't require server-side processing.

## How it Works

Instead of fetching articles from `articles.json` at runtime (which doesn't work on GitHub Pages), the articles data is embedded directly in the JavaScript file `assets/js/articles-loader.js`.

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
  --description "Brief description" \
  --cover "article-cover.svg"

# Validate articles
python3 articles/manage_articles.py validate

# Sync articles.json to JavaScript (keeps both files in sync)
python3 articles/manage_articles.py sync
```

## Article Structure

Each article should have the following properties:

```json
{
  "id": "article-slug",
  "title": "Article Title",
  "subtitle": "Category • Topic • Year",
  "description": "Brief description of the article content",
  "cover": "cover-image.svg",
  "published": "2025-01-15",
  "status": "published", // or "draft"
  "url": "article-filename.html"
}
```

## Deployment Workflow

For GitHub Pages deployment:

1. **Local Development**: 
   - Serve with `python3 -m http.server 8000`
   - Access at `http://localhost:8000`

2. **GitHub Pages Production**:
   - Articles data is embedded in JavaScript
   - No server-side processing needed
   - Fully static and compatible with GitHub Pages

## File Structure

```
articles/
├── articles.json          # Source of truth (for development)
├── manage_articles.py     # Management script
├── article-template.html  # Template for new articles
├── article1.html         # Individual article files
└── article2.html

assets/js/
└── articles-loader.js     # Contains embedded articles data
```

## Key Benefits

- ✅ **GitHub Pages Compatible**: No server-side requirements
- ✅ **Fast Loading**: No additional HTTP requests for article metadata
- ✅ **Offline Capable**: Articles list works without network
- ✅ **SEO Friendly**: All content is statically available

## Important Notes

- Only articles with `"status": "published"` will appear on the website
- Articles are automatically sorted by publication date (newest first)
- Cover images should be placed in `/assets/img/covers/`
- When adding new articles via the Python script, remember to run `sync` to update the JavaScript file
