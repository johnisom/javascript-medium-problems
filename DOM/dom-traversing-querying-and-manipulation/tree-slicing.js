// Exercise 4

const sliceTree = function sliceTree(start, end) {
  let currentElement = document.getElementById(String(end));

  const result = [];

  while (true) {
    if (currentElement === null) return undefined;
    if (currentElement.id === String(start)) break;

    result.unshift(currentElement.nodeName);
    currentElement = currentElement.parentElement;
  }

  result.unshift(currentElement.nodeName);

  return result;
};
