// Exercise 2

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

A triangle is classified as follows:

 • Equilateral: All three sides are of equal length.
 • Isosceles: Two sides are of equal length, while the third is
    different.
 • Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two
shortest sides must be greater than the length of the longest
side, and every side must have a length greater than 0. If
either of these conditions is not satisfied, the triangle is
invalid.

Write a function that takes the lengths of the three sides of a
triangle as arguments, and returns one of the following four
strings representing the triangle's classification:
'equilateral', 'isosceles', 'scalene', or 'invalid'.

Examples:

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

Input
-----

- 3 positive numbers representing the 3 sides of a triangle

Output
------

- Type: string that is one of these four values: "equilateral", "isosceles",
  "scalene" or "invalid"

Rules
-----

- If any of the 3 sides are not positive, the triangle is invalid
- If the two shortest sides added together are not greater than the largest
  side, the triangle is invalid
- If the 3 sides are different, the triangle is scalene
- If 2 sides are equal and 1 is not, the triangle is isosceles
- If all 3 sides are equal, the triangle is equilateral

Data Structure
--------------

- Sides: an array of all triangle side lengths captured with the rest operator

Algorithm
---------

1. Sort the sides
2. If the smallest side is less than or equal to 0, return "invalid"
3. If the smallest 2 sides added together are less than or equal to the
   largest side, return "invalid"
4. If the first and second side are equal and the second and third side are
   equal, return "equilateral"
5. If the first and second side are equal or the second and third are return
   "isosceles"
6. Return "scalene"

*/

const triangle = function triangle(...sides) {
  sides.sort((a, b) => a - b);

  if (sides[0] <= 0 || sides[0] + sides[1] <= sides[2]) return 'invalid';
  if (sides[0] === sides[1] && sides[1] === sides[2]) return 'equilateral';
  if (sides[0] === sides[1] || sides[1] === sides[2]) return 'isosceles';
  return 'scalene';
};

// Test Cases
// All should log true

console.log(triangle(3, 3, 3) === 'equilateral'); // true
console.log(triangle(3, 3, 1.5) === 'isosceles'); // true
console.log(triangle(3, 4, 5) === 'scalene');     // true
console.log(triangle(0, 3, 3) === 'invalid');     // true
console.log(triangle(3, 1, 1) === 'invalid');     // true
