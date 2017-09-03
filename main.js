const apiDetails = require('./api.js')
const Client = require('coinbase').Client
const client = new Client(apiDetails)

client.getBuyPrice({ 'currencyPair': 'LTC-USD' }, function (err, price) {
  console.log(price)
  console.log(err)
})
