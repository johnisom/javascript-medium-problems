// Exercise 8

const delegateEvent = (parentElement, selector, eventType, callback) => {
  if (!(parentElement && parentElement instanceof Element)) return undefined;

  parentElement.addEventListener(eventType, (e) => {
    if ([...parentElement.querySelectorAll(selector)].includes(e.target)) {
      callback(e);
    }
  });

  return true;
};

const element1 = document.querySelector('table');
const element2 = document.querySelector('main h1');
const element3 = document.querySelector('main');

const callback = function callback(event) {
  alert(`Target: ${event.target.tagName}\nCurrent Target: ${event.currentTarget.tagName}`);
};

console.log(delegateEvent(element2, 'p', 'click', callback));
