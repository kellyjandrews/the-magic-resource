const withCSS = require('@zeit/next-css');
require('dotenv').config();

module.exports = withCSS({
  env: {
    GHOST_URL: process.env.GHOST_URL,
    GHOST_API_KEY: process.env.GHOST_API_KEY,
  }
});