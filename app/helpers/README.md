# Helpers
## Summary
- [camalize()](#camalize)
- [className()](#className)
- [Date](#date)
- [pagination()](#pagination)
- [range()](#range)
- [REGEX](#regex)
- [ServerSideRendering](#serverSideRendering)
- [ucFirst()](#ucFirst)
- [zeroPad()](#zeroPad)
## camalize()
```js
/**
 * Camalize a string
 * @param {String}
 * @returns {String}
 */
camalize('my super name')// "mySupperName"
camalize('my-super-name')// "mySupperName"
```

## className()
```js
/**
 * className : Use class like Vue JS
 * @param {string | {[key: string]: boolean} | ({[key: string]: boolean} | string)[]} classes
 * @return {string} 
 */
// string
className('class1')// "class1"
className('class1 class2')// "class1 class2"
// {[key: string]: boolean}
className({ 'class1 class2': true })// "class1 class2"
className({ 'class1 class2': false })// ""
className({ 'class1 class2': true, 'class3 class4': true })// "class1 class2 class3 class4"
// ({[key: string]: boolean} | string)[]
className([// "class1 class2 class3 class4"
    'class1 class2',
    {
        'class3 class4': true,
        'class5 class6': false
    }
])

```

## Date
### isDate()
```js
/**
 * Checks if date is a valid Date (narrowing)
 * @param {unknown} date 
 * @returns {boolean}
 */
isDate(new Date())// true
isDate(new Date('1995-12-17T03:24:00'))// true
isDate('1995-12-17T03:24:00')// false
```
### isSameMonth()
```js
/**
 * Checks if two date values are of the same month and year
 * @param {unknown} date 
 * @param {unknown} [basedate=(new Date())]
 * @returns {boolean}
 */
```
### isSameDay()
```js
/**
 * Checks if two date are the same day (day, month, year)
 * @param {Date} date 
 * @param {Date} [basedate=(new Date())]
 * @returns {Boolean}
 */
```
### isBeforeDay()
```js
/**
 * Checks if date is before an other date (day, month, year)
 * @param {Date} date 
 * @param {Date} [basedate=(new Date())]
 * @returns {Boolean}
 */
```
### getDateISO()
```js
/**
 * Return ISO date (yyyy-mm-dd)
 * @param {Date} [date=(new Date())]
 * @returns {string}
 */
```
### dateISOIsValid()
```js
/**
 * Checks if ISO date is valid
 * @param {string} dateISO 
 * @returns {boolean}
 */
```
### getMonthFirstDay()
```js
/**
 * First day of the month for a given year from 1 - 7
 * @param {{month: number, year: number}} date 
 * @returns {number} 1 => Sunday, 7 => Saturday
 */
```
### getMonthDays()
```js
/**
 * Number days in a month for a given year from 28 - 31
 * @param {{month: number, year: number}} date 
 * @returns {number}
 */
```
### getPreviousMonth()
```js
/**
 * Return previous month
 * @param {{month: number, year: number}} date 
 * @returns {{month: number, year: number}}
 */
```
### getNextMonth()
```js
/**
 * Return next month
 * @param {{month: number, year: number}} date 
 * @returns {{month: number, year: number}}
 */
```
### class CalendarDay
```js
/**
 * Calandar day class
 * @type {year: number, month: number, day: number, getIso: function=>string}
 */
```
### calendarViewMonth()
```js
/**
 * Build a monthly calendar
 * @param {{year: number, month: number}} date
 * @return {CalendarDay[]} 
 */
```
### calendarViewMonth()
```js
/**
 * Build an annual calendar
 * @param {number} year
 * @param {number} range
 * @return {number[]} 
 */
```
### CALENDAR_WEEKS
```js
/**
 * Number of week to show in calendar month
 * @const {number} CALENDAR_WEEKS
 */
```
### WEEK_DAYS
```js
/**
 * Week days abbreviation
 * @const {Object} WEEK_DAYS
 */
```
### CALENDAR_MONTHS
```js
/**
 * Month abbreviation
 * @const {Object} CALENDAR_MONTHS
 */
```
## pagination()
```js
/**
 * Return a pagination array
 * @param {number} currentPage - Current page display
 * @param {number} totalPage - Total page
 * @param {PaginationOptions} options
 * @param {boolean} [options.nextAndPrevious] - add 'previous' and 'next'
 * @param {boolean} [options.firstAndLast] - add first and last page
 * @param {number} [options.neighbours] - Number on neighbours
 * @param {number} [options.neighboursLeft] - Number on neighbours on left
 * @param {number} [options.neighboursRight] - Number on neighbours on right
 * @returns {(number | string)[]} [1, 'previous', 4, 5, 6, 7, 8, 'next', 10]
 */
```

## range()
```js
/**
 * Range return an array of number between from and to incremented by step
 * @param {number} from
 * @param {number} to
 * @param {number} [step=1]
 * @return {number[]} 
 */
range(0, 5)// [0, 1, 2, 3, 4, 5]
range(2, 4)// [2, 3, 4]
range(2, 8, 2)// [2, 4, 6, 8]
```

## REGEX
```js
/**
 * Usual regex list
 * @const {Object} REGEX
 * @type {
 *      mail: RegExp,
 *      phone: RegExp,
 *      creditCard: {
 *          number: RegExp,
 *          visa: RegExp,
 *          mastercard: RegExp,
 *          amex: RegExp,
 *          diners: RegExp,
 *          exp: RegExp,
 *          cvv: RegExp,
 *      }
 * }
 */

```

## serverSideRendering
### isBrowser()
```js
/**
 * Return true if we are in browser environement
 * @return {boolean}
 */
```
### isServer()
```js
/**
 * Return true if we are in serveur environement
 * @return {boolean}
 */
```

## ucFirst()
```js
/**
 * Capitalize the first character of a string
 * @param {string} string
 * @return {string}
 */
ucFirst('name')// "Name"
ucFirst('lorem ipsum')// "Lorem ipsum"
```
## zeroPad()
```js
/**
 * Pads a string value with leading zeroes until length is reached
 * @param {string | number} value
 * @param {number} [length=2]
 * @return {string}
 */
zeroPad(1)// "01"
zeroPad(8, 3)// "008"
```