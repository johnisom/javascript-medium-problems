// Exercise 2

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

Write a function that rotates the last n digits of a number. For the rotation,
rotate by one digit to the left, moving the first digit to the end.

Examples:

rotateRightmostDigits(735291, 1);  // 735291
rotateRightmostDigits(735291, 2);  // 735219
rotateRightmostDigits(735291, 3);  // 735912
rotateRightmostDigits(735291, 4);  // 732915
rotateRightmostDigits(735291, 5);  // 752913
rotateRightmostDigits(735291, 6);  // 352917

@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

Input
-----

- Number: the number to have its digits rotated
- N: the number of digits to rotate from the right end

Output
------

- Number: input number that has had its rightmost n digits rotated (or the
  last digit inserted to the nth to last spot)

Rules
-----

- Number is a positive integer
- N is a positive integer not greater than the amount of digits in number
- The last digit is inserted into the nth to last spot

Data Structure
--------------

- Array of digit chars for splicing and manipulating digits
- String for converting from int to string to array and back

Algorithm
---------

1. Convert number to string and then array of characters
2. Insert last element of array at the -nth spot
   - Use Array.prototype.splice() to accomplish it
     - Number array.splice(-n, 0, last elem)
3. Return all but last element joined and converted to int
   - number array.slice(0, -1)

Splice with negative indices

*/

const rotateRightmostDigits = function rotateRightmostDigits(number, n) {
  const digitChars = [...String(number)];
  digitChars.splice(-n, 0, digitChars[digitChars.length - 1]);
  return parseInt(digitChars.slice(0, -1).join(''), 10);
};

// Test Cases
// all should output true

console.log(rotateRightmostDigits(735291, 1) === 735291); // true
console.log(rotateRightmostDigits(735291, 2) === 735219); // true
console.log(rotateRightmostDigits(735291, 3) === 735129); // true
console.log(rotateRightmostDigits(735291, 4) === 731529); // true
console.log(rotateRightmostDigits(735291, 5) === 713529); // true
console.log(rotateRightmostDigits(735291, 6) === 173529); // true
