const express = require('express');
const app = express();
const port = 3001;
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');

const routes = require('./routes');

// Database

// Connectio URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'dinotesDB';

app.use(bodyParser.urlencoded({ extended: true }));

// Connect to DB
MongoClient.connect(url, (err, client) => {
  const db = client.db(dbName);
  const notesCollection = db.collection('notes');

  app.locals.notesCollection = notesCollection;

  client.close();
});

// Routes

app.use('/', routes);

app.listen(port, () => {
  console.log(`REST API listening at http://localhost:${port}`);
});
