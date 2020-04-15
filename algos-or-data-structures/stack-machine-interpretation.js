// Exercise 4

/*

@@@@@@@@@@@@@@@@@@@@@@@@@@@
@                         @
@    Given Information    @
@                         @
@@@@@@@@@@@@@@@@@@@@@@@@@@@

A stack is a list of values that grows and shrinks dynamically.  A stack may
be implemented as an Array that uses two Array methods: Array.prototype.push
and Array.prototype.pop.

A stack-and-register programming language is a language that uses a stack of
values. Each operation in the language operates on a register, which can be
thought of as the current value. The register is not part of the stack. An
operation that requires two values pops the topmost item from the stack (i.e.,
the operation removes the most recently pushed value from the stack), operates
on the popped value and the register value, and stores the result back in the
register.

Consider a MULT operation in a stack-and-register language. It multiplies the
stack value with the register value, removes the value from the stack, and
stores the result back in the register. For example, if we start with a stack
of [3, 6, 4] (where 4 is the topmost item in the stack) and a register value
of 7, the MULT operation transforms the stack to [3, 6] (the 4 is removed),
and the result of the multiplication, 28, is left in the register. If we do
another MULT at this point, the stack is transformed to [3], and the register
is left with the value 168.

Write a function that implements a miniature stack-and-register-based
programming language that has the following commands (also called operations
or tokens):

- n: Place a value, n, in the register. Do not modify the stack.
- PUSH: Push the register value onto the stack. Leave the value in the
    register.
- ADD: Pop a value from the stack and add it to the register value, storing
    the result in the register.
- SUB: Pop a value from the stack and subtract it from the register value,
    storing the result in the register.
- MULT: Pop a value from the stack and multiply it by the register value,
    storing the result in the register.
- DIV: Pop a value from the stack and divide it into the register value,
    storing the integer result in the register.
- MOD: Pop a value from the stack and divide it into the register value,
    storing the integer remainder of the division in the register.
- POP: Remove the topmost item from the stack and place it in the register.
- PRINT: Print the register value.

All operations are integer operations (which is only important with DIV and
MOD).

Programs will be supplied to your language function via a string
argument. Your function may assume that all arguments are valid programs —
i.e., they will not do anything like trying to pop a non-existent value from
the stack, and they will not contain any unknown tokens.

Initialize the stack and register to the values [] and 0, respectively.

Examples:

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

@@@@@@@@@@@@@@@@@@@@@@@@
@                      @
@    My Information    @
@                      @
@@@@@@@@@@@@@@@@@@@@@@@@

Problem Summary
---------------

Create a stack-and-register based programming language that supports the
commands PUSH, ADD, SUB, MULT, DIV, MOD, POP, and PRINT as well as putting a
number on the register.

The description for all these commands start on line 36 and go to line 50.

Input
-----

- Program: a string of tokens (numbers and commands) separated by spaces

Output
------

- No return value
- Every time the PRINT command is executed, the register value is printed to
  stdout

Rules
-----

- Program string will always be a valid, bug-free program
- Numbers will always be integers, positive or negative
- Tokens are separated by 1 space

Data Structure
--------------

- Tokens: array of strings that have integers or commands
- Stack: array that will be accessed with push and pop
- Register: number that will be initialized to 0
- Regexp for testing if token is integer to be placed in register.

Algorithm
---------

1. Initialize stack and register
   - Variable: stack ← []
   - Variable: register ← 0
2. Split program string into tokens
   - Split by space
   - Variable: tokens ← program splitted on space
3. Iterate through tokens, executing each command
    i. If token is integer by regex test
       Then:
       - Register ← token
       - Next iteration
   ii. Switch token, breaking after each case
       Case "PUSH": push register to stack
       Case "ADD": pop value from stack and add to register
       Case "SUB": pop value from stack and subtract from register
       Case "MULT": pop value from stack and multiply to register
       Case "DIV": pop value from stack and integer divide into register
                   integer of (register / popped value)
       Case "MOD": pop value from stack and integer remainder into register
                   (register % popped value)
       Case "POP": pop value from stack into register
       Case "PRINT": print register value

*/

const minilang = function minilang(program) {
  try {
    const stack = [];
    let register = 0;
    const tokens = program.split(' ');

    for (const token of tokens) {
      if (/^-?\d+$/.test(token)) {
        register = parseInt(token, 10);
        continue;
      }

      switch (token) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'MOD':
        register %= stack.pop();
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        throw new SyntaxError(`Unexpected token "${token}"`);
      }
    }
  } catch (e) {
    return e;
  }
};

// Test Cases

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
