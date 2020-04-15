// Exercise 7

let currentlyHighlighted;

[...document.getElementsByTagName('a')].forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.stopPropagation();

    if (currentlyHighlighted) {
      currentlyHighlighted.classList.remove('highlight');
    }

    currentlyHighlighted = document.querySelector(anchor.getAttribute('href'));
    currentlyHighlighted.classList.add('highlight');
  });
});

[...document.getElementsByTagName('article')].forEach((article) => {
  article.addEventListener('click', (e) => {
    e.stopPropagation();

    if (currentlyHighlighted) {
      currentlyHighlighted.classList.remove('highlight');
    }

    currentlyHighlighted = article;
    currentlyHighlighted.classList.add('highlight');
  });
});

window.addEventListener('click', (e) => {
  if (currentlyHighlighted) {
    currentlyHighlighted.classList.remove('highlight');
  }

  currentlyHighlighted = document.querySelector('main');
  currentlyHighlighted.classList.add('highlight');
});
