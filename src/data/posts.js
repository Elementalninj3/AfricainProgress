/**
 * BLOG POST DATA - AFRICA IN PROGRESS
 * 
 * To add new articles, follow the guide in /HOW_TO_MANAGE_POSTS.md
 */

import { content as namibiaContent } from './articles/namibia-leo-connectivity';
import { content as cranContent } from './articles/cran-tech-challenge';
import treasureAvatar from '../assets/treasure-alao.jpg';

import cranImage from '../assets/cran-tech-challenge-winners.jpg';

export const BLOG_POSTS = [
  {
    id: 7,
    title: "NAMIBIA CLEARS THE PATH FOR LOW-EARTH ORBIT CONNECTIVITY",
    excerpt: "Namibia has granted regulatory approval for Low-Earth Orbit (LEO) satellite services, opening the door for next-generation internet connectivity across the country.",
    category: "Connectivity",
    date: "24 Jan 2024",
    readTime: "5 mins read",
    author: {
      name: "Treasure Alao",
      avatar: treasureAvatar
    },
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    featured: true,
    content: namibiaContent
  },
  {
    id: 8,
    title: "CRAN TECH CHALLENGE UNVEILS NAMIBIA'S BRIGHTEST STARTUPS",
    excerpt: "CRAN's inaugural Tech Challenge 2025 brought together over 110 young innovators competing for N$100,000 in prizes, showcasing game-changing solutions in education, healthcare, and government services.",
    category: "Innovation",
    date: "23 Jan 2024",
    readTime: "8 mins read",
    author: {
      name: "Treasure Alao",
      avatar: treasureAvatar
    },
    image: cranImage,
    featured: false,
    content: cranContent
  }
];

export const CATEGORIES = [
  "All",
  "Connectivity",
  "Innovation"
];
