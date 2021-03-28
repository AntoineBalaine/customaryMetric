const express = require('express');
const port = 3000;
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(port, () => {
  console.log(`express server running at http://localhost:${port}/`);
});

