const express = require('express');
const app = express();
const parser = require('body-parser');
const fetch = require('node-fetch');

const cors = require('cors');

app.use(parser.json());
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const iexRouter = require('./helpers/iex_router.js');

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('investments');
    const stocksCollection = db.collection('stocks');
    const stocksRouter = createRouter(stocksCollection);
    app.use('/api/stocks', stocksRouter);
  })
  .catch(console.err);

app.use('/iex-data', iexRouter);

app.listen(3000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
