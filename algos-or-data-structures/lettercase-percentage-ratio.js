// Exercise 1

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

Write a function that takes a string, and returns an object
containing the following three properties:

 • the percentage of characters in the string that are
    lowercase letters
 • the percentage of characters that are uppercase letters
 • the percentage of characters that are neither

You may assume that the string will always contain at least one
character.

Examples:

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

Problem Summary
---------------

Given a string, return an object that has the count percentage of upper case
characters, lower case characters, and characters without a case such as
numbers or symbols.

Input
-----

- String of chars, alphabetic or not

Output
------

- Object with char count percentages, discussed in data structure section

Rules
-----

- If it is a letter, use it's case
- If not, use neither
- Output object values are strings that represent percentages, not actual
  numbers

Data Structure
--------------

- Regex for counting upper case
- Regex for counting lower case
- Numbers for counts
  - Number for count of all else, will be total char count - sum of upper and
    lower counts
- Numbers for percentages
  - Each case count * 100 / total char count
- Strings for percentages
  - Fixed point "number" (actually a string) to 2 digits of percentage
- Object for reporting
  - Includes upper, lower, and neither case fixed point percentages

Algorithm
---------

1. Variable: total ← count of input string chars
2. Count lower case letters
   - Regexp global match and then length of resulting array
3. Count upper case letters
   - Regexp global match and then length of resulting array
4. Variable: neither ← total - upper - lower
5. Return object of fixed point percentages
   - Lowercase: (lower * 100 / total).toFixed(2)
   - Uppercase: (upper * 100 / total).toFixed(2)
   - Neither: (neither * 100 / total).toFixed(2)

*/

const letterPercentages = function letterPercentages(string) {
  const total = string.length;
  const lower = (string.match(/[a-z]/g) || []).length;
  const upper = (string.match(/[A-Z]/g) || []).length;
  const neither = total - upper - lower;
  
  return {
    lowercase: (lower * 100 / total).toFixed(2),
    uppercase: (upper * 100 / total).toFixed(2),
    neither: (neither * 100 / total).toFixed(2),
  };
};

// Test Cases
// All should log true

const compObj = function compObj(obj1, obj2) {
  const entries1 = Object.entries(obj1);
  const entries2 = Object.entries(obj2);

  if (entries1.length !== entries2.length) return false;

  for (let i = 0; i < entries1.length; i += 1) {
    if (entries1[i][0] !== entries2[i][0]) return false;
    if (entries1[i][1] !== entries2[i][1]) return false;
  }

  return true;
};

console.log(compObj(letterPercentages('abCdef 123'),
                    { lowercase: '50.00',
                      uppercase: '10.00',
                      neither: '40.00' })); // true

console.log(compObj(letterPercentages('AbCd +Ef'),
                    { lowercase: '37.50',
                      uppercase: '37.50',
                      neither: '25.00' })); // true

console.log(compObj(letterPercentages('123'),
                    { lowercase: '0.00',
                      uppercase: '0.00',
                      neither: '100.00' })); // true
