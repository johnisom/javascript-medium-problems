// Exercise 4

const myBind = function myBind(func, context) {
  return function() {
    func.apply(context, arguments);
  };
};
