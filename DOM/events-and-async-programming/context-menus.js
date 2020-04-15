// Exercise 5

document.querySelector('main').addEventListener('contextmenu', (e) => {
  e.preventDefault();

  alert('main');
});

document.getElementById('sub').addEventListener('contextmenu', (e) => {
  e.stopPropagation();
  e.preventDefault();

  alert('sub');
});
