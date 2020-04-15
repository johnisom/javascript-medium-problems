// Exercise 8

/*

No, this will return NaN. This is because line 3 evaluates to `undefined *
undefined` which is NaN. It is undefined because the `total` function
implicitly returns undefined. This can be fixed by inserting "return " at line
15 and right after column 2.

But even if we fix that particular issue, we still get NaN. This is because we
forgot to initialize sum to 0 on line 8.

*/
