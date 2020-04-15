// Exercise 5

const colorGeneration = function colorGeneration(level) {
  if (level <= 0) return;

  let generation = [document.body];

  for (; level > 0; level -= 1) {
    generation = generation.flatMap((element) => [...element.children]);
  }

  generation.forEach((element) => element.classList.toggle('generation-color'));
};
