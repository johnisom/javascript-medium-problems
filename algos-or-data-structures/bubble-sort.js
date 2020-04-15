// Exercise 7

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

A bubble sort works by making multiple passes (iterations) through an
array. On each pass, the two values of each pair of consecutive elements are
compared. If the first value is greater than the second, the two elements are
swapped. This process is repeated until a complete pass is made without
performing any swaps — at which point the array is completely sorted.

6 2 7 1 4 Start: compare 6 > 2? Yes
2 6 7 1 4 Swap
2 6 7 1 4 6 > 7? No (no swap)
2 6 7 1 4 7 > 1? Yes
2 6 1 7 4 Swap
2 6 1 7 4 7 > 4? Yes
2 6 1 4 7 Swap
2 6 1 4 7 2 > 6? No
2 6 1 4 7 6 > 1? Yes
2 1 6 4 7 Swap
2 1 6 4 7 6 > 4? Yes
2 1 4 6 7 Swap
2 1 4 6 7 6 > 7? No
2 1 4 6 7 2 > 1? Yes
1 2 4 6 7 Swap
1 2 4 6 7 2 > 4? No
1 2 4 6 7 4 > 6? No
1 2 4 6 7 6 > 7? No
1 2 4 6 7 1 > 2? No
1 2 4 6 7 2 > 4? No
1 2 4 6 7 4 > 6? No
1 2 4 6 7 6 > 7? No
1 2 4 6 7 No swaps; all done; sorted

We can stop iterating the first time we make a pass through the array without
making any swaps because this means that the entire array is sorted.

For further information — including pseudo-code that demonstrates the
algorithm, as well as a minor optimization technique — see the Bubble Sort
Wikipedia page.

Write a function that takes an array as an argument and sorts that array using
the bubble sort algorithm described above. The sorting should be done
"in-place" — that is, the function should mutate the array. You may assume
that the array contains at least two elements.

Examples:

var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]


@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

Given an array, bubble sort it in a mutating way.

Assumptions
-----------

- The array contains only numbers or only strings

Input
-----

- Array of only numbers or array of only strings

Output
------

- No output
- Mutation (side effect)

Rules
-----

- Array will always have at least 2 elements
- Array will always contain only strings or only numbers
- Algorithm must be bubble sort

Data Structure
--------------

- Array: input array with a chance of mutation per pass

Algorithm
---------

Time complexity: O(n²)

1. Iterate from 0 up to and excluding length of input array - 1 (i)
     i. Variable: is sorted ← true
    ii. Iterate from 0 up to and excluding length of input array - i - 1 (j)
        a. If input array[j] > input array[j + 1]
           1. Swap the two elements
              - Or use splice!
                i. Variable: temp ← input array[j]
               ii. Input array[j] ← input array[j + 1]
              iii. Input array[j + 1] ← input array[j]
           2. Is sorted ← false
   iii. If is sorted then early exit

*/

const bubbleSort = function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i += 1) {
    let isSorted = true;

    for (let j = 0; j < array.length - i - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        array.splice(j, 2, array[j + 1], array[j]);

        isSorted = false;
      }
    }

    if (isSorted) return;
  }
};

// Test Cases

let array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
