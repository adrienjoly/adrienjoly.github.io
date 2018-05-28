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

- goal: make sure (and prove) that the software works as expected
- tests are like sex in high school
- legacy code = code without tests

???

legacy code is hard and dangerous to maintain, because of lack of tests

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

- Goal: every pure function is reliable
- Numerous, simple to write, fast to run
- How: expect outputs for each provided input

???

pure functions = without side effect. (e.g. parseInt vs console.log)

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

- Goal: every component behaves as expected
- More complex, slower to write, need maintenance
- How: inject mocks and spies into the system

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

- Goal: system does what it's supposed to do
- UI tests can be slow and flaky to run
- How: consider the system as a black box, test like a user

---
class: dbl-size, middle, center

# 📦  Functional testing

- a.k.a. End-to-end testing
- a.k.a. Acceptance testing
- a.k.a. UI testing

???

Functional tests could be run directly by users, without requiring access to the source code

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

- You don't need 100% coverage
- Golden path first
- Use a Continuous Integration (CI) system
- Leave no trace
- Beware flaky tests 🚫
- Predictability: no random, no waiting, use fixed dates
- Output of failing test = title of a Github issue
- One PR = at least one test
- Write a failing test before coding
