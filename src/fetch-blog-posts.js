const cheerio = require('cheerio');
const request = require('request-promise-native');

const MONTHS = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

const fetchFrom = {
  'medium.com': async (url = 'https://medium.com/@adrienjoly') => {
    const json = (await request(`${url}/latest?format=json`)).replace('])}while(1);</x>', '');
    const posts = JSON.parse(json).payload.references.Post;
    return Object.keys(posts).map(key => ({
      date: new Date(posts[key].createdAt),
      title: posts[key].title,
      url: `${url}/${posts[key].uniqueSlug}`,
      source: 'medium.com',
    }));
  },
  'dev.to': async (url = 'https://dev.to/adrienjoly') => {
    const $ = cheerio.load(await request(url));
    const parseDate = dateStr => {
      let [ month, day, year ] = dateStr.trim().split(/\s+/);
      let date = new Date();
      date.setMonth(MONTHS[month]);
      date.setDate(parseInt(day, 10));
      if (year) date.setFullYear(parseInt(year.replace('\'', '20'), 10));
      return date;
    };
    return $('a.index-article-link').map((i, article) => ({
      date: parseDate($(article).parent().find('h4 > a').text().split('・').pop()),
      title: $(article).text().trim(),
      url: 'https://dev.to' + article.attribs.href,
      source: 'dev.to',
    })).get();
  },
};

const simplifyDate = date => date.toISOString().split('T')[0];

const toYaml = (val, level = 0) => {
  const INDENT_SIZE = 2;
  if (typeof val === 'object' && 'length' in val) {
    return val.map(item => {
      return `-${toYaml(item, level + 1).substr(1)}\n`;
    }).join('');
  } else if (typeof val === 'object') {
    return Object.keys(val).map(key => {
      return ''.padStart(level * INDENT_SIZE) + `${key}: "${val[key]}"\n`;
    }).join('');
  } else {
    return ''.padStart(level * INDENT_SIZE) + val;
  }
};

(async () => {
  const postsPerSource = await Promise.all(Object.keys(fetchFrom).map(source => fetchFrom[source]()));
  const posts = postsPerSource.reduce((posts, sourcePosts) => posts.concat(sourcePosts), []);
  const sortedPosts = posts.sort((a, b) => b.date - a.date).map(post => ({
    ...post,
    date: simplifyDate(post.date)
  }));
  //const posts = await fetchFrom['dev.to']();
  const yaml = toYaml(sortedPosts);
  console.log(yaml);
})();
