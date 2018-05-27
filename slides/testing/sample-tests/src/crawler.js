const express = require('express');
const worker = require('./crawler-worker');

const api = express();
 
api.get('/crawled', function (req, res) {
  res.json({
    pages: [
      'http://localhost/test-page.html',
    ],
  });
});
 
const server = api.listen(8000);

module.exports = {
  async indexSite(rootURL) {
    //await worker.indexPage('http://localhost/test-page.html');
    return Promise.resolve();
  },
  closeServer() {
    server.close();
  },
};
