/**
 * Syntax Highlighter - Automatic language detection and highlighting for code blocks
 * Uses Prism.js for syntax highlighting with automatic language detection
 */

class SyntaxHighlighter {
  constructor() {
    this.languages = {
      // Language detection patterns
      python: {
        patterns: [
          /def\s+\w+\s*\(/,
          /import\s+\w+/,
          /from\s+\w+\s+import/,
          /@\w+/,
          /if\s+__name__\s*==\s*['"']__main__['"']/,
          /class\s+\w+\s*\(/,
          /async\s+def/,
          /await\s+/
        ],
        keywords: ['def', 'class', 'import', 'from', 'if', 'else', 'elif', 'for', 'while', 'try', 'except', 'async', 'await', 'return', 'yield']
      },
      javascript: {
        patterns: [
          /function\s+\w+\s*\(/,
          /const\s+\w+\s*=/,
          /let\s+\w+\s*=/,
          /var\s+\w+\s*=/,
          /=>\s*{/,
          /console\.log\s*\(/,
          /require\s*\(/,
          /module\.exports/,
          /\.then\s*\(/,
          /async\s*\(/
        ],
        keywords: ['function', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 'return', 'async', 'await', 'try', 'catch']
      },
      typescript: {
        patterns: [
          /interface\s+\w+/,
          /type\s+\w+\s*=/,
          /:\s*string\b/,
          /:\s*number\b/,
          /:\s*boolean\b/,
          /<\w+>/,
          /public\s+\w+/,
          /private\s+\w+/
        ],
        keywords: ['interface', 'type', 'public', 'private', 'protected', 'readonly', 'extends', 'implements']
      },
      json: {
        patterns: [
          /^\s*{[\s\S]*}$/,
          /^\s*\[[\s\S]*\]$/,
          /"[\w\-_]+"\s*:\s*/
        ],
        keywords: []
      },
      css: {
        patterns: [
          /[\w\-]+\s*:\s*[\w\-#]+;/,
          /\.[\w\-]+\s*{/,
          /#[\w\-]+\s*{/,
          /@media\s/,
          /@import\s/,
          /rgba?\s*\(/
        ],
        keywords: ['@media', '@import', '@keyframes', 'hover', 'active', 'focus']
      },
      sql: {
        patterns: [
          /SELECT\s+.*FROM/i,
          /INSERT\s+INTO/i,
          /UPDATE\s+.*SET/i,
          /DELETE\s+FROM/i,
          /CREATE\s+TABLE/i,
          /ALTER\s+TABLE/i,
          /DROP\s+TABLE/i
        ],
        keywords: ['SELECT', 'FROM', 'WHERE', 'INSERT', 'UPDATE', 'DELETE', 'CREATE', 'ALTER', 'DROP', 'JOIN', 'INNER', 'LEFT', 'RIGHT']
      },
      bash: {
        patterns: [
          /#!/,
          /\$\s*\w+/,
          /echo\s+/,
          /cd\s+/,
          /ls\s+/,
          /mkdir\s+/,
          /rm\s+/,
          /cp\s+/,
          /mv\s+/,
          /chmod\s+/
        ],
        keywords: ['echo', 'cd', 'ls', 'mkdir', 'rm', 'cp', 'mv', 'chmod', 'grep', 'sed', 'awk', 'cat', 'head', 'tail']
      },
      docker: {
        patterns: [
          /FROM\s+\w+/i,
          /RUN\s+/i,
          /COPY\s+/i,
          /ADD\s+/i,
          /EXPOSE\s+/i,
          /CMD\s+/i,
          /ENTRYPOINT\s+/i,
          /WORKDIR\s+/i
        ],
        keywords: ['FROM', 'RUN', 'COPY', 'ADD', 'EXPOSE', 'CMD', 'ENTRYPOINT', 'WORKDIR', 'ENV', 'ARG', 'LABEL']
      },
      yaml: {
        patterns: [
          /^\s*\w+:\s*/m,
          /^\s*-\s+\w+/m,
          /version:\s*['"']?\d/,
          /services:\s*$/m
        ],
        keywords: ['version', 'services', 'build', 'image', 'ports', 'volumes', 'environment']
      }
    };

    this.init();
  }

  init() {
    // Load Prism.js if not already loaded
    this.loadPrism().then(() => {
      this.highlightCodeBlocks();
    });
  }

  async loadPrism() {
    // Check if Prism is already loaded
    if (window.Prism) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      // Load Prism.js core
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
      script.onload = () => {
        // Load additional language components
        this.loadLanguageComponents().then(resolve);
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async loadLanguageComponents() {
    const languages = ['python', 'javascript', 'typescript', 'json', 'css', 'sql', 'bash', 'docker', 'yaml'];
    const promises = languages.map(lang => this.loadLanguageComponent(lang));
    return Promise.all(promises);
  }

  loadLanguageComponent(language) {
    return new Promise((resolve) => {
      // Map language names to Prism component names
      const langMap = {
        'docker': 'dockerfile',
        'bash': 'bash',
        'yaml': 'yaml'
      };

      const prismLang = langMap[language] || language;

      if (window.Prism && window.Prism.languages && window.Prism.languages[prismLang]) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-${prismLang}.min.js`;
      script.onload = resolve;
      script.onerror = resolve; // Continue even if component fails to load
      document.head.appendChild(script);
    });
  }

  detectLanguage(code) {
    const cleanCode = code.trim().toLowerCase();

    // Check for explicit language comments (e.g., # Python, // JavaScript)
    const langComment = code.match(/^(?:\/\/|#|<!--)\s*(\w+)/);
    if (langComment) {
      const lang = langComment[1].toLowerCase();
      if (this.languages[lang]) {
        return lang;
      }
    }

    let scores = {};

    // Score each language based on patterns
    for (const [lang, config] of Object.entries(this.languages)) {
      scores[lang] = 0;

      // Check patterns
      for (const pattern of config.patterns) {
        if (pattern.test(code)) {
          scores[lang] += 2;
        }
      }

      // Check keywords
      for (const keyword of config.keywords) {
        const keywordRegex = new RegExp(`\\b${keyword}\\b`, 'gi');
        const matches = code.match(keywordRegex);
        if (matches) {
          scores[lang] += matches.length * 0.5;
        }
      }
    }

    // Find language with highest score
    let bestLang = 'text';
    let bestScore = 0;

    for (const [lang, score] of Object.entries(scores)) {
      if (score > bestScore) {
        bestScore = score;
        bestLang = lang;
      }
    }

    // Require minimum score to avoid false positives
    return bestScore >= 1 ? bestLang : 'text';
  }

  highlightCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre code:not([class*="language-"])');

    codeBlocks.forEach((codeElement, index) => {
      const code = codeElement.textContent;
      const language = this.detectLanguage(code);

      // Add language class
      codeElement.className = `language-${language}`;
      codeElement.parentElement.className = `language-${language}`;

      // Add data attribute for language label
      codeElement.parentElement.setAttribute('data-language', language);

      // Apply syntax highlighting if Prism is loaded
      if (window.Prism) {
        // Re-highlight this specific element
        window.Prism.highlightElement(codeElement);
      }
    });

    // Also highlight any blocks that already have language classes
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  }

  // Manual highlighting method for dynamically added content
  highlight(element) {
    const codeBlocks = element.querySelectorAll('pre code');
    codeBlocks.forEach((codeElement) => {
      if (!codeElement.className.includes('language-')) {
        const code = codeElement.textContent;
        const language = this.detectLanguage(code);
        codeElement.className = `language-${language}`;
        codeElement.parentElement.className = `language-${language}`;
        codeElement.parentElement.setAttribute('data-language', language);
      }

      if (window.Prism) {
        window.Prism.highlightElement(codeElement);
      }
    });
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.syntaxHighlighter = new SyntaxHighlighter();
});

// Export for manual use
window.SyntaxHighlighter = SyntaxHighlighter;
