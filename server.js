const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const appName = process.env.APP_NAME || 'DefaultApp';

// Serve static images from ./images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve the main HTML file
app.get('/', (req, res) => {
  console.log(`Request served by ${appName}`);
  res.sendFile(path.join(__dirname, 'tunisian-food.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`${appName} is listening on port ${PORT}`);
});
