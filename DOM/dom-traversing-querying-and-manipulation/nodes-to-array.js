// Exercise 7

const nodesToArr = ({ nodeName, children } = document.body) => (
  [nodeName, [...children].map(nodesToArr)]
);
