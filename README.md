# timebloc-js
## A simple library to handle bimesters, trimesters, quarters and semesters.

### 1. Getting back time bloc list (like trimesters).
```
const { getBimesters, getTrimesters, getQuarters, getSemesters } = require("timebloc-js");

// current year
const trimesters = getTrimesters(); 
// custom year
const otherYearTrimesters = getTrimesters(2018);
```

#### Sample response
```
{
  index: 1,
  utcStart: '2021-01-01T00:00:00.000Z',
  utcEnd: '2021-03-31T23:59:59.999Z',
  isCurrent: true
},
{
  index: 2,
  utcStart: '2021-04-01T00:00:00.000Z',
  utcEnd: '2021-06-30T23:59:59.999Z',
  isCurrent: false
},
{
  index: 3,
  utcStart: '2021-07-01T00:00:00.000Z',
  utcEnd: '2021-09-30T23:59:59.999Z',
  isCurrent: false
},
{
  index: 4,
  utcStart: '2021-10-01T00:00:00.000Z',
  utcEnd: '2021-12-31T23:59:59.999Z',
  isCurrent: false
}
```

### 2. Getting back current time bloc.
```
const { getCurrentBimester, getCurrentTrimester, getCurrentQuarter, getCurrentSemester } = require("timebloc-js");
const currentTrimester = getCurrentTrimester()
```

### Sample response
```
{
  index: 1,
  utcStart: '2021-01-01T00:00:00.000Z',
  utcEnd: '2021-03-31T23:59:59.999Z',
  isCurrent: true
}
```
