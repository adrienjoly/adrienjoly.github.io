# How to write automated tests

This repository contains sample code that was shown to illustrate the talk I gave at [Algolia Search Party](https://www.eventbrite.com/e/algolia-search-party-nodejs-time-tickets-46435618184?aff=twitter), on July 5th, 2018: **How to write automated tests for a Node.js codebase**. ([slides](https://docs.google.com/presentation/d/1VaOyKC4tGXIDy-q22uaS7hOUawgrcT-BkhqRU4_Ax0M/edit?usp=sharing), [video recording](https://www.youtube.com/watch?v=J5my4ayBos0))

![automated testing cheat-sheet](docs/testing-cheat-sheet.png)

## How to run the tests locally

You will need Node.js installed before running the following commands from your shell/terminal:

```bash
$ svn export https://github.com/adrienjoly/adrienjoly.github.com/trunk/slides/testing/sample-tests sample-tests
$ cd sample-tests
$ npm install
$ npm test
```
