// Exercise 3

/*

What
----
40
45

Why
---
The totalPayable function uses a variable declared outside its scope so when
we change it, the function reflects that. This is not a pure function. When
closures are created, they retain a binding to outside variables, not the
values within the variables. This means that the values of the variables can
change and the function will behave to reflect that change.p

Updated Notes
-------------
The proper term is that closures "retain access" to variables defined in an
"enclosing scope." "Retain[ing] access" means that the function dynamically
looks up the variable's value each time it is called.

*/
