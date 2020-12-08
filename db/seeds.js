use investments;
db.dropDatabase();

db.stocks.insertMany([
  {
    userName: "Neale",
    stocks: [
      {
        symbol: 'AAPL',
        name: 'APPLE',
        quantity: 1500,
        date: '2020-12-06',
        purchasedPrice: 100,
      },
      {
        symbol: 'TSLA',
        name: 'TESLA',
        quantity: 2000,
        date: '2020-03-04',
        purchasedPrice: 500,
      },
    ]
  },
  {
    userName: "Michael",
    stocks: [
      {
        symbol: 'AAPL',
        name: 'APPLE',
        quantity: 1500,
        date: '2020-12-06',
        purchasedPrice: 100,
      },
      {
        symbol: 'TSLA',
        name: 'TESLA',
        quantity: 2000,
        date: '2020-03-04',
        purchasedPrice: 500,
      },
    ]
  },
  {
    userName: "Ian",
    stocks: [
      {
        symbol: 'AAPL',
        name: 'APPLE',
        quantity: 1500,
        date: '2020-12-06',
        purchasedPrice: 100,
      },
      {
        symbol: 'TSLA',
        name: 'TESLA',
        quantity: 2000,
        date: '2020-03-04',
        purchasedPrice: 500,
      },
    ]
  }
])
