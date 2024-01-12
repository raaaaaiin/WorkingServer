const express = require('express');
const jwt = require('jsonwebtoken');
const validateJwt = require('./middleware');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(express.static('public'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejscrud',
    port: 3306,
  });
  
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
    } else {
      console.log('Connected to MySQL database');
    }
  });

function signJwt(req, res) {
  
}


function validateAndRedirect(req, res) {
  
}


app.post('/sign-jwt', (req, res) => {
  signJwt(req, res);
});


app.get('/validate-and-redirect', (req, res) => {
  validateAndRedirect(req, res);
});

app.get('/protected-route', validateJwt, (req, res) => {
  const { username } = req.jwtPayload;

  
  res.json({ message: `Hello, ${username}! This route is protected by JWT validation.` });

});


app.listen(port, () => {
  console.log(`JWT Server is running on port ${port}`);
});