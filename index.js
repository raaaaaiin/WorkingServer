const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`JWT Server is running on port ${port}`);
});