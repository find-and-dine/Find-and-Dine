const express = require('express');
const app = express();

app.get('/photos/:id', (req, res) => {
  console.log("req: ", req.params.id);
  res.send(req.params.id);
});

module.exports = app;
