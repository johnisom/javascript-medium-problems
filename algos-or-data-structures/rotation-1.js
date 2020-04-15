// Exercise 1

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

Write a function that rotates an array by moving the first element to the end
of the array. Do not modify the original array.

- If the input is not an array, return undefined.
- If the input is an empty array, return an empty array.

Review the test cases below, then implement the solution accordingly.

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
var array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

*/

const rotateArray = function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];
  return [...array.slice(1), array[0]];
};

// Test Cases
// all should output true

// For the test cases
const comp = function comp(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i += 1) {
      if (!comp(a[i], b[i])) return false;
    }

    return true;
  } else if (typeof a === typeof b && typeof a === 'object') {
    return comp(Object.entries(a), Object.entries(b));
  } else {
    return a === b;
  }
};

console.log(comp(rotateArray([7, 3, 5, 2, 9, 1]), [3, 5, 2, 9, 1, 7]));       // true
console.log(comp(rotateArray(['a', 'b', 'c']), ['b', 'c', 'a']));             // true
console.log(comp(rotateArray(['a']), ['a']));                                 // true
console.log(comp(rotateArray([1, 'a', 3, 'c']), ['a', 3, 'c', 1]));           // true
console.log(comp(rotateArray([{ a: 2 }, [1, 2], 3]), [[1, 2], 3, { a: 2 }])); // true
console.log(comp(rotateArray([]), []));                                       // true
console.log(comp(rotateArray(), undefined));                                  // true
console.log(comp(rotateArray(1), undefined));                                 // true

const array = [1, 2, 3, 4];
rotateArray(array);
console.log(comp(array, [1, 2, 3, 4]));                                       // true
