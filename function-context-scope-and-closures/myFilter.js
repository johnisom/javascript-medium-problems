// Exercise 6

const myFilter = function myFilter(array, func, thisArg) {
  const result = [];

  array.forEach(function(value) {
    if (func.call(thisArg, value)) {
      result.push(value);
    }
  });

  return result;
};
