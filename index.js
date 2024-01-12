const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;


app.post('/sign-jwt', (req, res) => {
  
});


app.get('/validate-and-redirect', (req, res) => {
  
});


app.listen(port, () => {
  console.log(`JWT Server is running on port ${port}`);
});