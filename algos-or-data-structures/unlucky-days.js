// Exercise 4

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

Write a function that takes a year as an argument, and returns
the number of 'Friday the 13ths' in that year. You may assume
that the year is greater than 1752 (when the modern Gregorian
Calendar was adopted by the United Kingdom). You may also assume
that the same calendar will remain in use for the foreseeable
future.

Examples:

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

Understanding the Problem
-------------------------

Given an integer year, return how many times there the 13th of the month
happens to be on Friday. The minimum number is 0 and the maximum is 12.

Input
-----

- Year: integer that is greater than 1752

Output
------

- Count: integer that is the count of number of Friday the 13ths

Rules
-----

- Year is greater than 1752
- Calendar is Gregorian Calendar
  - JavaScript's built in Date class works with the Gregorian Calendar
- Months start from 0 and go up to 11
- Weeks start with Sunday, 0 and end with Saturday, 6
  - Friday must be 5

Data Structure
--------------

- Integers for iterating from 1 thru 11 and for counting
- Date objects for checking if the 13th of that month has index 5

Algorithm
---------

1. Variable: count ← 0
2. Iterate from 1 up to and including 11 for month
     i. Variable: the13th ← new Date(year, month, 13)
    ii. If get day of the13th returns 5, increment count
3. Return count

*/

const fridayThe13ths = function fridayThe13ths(year) {
  let count = 0;

  for (let month = 0; month <= 11; month += 1) {
    if (new Date(year, month, 13).getDay() === 5) {
      count += 1;
    }
  }

  return count;
};

// Test Cases
// All should log true

console.log(fridayThe13ths(1986) === 1); // true
console.log(fridayThe13ths(2015) === 3); // true
console.log(fridayThe13ths(2017) === 2); // true
