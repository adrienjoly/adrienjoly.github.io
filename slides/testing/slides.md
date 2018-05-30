class: center, fit-bg-image
background-image: url('img/banner.jpg')

# Why (automated) testing is cool ✌

.bottom-left[
    ![adrien joly](img/me-round.png)
]

.bottom-right[
    @adrienjoly
]

???

- Me: dev crawler @ algolia, also programming teacher, also maintainer of music platform openwhyd.org
- Tests are like sex in high school: we all pretend we do it, but we are blurry about details
- I used to be scared by the concept of automated testing, now I can't live without
- Goals of presentation: show you that it's not that hard to get started + share experience

---
class: dbl-size, middle

# Outline

1. What? Who? Why?
2. Types of tests
3. Tips & tricks

---
class: dbl-size, middle

# Disclaimer

- Terminology and opinions can vary
- This content of this presentation is based on my experience

---
class: dbl-size, middle

# What is automated testing for

- Goal: the software works as expected, now and in the future
- Hint: code without tests = legacy code

???

- obvious: tests = to make sure your software works ...but not only
- legacy code is code that you fear to change, because this may break the system
- if you have tests => you know what you broke => you know what to fix => the fear goes away

---
class: dbl-size, middle

# Who should test

- Anybody who writes evolving software
- Systems that are hard (or expensive) to debug and update (e.g. hardware)
- Web: back-end & front-end

---
class: dbl-size, middle

# Why testing is good

💎  Sustainable quality and confidence in the codebase

😌  More doc. + fewer bugs ⇒ peace

⭐  Become a better engineer

???

- **confidence** is important while you code
- untested code can break silently => **fear** of changing the code
- => write tests to make sure product functionality remains **stable**

- after confidence, you can still be **bothered by users** of your system: bugs, questions, support...
- tests can be used by users as documentation: they show how to use your functions, your API
- + the more tests you write => the fewer the bugs => the less you will be interrupted => **peace**

- last but not least: writing tests make you a **better engineer**
- because it will force you to identify what are the **critical points** and flows of your system
- because tests will be a great reason to you design your system in a **more modular** way
- => experience with automated testing will make people take you more seriously

---
class: dbl-size, middle

# Why testing is cool 

✅  Watching tests pass = satisfying

👹  Hack without fear

🎮  Write code that challenges code = fun

???

- First reason why it's cool to run tests: it's very satisfying to see them pass!
- Because the tests will let you know when you break anything, you can code like crazy and get closer to flow!
- I find it mind-blowing to write code that will run and check my code, it's kinda like inception!
- It's also a fun way to challenge your own code, and other's using tests, because the result of a clear test acts as a proof.

---
class: dbl-size, middle

# Types of tests

🐜  Unit testing

📦  Functional testing

👫  Integration testing

???

- So, what types of tests do we need to write?
- The limits can be blurry at times, but I see 3 main categories: unit, functional, and integration
- You may have heard other types of tests, like "regression", "acceptance", "end-to-end", etc... They are mostly synonyms!
- It's usual to order them by order to granularity: unit, integration, functional
- I chose this alternative order on purpose, to display the most contrasting first, and then dig into the less obvious one

---
class: dbl-size, middle, center

# 🐜  Unit testing

- Goal: every pure function is reliable
- Numerous, simple to write, fast to run
- How: expect outputs for each provided input

???

- you may know most about the first one: unit testing.
- each unit test targets one function. you give it parameters, you expect a given return value.
- by "pure", I mean functions that do not have side effects => I will get the same results, even if I execute it a million times in a row, of if I execute it concurrently. (in parallel). Otherwise it's gonna be a bit more complex to write tests.
- e.g. parseInt vs console.log
- => writing pure functions is already a best practice of functional programming => see that you're becoming a better engineer? ;-)

- a consequence of testing pure functions is that, in most cases, your unit tests will be very simple to write, and very fast to run.
- so you can write tons of them if you want!
- ... that being said, don't waste all your time unit testing everything, you may need other types of tests!

- now, let's assume that you wrote a `parseInt()` function, and you want to tests it.
- what you want to do if think of several cases of what the function should return, given different parameters.
- example of case: if I pass a string containing "01" to parseInt(), it should return 1.

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

???

- => here's how to express that unit test with the Jest testing framework:
- let's create a "unit.test.js" file (you can call it how you want, but add .test.js to it to make it clear)
- first, you describe what you're testing. here: the parseInt function
- second, you define a test case: it turns "01" to 1
- then, you make a call to that function, and express the expectation
- expectations must all be true for the test to pass, otherwise the test runner will tell you what actually happened
- note: quite similar with Mocha, Jasmine and other testing frameworks

Now, let's see another kind of tests: functional testing

---
class: dbl-size, middle, center

# 📦  Functional testing

- a.k.a. End-to-end testing
- a.k.a. Acceptance testing
- a.k.a. UI testing

???

- Functional testing is also called e2e, acceptance ("tests de recette"), UI testing.
- They have one thing in common: they the test the product as a whole, without caring about how things works.
- Functional tests could be run directly by users, without requiring access to the source code. (in that case, we can also use the term "blackbox testing")
- In most cases, they could also be run by hand!
- In short: that's what you would do if you were testing a software for your company before buying it. ("tests de recette")
- As a user, these tests allow you to make sure that the product provides the value it promised.

So, let's recap.

---
class: dbl-size, middle, center

# 📦  Functional testing

- Goal: the final product does what it's supposed to do
- How: consider the system as a black box, test like a user
- Characteristics: UI tests can be slow and flaky to run

???

- If your product is a social network, what should your functional tests do? Create a user account, post something, read the feed/stream, log out, log back in, forget the password, etc...
- => write tests for the "golden path" first, and then cover other critical flows.
- Because these tests are blackbox, they are supposed to do actions like a human user would do them, there is no technical shortcut => running functional tests can be slow
- Some tests can also be "flaky", meaning that they will sometimes work, and sometimes not, in you run then several times in a row.
- => these tests provide a lot of value, but they are expensive to write, run and maintain.

Let me show you an example of functional test based on the product I'm working on: the API of algolia's custom crawler.

---
class: dbl-size, middle

# 📦  Functional testing

## Example: the `/crawled` API endpoint

```js
// HTTP GET /crawled => JSON response:

{
  pages: [
    'http://example.com/test-page.html',
    'http://example.com/test-page-2.html'
    // ...
  ]
}
```

???

- The web crawler is a product that takes a start URL, crawls the website, and stores the content extracted from pages into a search index.
- Let's say that my web crawler has an REST API that exposes a `/crawled` endpoint
- it returns a JSON object with a `pages` property
- the value of this `pages` property is an array of URLs that were crawled.
- => our test can crawl a few pages, and then check that these pages are returned by this endpoint.

---
class: dbl-size, middle

# 📦  Functional testing

## A functional test of the `/crawled` API endpoint:

```js
// file: functional.test.js

describe('api', () => {
  it('returns the list of crawled pages', async () => {
    await crawler.indexSite('http://example.com');
    // after crawling, check that the page was indexed
    const res = await fetch('http://localhost:8000/crawled');
    const json = await res.json();
    expect(json.pages[0]).toMatch(/test-page.html/);
  });
});
```

???

- This is how I would do it: 1/ start an crawling operation, 2/ call the API endpoint, 3/ expect to find one of the pages listed in the response
- you see that the tests is quite similar to the unit test shown before, it's because I used Jest again.
- if you want to test a web UI, you will need to control a headless browser => you should use a specialized testing framework like Webdriver, selenium, cypress or puppeteer. => the functions to use will be a bit different, but the principle is the same: run operations, and then state expectations.

Now that we know how to test functions and how to test the entire product, isn't there a middle ground?
=> Yes, there is: integration testing!

---
class: dbl-size, middle, center

# 👫  Integration testing

- Goal: every component behaves as expected
- How: inject mocks and spies into the system
- Characteristics: More complex, slower to write, need more maintenance

???

- In terms of granularity, integration tests are between unit and functional tests.
- They tests some parts of the product: components that are usually tied to other.
- Compared to pure functions, components may have side effects. e.g. update the database, store files, etc...
- => we will need to check these side effects, intermediate outputs, even when these outputs are not directly accessible!

- in order to check what happens inside of an electronic circuit, you use an oscilloscope.
- to check what happens inside of a software component, you can use "mocks" and "spies".
- a mock is a fake, simplified version of a component that you will inject in order to test another components that communicates with it.
- a spy is usually a wrapper that you apply to a function or class, in order to know how the system interacted with it over time.

- because we are inside the system, where mocks and spies we need to be written to compensate for the lack of interfaces, integration tests are usually more complex to write.
- as these tests are based on the current implementation, they also need more maintenance. e.g. a refactoring will break them.

If we want to test that our crawler does index the content from the web pages it crawled, we may need to spy the communication between the "worker" and the "algolia search index component". As what we're testing is the crawler, we will mock the algolia component.

---
class: dbl-size, middle

# 👫  Integration testing

## Mocking Algolia's search index component

```js
// file: __mocks__/algolia.js

module.exports = {
  objects: [],
  addObject(obj){
    this.objects.push(obj);
  },
  search(query){
    return {
      hits: this.objects
    };
  }
};
```

???

- A mock is simply an exported object that defines all the methods that will be called by the other component we're testing.
- In our case, the only function that will be called is `addObject()`, every time crawled content needs to be stored in the search index.
- We will make this mocked function just store the object parameter into an array, so that we can spy what content was being indexed.
- Then we add a `search()` function, in order to return the list of indexed content, as Algolia's component would do.

This mock is very minimal, but it should work for the test we want to write: make sure that the crawler indexes content from the website.

---
class: dbl-size, middle

# 👫  Integration testing

```js
// file:integration.test.js

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

???

- In our integration test file, we first enable our mock. => Jest will inject our mock in place of the `algolia` package, wherever it's `require()`d.
- Then we load it, and the component that we want to test: the crawler's `worker`, in charge of downloading a web page and indexing its content.
- In our test case, we call `worker.indexPage()` to crawl the website, and then we expect our mock to have received one piece of indexed content.

Now, if the interface of any of these modules changes, we would have to also update the code of this integration test.

---
class: dbl-size, middle, center

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
- For each new bug, write a regression test

???

[...]

Thank you for your attention! Your questions are welcome!
