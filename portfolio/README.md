# Portfolio Management for GitHub Pages

This portfolio system provides a dynamic, GitHub Pages-compatible solution for managing project showcases, similar to the articles system.

## How it Works

The portfolio system uses embedded project data in JavaScript to avoid CORS issues with GitHub Pages static hosting, while maintaining a clean development workflow.

## Managing Projects

### Option 1: Manual Update (Recommended for GitHub Pages)

1. Edit the `projectsData` array in `/assets/js/portfolio-loader.js` directly
2. Add/modify/remove projects in the array
3. Commit and push to GitHub

### Option 2: Using the Python Script (For Development)

If you're working locally, you can use the Python management script:

```bash
# List all projects
python3 portfolio/manage_projects.py list

# Create a new project
python3 portfolio/manage_projects.py create "My New Project" \
  --subtitle "Python • FastAPI • Docker" \
  --description "Brief description of the project" \
  --github "https://github.com/mehdibenhamida/my-project" \
  --technologies Python FastAPI Docker \
  --featured \
  --status published

# Validate projects
python3 portfolio/manage_projects.py validate

# Sync projects.json to JavaScript (keeps both files in sync)
python3 portfolio/manage_projects.py sync
```

## Project Structure

Each project should have the following properties:

```json
{
  "id": "project-slug",
  "title": "Project Title",
  "subtitle": "Tech • Stack • Year",
  "description": "Brief description of the project functionality and purpose",
  "github": "https://github.com/username/project-repo",
  "demo": "https://project-demo.com", // optional
  "technologies": ["Python", "FastAPI", "Docker"],
  "status": "published", // or "draft"
  "created": "2024-08-15",
  "featured": true // for priority display
}
```

## Features

### **Dynamic Filtering**
- **All Projects**: Shows all published projects
- **Featured**: Shows only featured projects
- **Technology Filters**: Filter by specific technologies (Python, FastAPI, Docker)

### **Project Cards**
- **Featured Badge**: Special highlighting for important projects
- **Technology Tags**: Visual tech stack indicators
- **GitHub Links**: Direct links to repositories
- **Demo Links**: Optional live demo links
- **Professional Styling**: Consistent with site design

### **Responsive Design**
- **Mobile Optimized**: Cards stack properly on mobile devices
- **Hover Effects**: Smooth animations and glows
- **Accessibility**: Proper ARIA labels and keyboard navigation

## File Structure

```
portfolio/
├── projects.json          # Source of truth (for development)
├── manage_projects.py     # Management script
├── project-template.html  # Template for individual project pages
├── project1.html         # Individual project showcase pages
└── project2.html

assets/js/
└── portfolio-loader.js    # Contains embedded projects data

assets/css/
└── styles.css            # Portfolio-specific styles included
```

## Key Benefits

- ✅ **GitHub Pages Compatible**: No server-side requirements
- ✅ **Fast Loading**: No additional HTTP requests for project metadata
- ✅ **Filtering & Sorting**: Featured projects prioritized, date sorting
- ✅ **SEO Friendly**: All content statically available
- ✅ **Consistent Design**: Matches articles system patterns

## Usage Examples

### Adding a Featured Python Project
```bash
python3 portfolio/manage_projects.py create "ML Pipeline Automation" \
  --subtitle "MLOps • Python • Kubernetes" \
  --description "End-to-end machine learning pipeline with automated training and deployment" \
  --github "https://github.com/mehdibenhamida/ml-pipeline" \
  --demo "https://ml-demo.example.com" \
  --technologies Python scikit-learn Kubernetes MLflow \
  --featured \
  --status published
```

### Creating a Draft Project
```bash
python3 portfolio/manage_projects.py create "API Gateway Service" \
  --subtitle "FastAPI • Redis • Docker" \
  --description "High-performance API gateway with rate limiting and caching" \
  --github "https://github.com/mehdibenhamida/api-gateway" \
  --status draft
```

## Individual Project Pages

Each project can have its own detailed page:
- **Template**: `/portfolio/project-template.html`
- **Content**: Technical details, code examples, installation instructions
- **Syntax Highlighting**: Full support for code blocks
- **Consistent Navigation**: Links back to portfolio

## Technology Stack Integration

The system automatically:
1. **Detects Technologies**: From subtitle and explicit tags
2. **Creates Filter Buttons**: Dynamic technology filters
3. **Sorts Projects**: Featured first, then by creation date
4. **Renders Cards**: With appropriate technology styling

## Maintenance

### **Keeping Data Synced**
```bash
# After editing projects.json, sync to JavaScript
python3 portfolio/manage_projects.py sync
```

### **Validation**
```bash
# Check for missing files or invalid data
python3 portfolio/manage_projects.py validate
```

### **Listing Projects**
```bash
# View all projects with status indicators
python3 portfolio/manage_projects.py list
```

## GitHub Pages Deployment

The portfolio system is fully compatible with GitHub Pages:
- ✅ **Static Files**: No server processing required
- ✅ **Fast Loading**: Embedded data prevents fetch requests
- ✅ **Cross-Browser**: Works in all modern browsers
- ✅ **Mobile Ready**: Responsive design for all devices

The portfolio section automatically updates when you push changes to GitHub, making it perfect for showcasing your latest work!
