# Mehdi Ben Hamida — Personal Website

A modern, responsive personal website suitable for GitHub Pages.

Features
- Clean, accessible, responsive design
- Pages: About, Articles, Portfolio, Books
- Lightweight and fast, no frameworks
- Dark/light theme preference-aware

Structure
- index.html — Home/About with hero, summary, and links
- articles.html — Blog/articles list
- portfolio.html — Project portfolio
- books.html — Book recommendations
- assets/css/styles.css — Global styles
- assets/js/main.js — Minimal JS (mobile nav toggle, theme helpers)
- assets/img/ — Images (profile picture, favicon, placeholders)

Local development
- Use any static server. With Python:

```zsh
python3 -m http.server 8080 --directory .
```

Then open http://localhost:8080 in your browser.

Deployment (GitHub Pages)
- Push to a repo named mehdiBenHamida.github.io (or configure Pages for another repo)
- Ensure default branch is published under Settings → Pages

Authoring content
- Edit the dedicated pages:
  - articles.html: add or link posts (you can later move to Jekyll if desired)
  - portfolio.html: add projects with links and tags
  - books.html: add recommendations with notes

Customization
- Update metadata in <head> of each page (title, description, Open Graph)
- Replace placeholder content and images in assets/img
- Adjust accent color in :root variables within styles.css

Best practices
- Semantic HTML5 sections and ARIA labels
- Performance-friendly: system fonts, compressed images, no heavy JS
- Accessible contrasts and focus states, skip link
- Mobile-first CSS, responsive images

