// Exercise 8

// This is also easy and I've solved it before, so here goes.

// I need to create a memo object that can be referenced by the function, so
// I'm going for a closure here.

const fibonacci = (function () {
  const memo = {};

  function fibonacci(n) {
    if (n in memo) return memo[n];

    let result;

    if (n <= 2) {
      result = 1;
    } else {
      result = fibonacci(n - 1) + fibonacci(n - 2);
    }

    memo[n] = result;
    return result;
  }
}());
