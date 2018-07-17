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
      href: 'https://dev.to' + article.attribs.href,
    })).get();
  },
};

const toYaml = (val, level = 0) => {
  const INDENT_SIZE = 2;
  if (typeof val === 'object' && 'length' in val) {
    return val.map(item => {
      return `-${toYaml(item, level + 1).substr(1)}\n`;
    }).join('');
  } else if (typeof val === 'object') {
    return Object.keys(val).map(key => {
      const rendered = val[key] instanceof Date ? val[key].toISOString().split('T')[0] : val[key];
      return ''.padStart(level * INDENT_SIZE) + `${key}: "${rendered}"\n`;
    }).join('');
  } else {
    return ''.padStart(level * INDENT_SIZE) + val;
  }
};

(async () => {
  const posts = await fetchFrom['dev.to']();
  console.log(toYaml(posts));
})();
