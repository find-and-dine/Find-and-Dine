const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const db = require('../database/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/photos/:id', (req, res) => {
  const reqId = parseInt(req.params.id, 10);
  db.collection('images').find({ id: reqId }).toArray((err, result) => {
    if (err) { throw err; } else {
      res.send(result);
    }
  });
});

module.exports = app;


// console.log('Req.params.id: ', typeof req.params.id) //string
