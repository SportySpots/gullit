require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: (config) => {
    // eslint-disable-next-line
    config.plugins = config.plugins || [];

    // eslint-disable-next-line
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    return config;
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    // seedorfGraphQLUrl: 'https://api.sportyspots.com/graphql',
    seedorfGraphQLUrl: 'http://localhost:8080/https://api.sportyspots.com/graphql',
    seedorfHost: 'https://api.sportyspots.com',
    googleMapsKey: process.env.GOOGLE_MAPS_KEY,
  },
};
