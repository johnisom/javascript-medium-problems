// Exercise 5

/**
 * In JavaScript, function arguments aren't enforced. And even if they were,
 * the later range function declaration overwrites the previous range
 * function, making it completely unaccessible. So we have a function that
 * keeps calling itself into infinity. To fix this, we need to integrate this
 * into just one function that checks to see if 1 or 2 arguments are provided
 * and adjusts accordingly.
 *
 * Fixed code below:
 */

const range = function range(start, end) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  // return Array.from({ length: end - start + 1 }, (_, i) => i + start);
  return Array(end - start + 1).fill().map((_, i) => i + start);
};

// Examples

console.log(range(10, 20));
console.log(range(5));
