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
        symbol: 'AACQW',
        name: 'Artius Acquisition Inc - Warrants (13/07/2025)',
        quantity: 150,
        date: '2018-10-01',
        purchasedPrice: 20,
      },
      {
        symbol: 'TRI',
        name: 'Thomson-Reuters Corp',
        quantity: 2000,
        date: '2016-03-04',
        purchasedPrice: 45,
      },
    ]
  },
  {
    userName: "Ian",
    stocks: [
      {
        symbol: 'MSFT',
        name: 'Microsoft Corporation',
        quantity: 3000,
        date: '20150-12-06',
        purchasedPrice: 125,
      },
      {
        symbol: 'TSLA',
        name: 'TESLA',
        quantity: 4000,
        date: '2019-03-04',
        purchasedPrice: 500,
      },
    ]
  }
])
