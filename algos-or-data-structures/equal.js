// Exercise 2

/*

This happens because object comparison is dependent on identity, not content.

*/

var person = { name: 'Victor' };
var otherPerson = person;

console.log(person === otherPerson); // true
