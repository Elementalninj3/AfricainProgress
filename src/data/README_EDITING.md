# Editing Blog Posts

This project is designed to be easily updated. All content is managed in `src/data/posts.js`.

### 📝 How to Add a New Post

1. Open `src/data/posts.js`.
2. Scroll to the `BLOG_POSTS` array.
3. Paste a new object into the array.

**Structure Example:**

```javascript
{
  id: 11, // Unique ID
  title: "Your Post Title",
  excerpt: "Brief summary of the post...",
  category: "Fintech", // Must match an item in CATEGORIES array
  date: "23 Jan 2024",
  readTime: "5 mins read",
  author: {
    name: "Author Name",
    avatar: "https://url-to-avatar.png"
  },
  image: "https://url-to-cover-image.png",
  featured: false // Set to true for the large top header
}
```

### 🌟 How to Change the Featured Post

The "Hero" section (the large image at the top) automatically displays the first post in the array that has `featured: true`.

- To change it, set your desired post to `featured: true` and ensure other posts are set to `featured: false`.

### 🏷️ How to Manage Categories

To add or remove categories from the filter bar, edit the `CATEGORIES` array at the bottom of the file:

```javascript
export const CATEGORIES = [
  "All",
  "Fintech",
  "Agritech",
  "New Category", // Add yours here
];
```

### 🖼️ Images

We recommend using high-quality landscape images (16:9 ratio) for the best look. You can use URLs from Unsplash, Pexels, or your own hosting.
