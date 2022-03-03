/**
 * Take a look at the functions below. Are any of the functions a higher order function?
 * If so, which ones and why so? If not, why not?
 */

function truthy() {
  return true; // nope regular function
}

function falsy() {
  return !truthy(); // yes returning another function
}

falsy(); //> false

/**
 * Take a look at the functions below. Are any of the functions a higher order function?
 * If so, which ones and why so? If not, why not?
 */

function left() {
  return 'Left'; // no
}

function right() {
  return 'Right'; // no
}

function go(goLeft = true) {
  return goLeft ? left : right; // yes
}

/**
 * Take a look at the functions below. Are any of the functions a higher order function?
 * If so, which ones and why so? If not, why not?
 */

const directions = [];

function storeDirections(direction) { // no
  directions.push(direction);
}

function go(direction, operation) {
  operation(direction); // yes
  return direction;
}

go('Left', storeDirections);
go('Right', storeDirections);
go('Up', storeDirections);
console.log(directions); //> ["Left", "Right", "Up"]

/**
 * Take a look at the higher order function below.
 * The transform() function expects, as its second argument, a function that accepts at least one argument.
 */

function transform(text, fn) {
  if (typeof fn !== 'function') {
    return text;
  }

  return fn(text);
}

<<<<<<< HEAD
 
text (fn)
return text.toUpperCase()



text (fn)
return text.toLowerCase()



text (fn) 
return text.split(' ').join('-')


text (fn)
return 

=======
const capitalize = () => {};

// named
transform('hello', capitalize);

// anonymous
transform('hello', function () {});
>>>>>>> e181697fbb1c4286af86d636a56a1c612e778523

/**
 * Use the function above to transform the text in the following ways. For each line below, you will need to write an anonymous function.
 * 
 *
 * "left" -> "LEFT"
 * "RiGhT" -> "right"
 * "left right left" -> "left-right-left"
 * "up Down left" -> "UDL"
 */

/**
 * Write a fn called each which accepts two parameters:
 *  - an array
 *  - a callback fn
 * The each fn loops through the given array and runs the callback function on each of it's elements.
 */
function each(arr, fn) {
  // write your code here
}

// The following call to each should print
// 1
// 2
// 3
// 4
each([1, 2, 3, 4], function (value) {
  console.log(value);
});

// The following call to each should print
// 2
// 4
// 6
// 8
each([1, 2, 3, 4], function (value) {
  console.log(value * 2);
});

/**
 * Write a fn called map which accepts two parameters:
 *  - an array
 *  - a callback fn
 * The map fn should return a new array where each new element is the return value from the anonymous function with the argument as the original element value.
 */
function map(arr, fn) {
  // write your code here
}

// The following call to map should return
// [2, 4, 6, 8];
map([1, 2, 3, 4], function (value) {
  return value * 2;
});

/**
 * Write a fn called reject which accepts two parameters:
 *  - an array
 *  - a callback fn
 * The reject fn should return a new array containing all of the values that do not return true to the callback
 */
function reject(arr, fn) {
  // write your code here
}

// The following call to reject should return
// [1, 2];
reject([1, 2, 3, 4], function (value) {
  return value > 2;
});

// The following call to reject should return
// [3, 5];
reject([2, 3, 4, 5], function (value) {
  return value % 2 === 0;
});
