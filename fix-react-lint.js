// fix-react-lint.js
// Automatically fix common Deno lint issues in a React (Vite) project

import fs from 'fs';

const filePath = './src/App.jsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Remove unused 'React' import
content = content.replace(/import\s+React,\s*\{\s*useState\s*\}\s+from\s+["']react["'];/, "import { useState } from 'react';");

// Replace 'window.Image' with 'globalThis.Image'
content = content.replace(/window\.Image/g, 'globalThis.Image');

fs.writeFileSync(filePath, content);
console.log('✅ React lint issues fixed in src/App.jsx');
