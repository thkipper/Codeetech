# Contributing to Website Project

Thank you for your interest in contributing to this website project! This document provides guidelines and information for contributors.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Create a new branch for your feature: `git checkout -b feature/your-feature-name`

## Development Workflow

1. Make your changes in the appropriate files:
   - HTML: `/public/index.html`
   - CSS: `/src/css/main.css`
   - JavaScript: `/src/js/main.js`

2. Test your changes locally:
   ```bash
   npm run dev
   ```

3. Build the project to ensure everything works:
   ```bash
   npm run build
   ```

4. Commit your changes with a clear message:
   ```bash
   git commit -m "Add: description of your changes"
   ```

5. Push to your fork and create a pull request

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Include proper ARIA labels for accessibility
- Maintain proper indentation (2 spaces)

### CSS
- Use CSS custom properties for theming
- Follow BEM naming convention when appropriate
- Maintain mobile-first responsive design
- Group related properties together

### JavaScript
- Use modern ES6+ features
- Add comments for complex functionality
- Follow consistent naming conventions
- Handle errors gracefully

## Pull Request Process

1. Ensure your code follows the style guidelines
2. Update documentation if needed
3. Test thoroughly across different browsers
4. Create a clear pull request description
5. Link any related issues

## Reporting Issues

When reporting issues, please include:
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## Questions?

Feel free to open an issue for any questions about contributing!