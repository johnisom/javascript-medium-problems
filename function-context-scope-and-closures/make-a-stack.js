// Exercise 8

const newStack = function newStack() {
  const stack = [];

  return {
    push(value) {
      return stack.push(value);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach((value) => console.log(value));
    },
  };
};
