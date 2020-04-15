// Exercise 1

const callback1 = () => console.log('callback1');
const callback2 = () => console.log('callback2');
const callback3 = () => console.log('callback3');

const randomizer = (function () {
  let id;
  let count = 0;

  const randInt = function randInt(start, stop) {
    return Math.floor(Math.random() * (stop - start)) + start;
  };

  const countUpTo = function countUpTo(num) {
    count += 1;
    console.log(count);

    if (count === num) {
      count = 0;
      clearInterval(id);
    }
  };

  return function randomizer(...callbacks) {
    callbacks.forEach((callback) => {
      setTimeout(callback, randInt(1, 2 * callbacks.length + 1) * 1000);
    });

    id = id || setInterval(() => countUpTo(2 * callbacks.length), 1000);
  };
}());

randomizer(callback1, callback2, callback3);
