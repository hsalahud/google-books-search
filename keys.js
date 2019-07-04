const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  apiKey: process.env.GOOGLE_BOOKS_API_KEY
}