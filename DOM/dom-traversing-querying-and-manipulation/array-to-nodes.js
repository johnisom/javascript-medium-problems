// Exercise 8

const arrayToNodes = function arrayToNodes([name, children]) {
  const elem = document.createElement(name);
  children.forEach((child) => elem.appendChild(arrayToNodes(child)));
  return elem;
};
