const express = require('express');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejscrud',
    port: 3306,
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


app.listen(port, () => {
  console.log(`JWT Server is running on port ${port}`);
});