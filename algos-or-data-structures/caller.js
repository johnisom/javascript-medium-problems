// Exercise 4

const makeDoubler = function makeDoubler(caller) {
  return function doubler(number) {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  };
};
