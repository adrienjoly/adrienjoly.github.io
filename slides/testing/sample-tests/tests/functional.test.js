const fetch = require('node-fetch');
const crawler = require('../src/crawler');

describe('api', () => {
  it('returns the list of crawled pages', async () => {
    await crawler.indexSite('http://example.com');
    // after crawling, check that the page was indexed
    const res = await fetch('http://localhost:8000/crawled');
    const json = await res.json();
    expect(json.pages[0]).toMatch(/test-page.html/);
  });
});

afterAll(() => {
  crawler.closeServer();
});
