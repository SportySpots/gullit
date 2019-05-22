// @ts-ignore
const withTypescript = require('@zeit/next-typescript');
// const withCSS = require('@zeit/next-css');

// const infiProxy = () => new Proxy({}, {
//   get: infiProxy
// });
//
// window = infiProxy();
// document = infiProxy();

module.exports = withTypescript({
  useFileSystemPublicRoutes: false,
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    seedorfGraphQLUrl: 'http://localhost:8080/https://api.sportyspots.com/graphql',
    seedorfHost: 'https://api.sportyspots.com',
  },
});
