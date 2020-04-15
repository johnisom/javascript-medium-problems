// Exercise 2

/**
 *  1 → direct: 9; indirect: 12
 *  2 → direct: 2; indirect: 1
 *  3 → direct: 1; indirect: 0
 *  4 → direct: 3; indirect: 1
 *  5 → direct: 1; indirect: 0
 *  6 → direct: 1; indirect: 1
 *  7 → direct: 1; indirect: 0
 *  8 → direct: 1; indirect: 2
 *  9 → direct: 1; indirect: 1
 * 10 → direct: 1; indirect: 0
 */

// Further Exploration

const walk = function walk(node, callback) {
  callback(node);
  [...node.childNodes].forEach((child) => walk(child, callback));
  
};

const childNodes = function childNodes(id) {
  const node = document.getElementById(id);
  const directCount = node.childNodes.length;
  let totalCount = 0;

  walk(node, () => totalCount += 1);

  return [directCount, totalCount - directCount - 1];
  
};
