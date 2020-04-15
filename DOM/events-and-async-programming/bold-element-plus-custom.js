// Exercise 3

let makeBold = function makeBold(element, callback) {
  element.style.fontWeight = 'bold';

  if (typeof callback === 'function') {
    callback(element);
  }
};

// ┌─────────────────────┐
// │ Further Exploration │
// └─────────────────────┘

const bolded = new CustomEvent('bolded', {});

makeBold = function makeBold(element) {
  element.style.fontWeight = 'bold';

  bolded.dispatchEvent();
};

