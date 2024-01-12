const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./db'); 

const app = express();
const port = 4000;

function validateJwt(req, res, next) {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized - JWT missing' });
    }
  
    jwt.verify(token, 'marcraineerfilosopo06272000', (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized - Invalid JWT' });
      }
  
      req.jwtPayload = decoded;
      next();
    });
  }


app.use(express.json());


app.post('/users', validateJwt, (req, res) => {
  
});


app.get('/users', validateJwt, (req, res) => {
 
});


app.get('/users/:username', validateJwt, (req, res) => {
  
});


app.put('/users/:username', validateJwt, (req, res) => {
 
});


app.delete('/users/:username', validateJwt, (req, res) => {
  
});


app.listen(port, () => {
  console.log(`User Management Server is running on port ${port}`);
});