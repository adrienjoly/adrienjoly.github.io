const algolia = require('algolia');

module.exports = {
  indexPage(url) {
    // this method should normally index content fetched from the web page at that URL
    algolia.addObject({
      objectID: url
    });
  }
};
