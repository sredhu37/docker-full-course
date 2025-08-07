const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(3000, () => {
  console.log('Backend server running on port 3000');
});
