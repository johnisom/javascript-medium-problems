// Exercise 4

/**
 * The issue is that we are using the delete keyword when we really want to be
 * using the shift method. When we use the delete keyword, it just creates an
 * empty hole in that spot and doesn't shift all the other elements down. This
 * is because arrays in JavaScript can be sparse and have holes. To fix this,
 * use the shift method instead of the delete operator/keyword.
 *
 * Fixed code:
 */

function completeTasks(n = 1) {
  var tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(todos.shift() + ' complete!');
    tasksComplete++;
      
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
      
  } else {
    console.log(tasksComplete + ' tasks completed; ' + todos.length + ' remaining.');
      
  }
  
}

/**
 * UPDATE:
 *
 * The delete operator removes a property from an object, to be precise.
 */
