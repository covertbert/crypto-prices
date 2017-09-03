const fs = require('fs')
const Client = require('coinbase').Client
const apiDetails = require('./api.js')

const client = new Client(apiDetails)

function writeTofile (whichFile, ApiError) {
  fs.appendFile(whichFile, ApiError, function (err) {
    if (err) {
      return console.log(err)
    }
  })
}

function checkPrices () {
  client.getSpotPrice({ 'currencyPair': 'LTC-USD' }, function (err, price) {
    if (err === null) {
      writeTofile('./output/prices.log', price.data.amount + '\n')
    }
    if (err !== null) {
      writeTofile('./output/errors.log', err + '\n')
    }
  })
}

setInterval(checkPrices, 3 * 1000)
