// Exercise 5

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

Write a function that takes a sentence string as an argument, and returns that
string with every occurrence of a "number word" — 'zero', 'one', 'two',
'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its
corresponding digit character.

Example:

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

Problem Description (Summary)
-----------------------------

Take a string and replace any occurence of a number word with the
corresponding digit.

Input
-----

- String -- any chars allowed

Output
------

- String -- input string with all word numbers replaced with the 10 digits

Rules
-----

- Replace all number words with digits
- Input will always be a string
- Number words will always be lower case
- Number words must be entire words, so "seventeen" doesn't count as a word
  number but "seven" does.

Examples / Test Cases
---------------------

"Please call me at five five five one two three four. Thanks." → "Please call me at 5 5 5 1 2 3 4. Thanks."
"Test one two three" → "Test 1 2 3"
"zero one two three four five six seven eight nine" → "0 1 2 3 4 5 6 7 8 9"
"" → ""
"abc" → "abc"
"One Two Three one two three" → "One Two Three 1 2 3"

Data Structure
--------------

- Num words: Object that maps number words to digits
  - Digits will actually be string to allow short-circuiting of || operator
- Regex for search and replace for words in string with callback

Algorithm
---------

1. Create constant for NUM_WORDS -- outside of function
   - Will make the keys and values strings
2. Replace all number words with digits
   - Use String.prototype.replace with a regex with global flag and replace
     per word
     - Use callback to sub for a num word or itself, depending on if it is a
       num word
       - It's a num word if the NUM_WORDS constant object has a key of that
         word

*/

const NUM_WORDS = { zero: '0', one: '1', two: '2', three: '3', four: '4',
                    five: '5', six: '6', seven: '7', eight: '8', nine: '9' };

const wordToDigit = (string) => (
  string.replace(/\w+/g, (word) => NUM_WORDS[word] || word)  
);

// Test Cases
// All should log true

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.') === 'Please call me at 5 5 5 1 2 3 4. Thanks.'); // true
console.log(wordToDigit('Test one two three') === 'Test 1 2 3'); // true
console.log(wordToDigit('zero one two three four five six seven eight nine') === '0 1 2 3 4 5 6 7 8 9'); // true
console.log(wordToDigit('') === ''); // true
console.log(wordToDigit('abc') === 'abc'); // true
console.log(wordToDigit('One Two Three one two three') === 'One Two Three 1 2 3'); // true
