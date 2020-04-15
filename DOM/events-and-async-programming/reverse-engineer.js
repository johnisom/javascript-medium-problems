// Exercise 2

const html = document.lastChild;
const container = document.getElementById('container');

html.addEventListener('click', (e) => {
  if (!container.contains(e.target)) {
    container.style.display = 'none';
  }
});
