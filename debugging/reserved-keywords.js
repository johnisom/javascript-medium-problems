// Exercise 2

/**
 * This is because the return statement on line 11 is returning from the inner
 * function and not the outer function. If you need an early exit, you should
 * use a for loop instead of the forEach array method.
 *
 * Fixed code below:
 */

var RESERVED_KEYWORDS = [
  'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger',
  'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof',
  'interface', 'let', 'new', 'package', 'private', 'protected', 'public',
  'return', 'static', 'super', 'switch', 'this', 'throw', 'try', 'typeof',
  'var', 'void', 'while','with', 'yield',
];

function isReserved(name) {
  for (const reserved of RESERVED_KEYWORDS) {
    if (name === reserved) return true;
  }

  return false;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true
