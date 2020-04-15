// Exercise 5

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

A featured number (something unique to this exercise) is an odd number that is
a multiple of 7, with all of its digits occuring exactly once each. For
example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it
is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument, and returns the next
featured number greater than the integer. Issue an error message if there is
no next featured number.

NOTE: The largest possible featured number is 9876543201.

Examples:

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987

@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

Attributes of a featured number:
- Multiple of 7
- All digits are unique
- Greater than 0
- Less than or equal to 9876543201

Input
-----

- Num: a positive integer that is less than the next featured number

Output
------

- Featured number: the next positive integer greater than num that is also a
  featured number

Rules
-----

- If num is greater than or equal to the max featured number, 9876543201,
  throw an error
- The next featured number will always be greater than the provided number
- You can just increment by 7 and check each time if digits are unique

Data Structure
--------------

- Number for iterating by sevenss and featured num
- Regex and string number for checking for duplicate digits

Algorithm
---------

1. Find the next multiple of 7 that is greater than num
   - num + 7 - num % 7 + (odd ? 0 : 7)
2. While the 7 multiple is less than MAX_FEATURED_NUM (9876543201)
    i. If the digits are all unique
       Then: return the 7 multiple
   ii. Increment 7 multiple by 7
3. Throw an error if you reach this point without an early exit

*/

const featured = function featured(num) {
  const MAX_FEATURED_NUM = 9876543201;
  let multiple = num + 7 - num % 7;
  multiple += (multiple % 2 === 0 ? 7 : 0);

  for (; multiple <= MAX_FEATURED_NUM; multiple += 14) {
    if (!/(.).*\1/.test(String(multiple))) return multiple;
  }
  
  throw new RangeError(`num (${num}) is out of bounds`);
};

// Test Cases
// All should log true

console.log(featured(12) === 21);                // true
console.log(featured(20) === 21);                // true
console.log(featured(21) === 35);                // true
console.log(featured(997) === 1029);             // true
console.log(featured(1029) === 1043);            // true
console.log(featured(999999) === 1023547);       // true
console.log(featured(999999987) === 1023456987); // true

try {
  featured(9876543201);
  console.log(false);
} catch (e) {
  console.log(true);
}
