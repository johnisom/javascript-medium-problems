// Exercise 3

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

A triangle is classified as follows:

- Right: One angle is a right angle (exactly 90 degrees).
- Acute: All three angles are less than 90 degrees.
- Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must be exactly 180 degrees, and
every angle must be greater than 0. If either of these conditions is not
satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments, and
returns one of the following four strings representing the triangle's
classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to
worry about floating point errors. You may also assume that the arguments are
in degrees.

Examples:

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"


@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

Input
-----

- Angles: 3 integers that represent the 3 angles of the triangle in degrees

Output
------

- Type: string that is one of these four values: "acute", "right", "obtuse" or
  "invalid"

Rules
-----

- If any of the angles are less than or equal to 0, the triangle is invalid
- If the sum of the 3 angles is not exactly equal to 180, the triangle is invalid
- If the largest angle is less than 90, the triangle is acute
- If the largest angle is exactly 90, the triangle is right
- If the largest angle is greater than 90, the triangle is 

Data Structure
--------------

- Angles: array of the 3 angles of the triangle, captured with the rest
  parameter

Algorithm
---------

1. Sort the angles array
2. If the smallest angle is less than or equal to 0, return "invalid"
3. If the sum of the 3 angles is not equal to 180, return "invalid"
4. If the largest angle is less than 90, return "acute"
5. If the largest angle is equal to 90, return "right"
6. Return "obtuse"

*/

const triangle = function triangle(...angles) {
  const [small, medium, large] = angles.sort((a, b) => a - b);

  if (small <= 0 || small + medium + large !== 180) return 'invalid';
  if (large < 90) return 'acute';
  return (large === 90) ? 'right' : 'obtuse';
};

// Test Cases
// All should log true

console.log(triangle(60, 70, 50) === 'acute');   // true
console.log(triangle(30, 90, 60) === 'right');   // true
console.log(triangle(120, 50, 10) === 'obtuse'); // true
console.log(triangle(0, 90, 90) === 'invalid') ; // true
console.log(triangle(50, 50, 50) === 'invalid'); // true
