// Apply fixes to the page
function applyFixes() {
  // Create a style element
  const style = document.createElement('style');
  style.id = 'learning-platform-fixer-styles';

  // Add your CSS fixes
  style.textContent = `
    /* Width fix - target the container with max-width classes */
    div[class*="max-w-"] {
      max-width: 100% !important;
      width: 100% !important;
    }

    /* Text contrast improvements */
    p, span, div, h1, h2, h3, h4, h5, h6, li, a {
      color: #E0E0E0 !important;
    }

    .text-secondary {
      color: #D0D0D0 !important;
    }

    /* Make code blocks more readable */
    pre, code {
      background-color: #1E1E1E !important;
      color: #D4D4D4 !important;
    }

    /* Improve link visibility */
    a, a:visited {
      color: #66CCFF !important;
    }

    a:hover {
      color: #99DDFF !important;
    }
  `;

  // Remove any existing instance of our styles
  const existingStyle = document.getElementById('learning-platform-fixer-styles');
  if (existingStyle) {
    existingStyle.remove();
  }

  // Add the style to the page
  document.head.appendChild(style);

  console.log('Learning Platform Fixer: Applied styles');
}

// Run when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyFixes);
} else {
  applyFixes();
}

// Also watch for dynamic content changes (for SPAs)
const observer = new MutationObserver(function(mutations) {
  // Check if our style still exists
  if (!document.getElementById('learning-platform-fixer-styles')) {
    applyFixes();
  }
});

// Start observing after page loads
observer.observe(document.body, {
  childList: true,
  subtree: true
});
