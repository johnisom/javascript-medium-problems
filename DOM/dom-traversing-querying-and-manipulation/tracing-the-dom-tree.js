// Exercise 3

const domTreeTracer = function domTreeTracer(id) {
  id = String(id);
  const result = [];

  let parent;
  while (id !== '1') {
    parent = document.getElementById(String(id)).parentElement;
    result.push([...parent.children].map(({ nodeName }) => nodeName));
    id = parent.id;
  }

  result.push([document.getElementById('1').nodeName]);

  return result;
};
