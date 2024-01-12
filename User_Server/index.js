const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./db'); 

const app = express();
const port = 4000;

function validateJwt(req, res, next) {

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