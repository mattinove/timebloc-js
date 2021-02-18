# timebloc-js
A simple library to handle bimesters, trimesters, quarters and semesters for both JS and TS.

## Installation
This is a [JavaScript](https://developer.mozilla.org/it/docs/Web/JavaScript) module written in [TypeScript](https://www.typescriptlang.org/) available through the
[npm registry](https://www.npmjs.com/).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install timebloc-js
```

## Features
What is a timebloc? A timebloc is a bimester, trimester, quarter or semester.

- Getting back timebloc list of a year (like trimesters, quarter etc).
- Getting back current timebloc.
- Getting back a specific timebloc of a year.

## Samples

### Getting back timebloc list (like trimesters, querters etc)
```js

const { getTrimesters } = require("timebloc-js");

// current year
const trimesters = getTrimesters(); 

// custom year passing a numeric year
const otherYearTrimesters = getTrimesters(2018);

// custom year passing a date
const theDate = new Date(Date.UTC(2020, 02, 05));
const trimestersByDate = getTrimesters(theDate);
```

#### Sample response
```bash
[
  {
    index: 1,
    utcStart: 2021-01-01T00:00:00.000Z,
    utcEnd: 2021-03-31T23:59:59.999Z,
    isCurrent: true
  },
  {
    index: 2,
    utcStart: 2021-04-01T00:00:00.000Z,
    utcEnd: 2021-06-30T23:59:59.999Z,
    isCurrent: false
  },
  {
    index: 3,
    utcStart: 2021-07-01T00:00:00.000Z,
    utcEnd: 2021-09-30T23:59:59.999Z,
    isCurrent: false
  },
  {
    index: 4,
    utcStart: 2021-10-01T00:00:00.000Z,
    utcEnd: 2021-12-31T23:59:59.999Z,
    isCurrent: false
  }
]
```

### Getting back current time bloc
```js
const { getCurrentTrimester } = require("timebloc-js");
const currentTrimester = getCurrentTrimester()
```

#### Sample response
```bash
{
  index: 1,
  utcStart: 2021-01-01T00:00:00.000Z,
  utcEnd: 2021-03-31T23:59:59.999Z,
  isCurrent: true
}
```

### Getting back a specific timebloc of a year.
```js
const { getTrimester } = require("timebloc-js");

// passing a year as a numeric value
const thirdTremesterOf2018 = getTrimester(3, 2018);

// or passing a Date
const a1028Date = new Date(Date.UTC(2018, 10, 15));
const thirdTremesterOf2018 = getTrimester(3, oldDate);

// or passing no datetime refs
const thirdTremesterOfCurrent = getTrimester(3);
```

#### Sample response
```bash
{
  index: 3,
  utcStart: 2021-07-01T00:00:00.000Z,
  utcEnd: 2021-09-30T23:59:59.999Z,
  isCurrent: false
}
```