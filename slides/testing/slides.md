class: center, fit-bg-image
background-image: url('img/banner.jpg')

# Why (automated) testing is cool ✌

.bottom-left[
    ![adrien joly](img/me-round.png)
]

.bottom-right[
    @adrienjoly
]

---
class: dbl-size, middle

# Outline

1. What? Who? Why?
2. Types of tests
3. Other concepts
4. Best practices

---
class: dbl-size, middle

# Disclaimer

- Terminology and opinions can vary
- Content is based on my experience

---
class: dbl-size, middle

# What is automated testing for

- legacy code = code without tests
- legacy code is hard and dangerous to maintain, because of lack of tests

---
class: dbl-size, middle

# Who should test

- Everybody who write software
- Web: back-end and front-end
- Particularly on systems that are hard (or expensive) to debug and update, e.g. hardware

---
class: dbl-size, middle

# Why testing is good

💎  Sustainable quality and confidence in the codebase

😌  More doc. + fewer bugs ⇒ peace

⭐  Become a better engineer

---
class: dbl-size, middle

# Why testing is cool 

✅  Watching tests pass = satisfying

👹  Hack without fear

🎮  Write code that challenges code = fun

---
class: dbl-size, middle

# Types of tests

🐜  Unit testing

👫  Integration testing

📦  Functional testing

---
class: dbl-size, middle, center

# 🐜  Unit testing

## Every function is reliable

---
class: dbl-size, middle

# 🐜  Unit test

```js
// file: unit.test.js

describe('parseInt', () => {
  it('turns "01" to 1', () => {
    expect(parseInt('01')).toBe(1);
  });
});
```

---
class: dbl-size, middle, center

# 👫  Integration testing

## Every component behaves as expected

---
class: dbl-size, middle

# 👫  Integration testing

```js
jest.mock('algolia'); // will inject __mocks__/algolia.js
const algolia = require('algolia');
const worker = require('../src/crawler-worker');

describe('crawler', () => {
  it('indexes one record from test-page.html', () => {
    worker.indexPage('http://localhost/test-page.html');
    expect(algolia.search().hits).toHaveLength(1);
  });
});
```

---
class: dbl-size, middle, center

# 📦  Functional testing

## The system does what it's supposed to do

---
class: dbl-size, middle, center

# 📦  Functional testing

- a.k.a. End-to-end testing
- a.k.a. Acceptance testing
- a.k.a. UI testing

---
class: dbl-size, middle

# 📦  Functional testing

```js
describe('dashboard', () => {
  it('displays my test index in the list', () => {
    goTo('http://localhost:8000/dashboard');
    var indexes = getElements('ul#indexes > li');
    assert.equal(indexes[0].innerText, 'test index');
  });
});
```

---
class: dbl-size, middle, center

# Other concepts

- regression testing
- black box
- 

# Tips & tricks

- Use a Continuous Integration (CI) system
- Clean context
- Beware flaky tests 🚫
- Predictability: no random, no waiting, use fixed dates
- Output of failing test = title of a Github issue
- One PR = at least one test
- Write a failing test before coding
