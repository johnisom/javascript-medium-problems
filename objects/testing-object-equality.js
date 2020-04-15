// Exercise 3

const valuesEqual = function valuesEqual(val1, val2) {
  if (typeof val1 !== typeof val2) return false;

  if (Array.isArray(val1)) {
    if (val1.length !== val2.length) return false;
    return val1.every((val, idx) => valuesEqual(val, val2[idx]));
  } else if (typeof val1 === 'object') {
    return valuesEqual(Object.entries(val1), Object.entries(val2));
  } else {
    return val1 === val2;
  }
};
