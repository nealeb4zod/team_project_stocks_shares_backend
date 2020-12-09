const express = require('express');
const parser = require('body-parser');
const fetch = require('node-fetch');

const dotenv = require('dotenv');
const cors = require('cors');

const iexRouter = express.Router();

dotenv.config();
iexRouter.use(parser.json());
iexRouter.use(cors());

iexRouter.get('/symbols', (req, res) => {
  const url = `https://cloud.iexapis.com/stable/ref-data/symbols?token=${process.env.IEX_API_TOKEN}`;

  fetch(url)
    .then((jsonData) => jsonData.json())
    .then((data) => res.json(data));
});

iexRouter.get('/quote/:id', (req, res) => {
  const symbol = req.params.id;
  const url = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${process.env.IEX_API_TOKEN}`;
  console.log(url);

  fetch(url)
    .then((jsonData) => jsonData.json())
    .then((data) => res.json(data.latestPrice));
});

iexRouter.get('/chart/:id', (req, res) => {
  const symbol = req.params.id;
  const url = `https://cloud.iexapis.com/stable/stock/${symbol}/chart/1m?token=${process.env.IEX_API_TOKEN}`;
  console.log(url);

  fetch(url)
    .then((jsonData) => jsonData.json())
    .then((data) =>
      res.json(
        data.map((filteredData) => {
          return {
            closeValue: filteredData.close,
            closeValueDate: filteredData.date,
          };
        })
      )
    );
});

module.exports = iexRouter;
