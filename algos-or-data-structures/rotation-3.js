// Exercise 3

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

Take the number 735291 and rotate it by one digit to the left, getting
352917. Next, keep the first digit fixed in place and rotate the remaining
digits to get 329175. Keep the first two digits fixed in place and rotate
again to get 321759. Keep the first three digits fixed in place and rotate
again to get 321597. Finally, keep the first four digits fixed in place and
rotate the final two digits to get 321579. The resulting number is called the
maximum rotation of the original number.

Write a function that takes an integer as an argument, and returns the maximum
rotation of that integer. You can (and probably should) use the
rotateRightmostDigits function from the previous exercise.

Examples:

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845


@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

This just seems like repeated application of the rotateRightmostDigits
function that I wrote for exercise 2, so I will use part of it.

Input
-----

- Number: the number to be repeatedly rotated

Output
------

- Number that is the input number with digits repeatedly rotated

Rules
-----

- The number is rotated n times, where n is the number of digits.

Data Structure
--------------

- Array of strings digits that represent the number digits as it is being
  transformed

Algorithm
---------

1. Create array of string digits of number
   - Use ... operator for quick conversion to array after converting to string
2. For i, where i starts at 0 and goes up to, but not including, the length of
   the new digit array, iterate and then increase i by 1
   i. push(...splice(i, 1))
3. Return joined array converted to int

*/

const maxRotation = function maxRotation(number) {
  const digArr = [...String(number)];

  for (let i = 0; i < digArr.length; i += 1) {
    digArr.push(...digArr.splice(i, 1));
  }

  return parseInt(digArr.join(''), 10);
};

// Test Cases
// All should output true

console.log(maxRotation(735291) === 321579);         // true
console.log(maxRotation(3) === 3);                   // true
console.log(maxRotation(35) === 53);                 // true
console.log(maxRotation(105) === 15);                // true -- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845); // true
