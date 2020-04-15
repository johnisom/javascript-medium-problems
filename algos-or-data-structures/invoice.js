// Exercise 7

/*

We can refactor the code in 2 different ways. The first is to use the already
provided `arguments` object and act upon that, or use the (new) rest operator
(`...`) to gather all arguments into an array and use the reduce method on
that. I will demonstrate both solutions below.

*/

// Using the `arguments` object
const invoiceTotal = function invoiceTotal() {
  var sum = 0;

  for (let i = 0; i < arguments.length; ++i) {
    sum += arguments[i];
  }

  return sum;
};

// Using the rest operator
const invoiceTotalES6 = function invoiceTotalES6(...args) {
  return args.reduce((accum, elem) => accum + elem);
};
