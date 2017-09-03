require('dotenv').config()

const apiDetails = {
  'apiKey': process.env.API_KEY,
  'apiSecret': process.env.API_SECRET
}

module.exports = apiDetails
