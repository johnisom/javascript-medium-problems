// Exercise 2

const delegate = function delegate(obj, method, ...args) {
  const funcName = 'delegated' + method[0].toUpperCase() + method.slice(1);
  const delegated = function() {
    return obj[method](...args, ...arguments);
  };
  Object.defineProperty(delegated, 'name', { value: funcName });
  return delegated;
};
