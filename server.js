const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Set cache control headers to prevent caching in development
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// Middleware to serve static files (after cache control)
app.use(express.static('public'));

// Start server on all interfaces (required for Replit)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on http://0.0.0.0:${PORT}`);
  console.log(`🌐 FullTechRD website is ready!`);
});