const express = require('express');
const path = require('path');

const app = express();
const db = require('../database/index.js');

const PORT = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '..', 'public')));


app.get('/photos/:id', (req, res) => {
  const reqId = parseInt(req.params.id, 10);
  db.collection('images').find({ id: reqId }).toArray((err, result) => {
    if (err) { throw err; } else {
      res.send(result);
    }
  });
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`You are listening to port ${PORT}`));

module.export = app;


// console.log('Req.params.id: ', typeof req.params.id) //string
