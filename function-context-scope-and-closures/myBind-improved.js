// Exercise 5

const myBind = function myBind(func, context, ...appliedArgs) {
  return function() {
    return func.apply(context, [...appliedArgs, ...arguments]);
  };
};
