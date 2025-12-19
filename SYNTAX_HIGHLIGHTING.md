# Syntax Highlighting Guide

The website now features automatic syntax highlighting for code blocks in articles, providing a colorful and professional presentation that matches the futuristic design theme.

## ✨ Features

### 🎨 **Futuristic Design Theme**
- **Custom Color Palette**: Matches your site's cyan, purple, pink, and green accent colors
- **Glassmorphism Effects**: Code blocks have subtle backdrop blur and gradient backgrounds
- **Glowing Borders**: Neon-style borders that enhance the futuristic aesthetic
- **Language Labels**: Automatic language detection with elegant labels in top-right corner

### 🔧 **Automatic Language Detection**
The system automatically detects programming languages based on code patterns and keywords:

- **Python**: `def`, `import`, `class`, `async/await`, decorators
- **JavaScript/TypeScript**: `function`, `const/let/var`, arrow functions, interfaces
- **SQL**: `SELECT`, `INSERT`, `UPDATE`, `CREATE TABLE`
- **Docker**: `FROM`, `RUN`, `COPY`, `EXPOSE`
- **Bash**: Shebang, common commands (`echo`, `cd`, `ls`)
- **JSON**: Object/array syntax, property patterns
- **CSS**: Selectors, properties, media queries
- **YAML**: Key-value pairs, list syntax

### 🚀 **Supported Languages**

| Language | Detection | Highlighting |
|----------|-----------|--------------|
| Python | ✅ | ✅ |
| JavaScript | ✅ | ✅ |
| TypeScript | ✅ | ✅ |
| JSON | ✅ | ✅ |
| SQL | ✅ | ✅ |
| CSS | ✅ | ✅ |
| Bash/Shell | ✅ | ✅ |
| Docker | ✅ | ✅ |
| YAML | ✅ | ✅ |

## 📝 How to Use

### **In Articles**
Simply wrap your code in `<pre><code>` tags:

```html
<pre><code>
def hello_world():
    print("Hello, World!")
    return True
</code></pre>
```

### **Language Detection**
The system will automatically:
1. Analyze code patterns and keywords
2. Assign the most likely language
3. Apply appropriate syntax highlighting
4. Display language label in corner

### **Manual Language Specification**
You can force a specific language by adding a comment at the start:

```html
<pre><code>
# Python
def example():
    pass
</code></pre>
```

## 🎨 Color Scheme

The syntax highlighting uses your site's futuristic color palette:

- **Keywords**: Pink (`#f471b5`) - `def`, `class`, `function`
- **Strings**: Cyan (`#00d4ff`) - Text in quotes
- **Numbers**: Green (`#10b981`) - Numeric values
- **Comments**: Gray (`#6b7280`) - Code comments
- **Operators**: Purple (`#8b5cf6`) - `=`, `+`, `-`, etc.
- **Functions**: Yellow (`#fbbf24`) - Function names

## 🔧 Technical Implementation

### **Files Added**
- `/assets/css/prism-theme.css` - Custom syntax highlighting theme
- `/assets/js/syntax-highlighter.js` - Automatic language detection

### **Dependencies**
- **Prism.js**: Loaded from CDN for syntax highlighting
- **JetBrains Mono**: Professional monospace font for code

### **Performance**
- **Lazy Loading**: Prism.js loads only when needed
- **Automatic Setup**: Works immediately on page load
- **Lightweight**: Minimal impact on page loading speed

## 📱 Responsive Design

Code blocks are fully responsive:
- **Mobile**: Horizontal scrolling for long lines
- **Tablet**: Optimized font sizes and spacing  
- **Desktop**: Full-width display with hover effects
- **Custom Scrollbars**: Styled to match the theme

## 🔄 Maintenance

### **Adding New Languages**
To add support for new languages:

1. **Update Detection Patterns** in `syntax-highlighter.js`:
```javascript
newlang: {
  patterns: [/pattern1/, /pattern2/],
  keywords: ['keyword1', 'keyword2']
}
```

2. **Add Prism Component**: The system automatically loads Prism.js components

3. **Test**: Use the demo page to verify highlighting works correctly

### **Updating Articles**
All existing articles have been updated to include syntax highlighting. New articles created using the template will automatically include the feature.

### **Customizing Colors**
Modify `/assets/css/prism-theme.css` to adjust colors:
```css
.token.keyword {
  color: #your-color;
}
```

## 🚀 GitHub Pages Compatibility

The syntax highlighting system is fully compatible with GitHub Pages:
- ✅ **Static Files**: No server-side processing required
- ✅ **CDN Resources**: Uses reliable CDN for Prism.js
- ✅ **Fast Loading**: Optimized for static hosting
- ✅ **Cross-Browser**: Works in all modern browsers

## 🎯 Examples

Visit `/articles/syntax-highlighting-demo.html` to see live examples of:
- Python FastAPI code with async/await
- TypeScript interfaces and classes  
- Docker multi-stage builds
- Complex SQL queries with joins
- Bash deployment scripts
- JSON configuration files

The syntax highlighting enhances code readability and maintains the professional, futuristic aesthetic of your personal website.
