# Assets Directory

This directory contains all the static assets for the website.

## Structure

```
assets/
├── images/          # High-resolution images, graphics, illustrations
├── icons/           # Icon files (SVG, PNG, ICO)
└── fonts/           # Custom font files (if any)
```

## Image Guidelines

### Images Directory
- Use high-quality images optimized for web
- Recommended formats: WebP, PNG, JPG
- Include responsive versions for different screen sizes
- Compress images for faster loading

### Icons Directory
- Use SVG format when possible for scalability
- Include multiple sizes (16x16, 32x32, 48x48, 64x64)
- Ensure icons are consistent with your brand

### Fonts Directory
- Include web font files (WOFF2, WOFF, TTF)
- Use font-display: swap for better performance
- Consider using Google Fonts or similar services

## Optimization Tips

1. **Compress images** before adding to the project
2. **Use appropriate formats** (WebP for photos, SVG for icons)
3. **Include alt text** for all images
4. **Lazy load** images below the fold
5. **Use responsive images** with srcset attribute