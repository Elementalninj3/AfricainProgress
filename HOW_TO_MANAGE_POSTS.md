# 🏗️ Managing Posts: Africa In Progress

This guide explains how to scale the platform to hundreds of articles while keeping the codebase clean and modular.

## 📁 Recommended Structure

To avoid a massive `posts.js` file, follow this modular pattern:

### 1. Create a dedicated folder

Move all long-form content to `src/data/articles/`.
Each article should be its own `.js` file exporting a string or a small object.

Example: `src/data/articles/fintech-lagos.js`

```javascript
export const content = \`
  <h2>The Future is Digital</h2>
  <p>Lagos is at the forefront of...</p>
\`;
```

### 2. Import into `posts.js`

Your main data file should only contain metadata (IDs, titles, images) and import the long content from the separate files.

```javascript
import { content as fintechContent } from "./articles/fintech-lagos";

export const BLOG_POSTS = [
  {
    id: 1,
    title: "The Rise of Fintech in Lagos",
    metadata: "...",
    content: fintechContent,
  },
  // ... more posts
];
```

## 🚀 How to Add a New Post

1.  **Prepare the Image**: Upload your high-res image or use a professional [Unsplash](https://unsplash.com) URL.
2.  **Define metadata**: Add a new object to the `BLOG_POSTS` array in `src/data/posts.js`.
3.  **Use unique IDs**: Ensure every new post has a unique incrementing `id`.
4.  **Set categories**: Use existing categories or add new ones to the `CATEGORIES` array at the bottom of `posts.js`.

---

## 🎨 Content Styling (Premium Editorial)

The platform uses **Tailwind Typography** with custom refinements. Use these tags in your content string for a "Vogue-meets-Tech" look:

- `<h2>`: Large, black-weighted section headers.
- `<p>`: Elegant, readable body text with wide line spacing.
- `<blockquote>`: Premium glass-morphism style pull quotes.
- `<img>`: Rounded, shadowed images with editorial captions.
- `<iframe>`: Responsive video embeds (YouTube/Vimeo) that maintain a 16:9 aspect ratio and include matching rounded corners.

**Example for Media & Pull Quotes:**

```html
<img src="https://example.com/photo.jpg" alt="Description" />

<iframe
  src="https://www.youtube.com/embed/..."
  frameborder="0"
  allowfullscreen
></iframe>

<blockquote>
  "Innovation isn't about the technology; it's about the people it serves."
</blockquote>
```

## 🛠️ Pro Tip: Mass Updates

If you plan on adding 100+ articles, consider using a headless CMS (like Contentful or Strapi) in the future. For now, this modular file-based approach is the most efficient way to maintain a high-performance, SEO-optimized React blog.
