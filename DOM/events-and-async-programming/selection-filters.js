// Exercise 6

const categories = {
  Vertebrate: ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
  'Cold-blooded': ['Salmon', 'Turtle'],
  Mammal: ['Bear', 'Whale'],
  Bird: ['Ostrich'],
  Bear: ['Vertebrate', 'Warm-blooded', 'Mammal'],
  Turtle: ['Vertebrate', 'Cold-blooded'],
  Whale: ['Vertebrate', 'Warm-blooded', 'Mammal'],
  Salmon: ['Vertebrate', 'Cold-blooded'],
  Ostrich: ['Vertebrate', 'Warm-blooded', 'Bird'],
};

const button = document.getElementById('clear');
const classifications = document.getElementById('animal-classifications');
const animals = document.getElementById('animals');

button.addEventListener('click', (e) => {
  e.preventDefault();

  classifications.selectedIndex = 0;
  animals.selectedIndex = 0;

  for (const opt of classifications.options) {
    opt.style.display = '';
  }

  for (const opt of animals.options) {
    opt.style.display = '';
  }
});

classifications.addEventListener('change', (e) => {
  for (const opt of animals.options) {
    if (categories[e.target.value].includes(opt.value)) {
      opt.style.display = '';

      if (animals.value === 'Animals') {
        animals.value = opt.value;
      }
    } else {
      opt.style.display = 'none';
    }
  }
});

animals.addEventListener('change', (e) => {
  for (const opt of classifications.options) {
    if (categories[e.target.value].includes(opt.value)) {
      opt.style.display = '';

      if (classifications.value === 'Classifications') {
        classifications.value = opt.value;
      }
    } else {
      opt.style.display = 'none';
    }
  }
});
