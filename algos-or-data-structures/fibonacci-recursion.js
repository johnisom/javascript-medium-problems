// Exercise 6

// This is so easy, I don't need PEDAC. I've done it dozens of times.

const fibonacci = function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Test Cases
// all should output true

console.log(fibonacci(1) === 1);     // true
console.log(fibonacci(2) === 1);     // true
console.log(fibonacci(3) === 2);     // true
console.log(fibonacci(4) === 3);     // true
console.log(fibonacci(5) === 5);     // true
console.log(fibonacci(12) === 144);  // true
console.log(fibonacci(20) === 6765); // true
