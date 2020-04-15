// Exercise 6

// Should be a deep clone when copy/paste

const isDescendant = function isDescendant(child, parent) {
  if (child === parent) return true;
  if (child === document.body) return false;
  return isDescendant(child.parentElement, parent);
};

const nodeSwap = function nodeSwap(id1, id2) {
  const node1 = document.getElementById(id1);
  const node2 = document.getElementById(id2);
  const placeholder1 = document.createElement('div');
  const placeholder2 = document.createElement('div');

  if (isDescendant(node1, node2) || isDescendant(node2, node1)) {
    return undefined;
  }

  node1.parentElement.insertBefore(placeholder1, node1);
  node2.parentElement.insertBefore(placeholder2, node2);

  placeholder1.parentElement.replaceChild(node2, placeholder1);
  placeholder2.parentElement.replaceChild(node1, placeholder2);

  return true;
};
