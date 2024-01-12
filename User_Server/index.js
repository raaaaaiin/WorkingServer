const express = require('express');
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`User Management Server is running on port ${port}`);
});