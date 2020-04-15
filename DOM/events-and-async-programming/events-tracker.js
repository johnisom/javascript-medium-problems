// Exercise 9

const [tracker, track] = (function () {
  const list = [];
  const elements = [];

  const tracker = {
    list() {
      return list.slice();
    },
    elements() {
      return elements.slice();
    },
    clear() {
      return list.length = 0;
    },
  };

  const track = function track(callback) {
    return function(event) {
      if (!list.includes(event)) {
        list.push(event);
        elements.push(event.currentTarget);
      }

      return callback(event);
    };
  };

  return [tracker, track];
}());


const divRed = document.getElementById('red');
const divBlue = document.getElementById('blue');
const divOrange = document.getElementById('orange');
const divGreen = document.getElementById('green');

divRed.addEventListener('click', track((e) => {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track((e) => {
  e.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track((e) => {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track((e) => {
  document.body.style.background = 'green';
}));

