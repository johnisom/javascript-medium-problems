// Exercise 1

/*

This won't work when we pass in falsy values for those arguments such as 0,
null, undefined, '', false, and NaN. To fix this, I have a solution:

*/

const processOrder = function processOrder(
  price,
  quantity = 1,
  discount = 0,
  serviceCharge = 0.1,
  tax = 0.15
) {
  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
};
