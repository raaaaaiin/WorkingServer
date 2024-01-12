const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./db');
const validateJwt = require('../JWT_Server/middleware'); 


const app = express();
const port = 4000;

app.use(express.static('public'));
app.use(express.json());


  app.post('/users', validateJwt, (req, res) => {
    const { username, firstname, lastname, password } = req.body;
  
    const hashedPassword = bcrypt.hashSync(password, 10);
  
    const newUser = {
      username,
      firstname,
      lastname,
      password: hashedPassword,
      dateAdded: new Date().toISOString(), 
    };
  
    db.query('INSERT INTO users SET ?', newUser, (err, result) => {
      if (err) {
        console.error('Error inserting user into the database:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      res.status(201).json(newUser);
    });
  });
  
  app.get('/users', validateJwt, (req, res) => {
    db.query('SELECT username, firstname, lastname, dateAdded FROM users', (err, results) => {
      if (err) {
        console.error('Error retrieving users from the database:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      res.json(results);
    });
  });
  
  app.get('/users/:username', validateJwt, (req, res) => {
    const { username } = req.params;
  
    db.query(
      'SELECT username, firstname, lastname, dateAdded FROM users WHERE username = ?',
      [username],
      (err, results) => {
        if (err) {
          console.error('Error retrieving user from the database:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
  
        if (results.length > 0) {
          res.json(results[0]);
        } else {
          res.status(404).json({ error: 'User not found' });
        }
      }
    );
  });
  
  app.put('/users/:username', validateJwt, (req, res) => {
    const { username } = req.params;
    const { firstname, lastname, password } = req.body;
  
    const hashedPassword = bcrypt.hashSync(password, 10);
  
    db.query(
      'UPDATE users SET firstname=?, lastname=?, password=? WHERE username=?',
      [firstname, lastname, hashedPassword, username],
      (err, result) => {
        if (err) {
          console.error('Error updating user in the database:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
  
        if (result.affectedRows > 0) {
          res.json({ username, firstname, lastname, password: '*****' });
        } else {
          res.status(404).json({ error: 'User not found' });
        }
      }
    );
  });
  
  app.delete('/users/:username', validateJwt, (req, res) => {
    const { username } = req.params;
  
    db.query('DELETE FROM users WHERE username=?', [username], (err, result) => {
      if (err) {
        console.error('Error deleting user from the database:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      if (result.affectedRows > 0) {
        res.json({ username, message: 'User deleted successfully' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    });
  });
  
  app.listen(port, () => {
    console.log(`User Management Server is running on port ${port}`);
  });