jest.mock('algolia'); // will inject __mocks__/algolia.js
const algolia = require('algolia');
const worker = require('../src/crawler-worker');

describe('crawler', () => {
  it('indexes one record from test-page.html', () => {
    worker.indexPage('http://localhost/test-page.html');
    expect(algolia.search().hits).toHaveLength(1);
  });
});
