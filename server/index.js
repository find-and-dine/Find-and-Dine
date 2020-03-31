/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const compression = require('compression');
const cors = require('cors');
const db = require('../database/index.js');

const app = express();

const PORT = 3001;

app.use(cors());
app.use(compression())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/:id', express.static(path.resolve(__dirname, '..', 'public')));


app.get('/photos/:id', (req, res) => {
  const reqId = req.params.id;
  db.find({ id: reqId }, (err, result) => {
    if (err) { throw err; } else {
      res.send(result);
    }
  });
});

app.get('/api/bundle', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'bundle.js'));
});

app.listen(PORT, () => console.log(`You are listening to port ${PORT}`));

module.export = app;
