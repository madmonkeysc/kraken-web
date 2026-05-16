const fs = require('fs');

const content = fs.readFileSync('/Users/macbookpro/Multiagentes/src/views/Landing/blogData.js', 'utf8');

// Regex to extract posts
// This is tricky because of template literals.
// I'll try to parse it as best as I can or just manually extract.

const posts = [];
// Manual extraction of titles and categories to verify
const titles = content.match(/title: "(.*)"/g);
console.log(`Found ${titles ? titles.length : 0} titles`);

// I'll just use the AI's ability to transform the text since I have it in my context.
