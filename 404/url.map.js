// Redirections used when a page is not found, from adrienjoly.com and ajo.ovh
var ROOT = 'https://adrienjoly.com';
(typeof window !== 'undefined' ? window : global).URLMap = {
  '/nextstep': ROOT + '/chrome-next-step-for-trello',
  '/contacts': ROOT + '/freelance-directory-client',
  '/live': ROOT + '/livecoding',
  '/js': ROOT + '/cours-javascript',
  '/mooc': 'https://www.udemy.com/startuptour',
  '/slides-trello': ROOT + '/productivity/slides-trello',
  '/sav': 'https://forms.gle/61EoPKSxc5jgGRCQ7',
};
