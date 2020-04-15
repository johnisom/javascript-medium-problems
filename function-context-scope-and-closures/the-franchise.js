// Exercise 2

/**
 * This isn't working because ‘this’ on line 5 refers to the global
 * object. What we can do is use the “var self = this” trick and use the
 * lexical scope to access ‘self’.
 */

const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    const self = this;
    return [1, 2, 3].map(function(number) {
      return `${self.name} ${number}`;
    });
  },
};
