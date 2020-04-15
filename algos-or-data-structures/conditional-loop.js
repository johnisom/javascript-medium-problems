// Exercise 2

/*

No, it will log 0 over and over 'til infinity. This is because we initialize
`i` as 0, and then never have a chance to increment it because of the `if`
statement on line 3. This is a perfect candidate for a `for` loop instead.

*/
