// Exercise 6

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

Write a function that computes the difference between the square of the sum of
the first n positive integers and the sum of the squares of the first n
positive integers.

Examples:

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

This is easy enough to not need all of the boilerplate notes.

I will simply create an array of integer from 1 up to and including n and
return that reduced to sum squared minus that square reduced to sum

*/

const sumSquareDifference = function sumSquareDifference(n) {
  const nums = Array.from({ length: n }, (_, i) => i + 1);
  return nums.reduce((a, b) => a + b)**2 - nums.reduce((a, b) => a + b**2, 0);
};

// Test Cases
// All should log true

console.log(sumSquareDifference(3) === 22);         // true
console.log(sumSquareDifference(10) === 2640);      // true
console.log(sumSquareDifference(1) === 0);          // true
console.log(sumSquareDifference(100) === 25164150); // true
