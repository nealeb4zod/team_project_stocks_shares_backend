use stocks;
db.dropDatabase();

db.neale.insertMany([
  {
    username: 'Neale'
  },
  {
    symbol: 'AAPL',
    name: 'APPLE',
    quantity: 1500,
    date: '2020-12-06',
    purchasedPrice: 100,
    currentPrice: 125,
  },
  {
    symbol: 'TSLA',
    name: 'TESLA',
    quantity: 2000,
    date: '2020-03-04',
    purchasedPrice: 500,
    currentPrice: 700,
  },
])
db.ian.insertMany([
  {
    username: 'Ian'
  },
  {
    symbol: 'AAPL',
    name: 'APPLE',
    quantity: 1500,
    date: '2020-12-06',
    purchasedPrice: 100,
    currentPrice: 125,
  },
  {
    symbol: 'TSLA',
    name: 'TESLA',
    quantity: 2000,
    date: '2020-03-04',
    purchasedPrice: 500,
    currentPrice: 700,
  },
])
db.michael.insertMany([
  {
    username: 'Michael'
  },
  {
    symbol: 'AAPL',
    name: 'APPLE',
    quantity: 1500,
    date: '2020-12-06',
    purchasedPrice: 100,
    currentPrice: 125,
  },
  {
    symbol: 'TSLA',
    name: 'TESLA',
    quantity: 2000,
    date: '2020-03-04',
    purchasedPrice: 500,
    currentPrice: 700,
  },
])