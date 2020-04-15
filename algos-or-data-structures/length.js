// Exercise 6

/*

What
----
[ 'JavaScript', 'Ruby', 'Python' ]
3
[ 'JavaScript', 'Ruby', 'Python', <1 empty item> ]
4
[ 'JavaScript' ]
1
[ 'JavaScript', <2 empty items> ]
3
[ 'JavaScript', <1 empty item>, 'Python' ]
undefined
3

Why
---
The property length for arrays is a writeable property and the array adjusts
it's contents based on length reassignments. When an array's length is
increased, the rest of the spots are empty items (holes). When an array's
length is decreased, the items on the end are completely truncated and
dropped. When an item is assigned to an index two or more greater than the
array's length, there are holes leading all the way up to that element.

*/
