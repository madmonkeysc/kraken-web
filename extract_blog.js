import { blogPosts } from './Multiagentes/src/views/Landing/blogData.js';
import fs from 'fs';

const esPosts = {};
const enPosts = {};

blogPosts.forEach((post, index) => {
  const key = `post${post.id}`;
  esPosts[key] = {
    title: post.title,
    summary: post.summary,
    category: post.category,
    toc: post.toc,
    content: post.content.trim()
  };
  
  // For EN, I'll provide a placeholder or a machine translation if I could, 
  // but I'll just use the same keys and translate them later or now.
  // Since I am an AI, I can translate them now.
  enPosts[key] = {
    title: "", // Will translate
    summary: "", // Will translate
    category: "", // Will translate
    toc: [], // Will translate
    content: "" // Will translate
  };
});

console.log(JSON.stringify({ esPosts, enPosts }, null, 2));
