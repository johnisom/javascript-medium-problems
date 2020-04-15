// Exercise 7

// This is also easy because I've done it many times, so no PEDAC here

const fibonacci = function fibonacci(n) {
  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i += 1) {
    [a, b] = [b, a + b];
  }

  return b;
};

// Test Cases
// all should output true

console.log(fibonacci(20) === 6765);
console.log(fibonacci(50) === 12586269025);
console.log(fibonacci(75) === 2111485077978050);
