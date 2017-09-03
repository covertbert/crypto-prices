const fs = require('fs')
const Client = require('coinbase').Client
const apiDetails = require('./api.js')
const pricesJson = require('./output/prices.json')

const client = new Client(apiDetails)

function writeTofile (whichFile, ApiResponse) {
  if (whichFile === 'errors') {
    fs.appendFile('./output/errors.log', ApiResponse)
  } else if (whichFile === 'logs') {
    pricesJson.newEntry = ApiResponse
    fs.writeFile('./output/prices.log', JSON.stringify(pricesJson))
  }
}

function checkPrices () {
  client.getSpotPrice({ 'currencyPair': 'LTC-USD' }, function (err, price) {
    err === null
      ? writeTofile('logs', price + '\n')
      : writeTofile('errors', err + '\n')
  })
}

setInterval(checkPrices, 10 * 1000)
