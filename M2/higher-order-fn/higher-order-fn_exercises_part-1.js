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
// console.log(directions); //> ["Left", "Right", "Up"]

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






const capitalize = () => {};

// named
transform('hello', capitalize);

// anonymous
transform('hello', function () {});

/**
 * Use the function above to transform the text in the following ways. For each line below, you will need to write an anonymous function.
 * 
 *
 * "left" -> "LEFT"
 * "RiGhT" -> "right"
 * "left right left" -> "left-right-left"
 * "up Down left" -> "UDL"
 */

 fn(text).toUpperCase()



 fn(text).toLowerCase()
 
 
 
 fn(text).split((' ').join('-'))

 // split each word into an array, using the white space as the delimiter
  const textArr = text.split(' ')
 // create temp variable to store results
 let result = ''
 // loop through the array
 for(word of textArr) {
   result += word[0]
  // add the first character of each word to the result
  // capitalize the result
 }
  result = result.toUpperCase()
 
 
console.log(
  transform('up Down left', function (text) {
    // split each word into an array, using the whitespace as the delimiter
    const textArr = text.split(' ');
    // create a temp variable to store result
    let result = '';
    // loop through the array
    for (let word of textArr) {
      // add the first char of each word to the result
      result += word[0];
    }
    // capitalize the result
    result = result.toUpperCase(); // strings can't be mutated

    return result;
  }),
);

/**
 * Write a fn called each which accepts two parameters:
 *  - an array
 *  - a callback fn
 * The each fn loops through the given array and runs the callback function on each of it's elements.
 */
function each(arr, fn) {
  for (let element of arr) {
   fn(element)
   // for (let i = 0; i < arr.length; i++) {
     // fn(arr[i]) }
  for (let i = 0; i < arr.length; i++) {
    // for (let e of arr) { // for...of
    // run the function on each element
    fn(arr[i]);
    // fn(e); // for...of
  }
}

// The following call to each should print
// 1
// 2
// 3
// 4
// each([1, 2, 3, 4], function (value) {
//   const transformedValue = value;
//   console.log(transformedValue);
// });

// The following call to each should print
// 2
// 4
// 6
// 8
// each([1, 2, 3, 4], function (value) {
//   let transformedValue = value * 2;
//   console.log(transformedValue);
// });

/**
 * Write a fn called map which accepts two parameters:
 *  - an array
 *  - a callback fn
 * The map fn should return a new array where each new element is the return value from the anonymous function with the argument as the original element value.
 */
function map(arr, fn) {
  let newArr = []
  for(let element of arr) {
     newArr.push(fn(element))    
}
  return newArr; 
  let newArr = [];
  // loop through the arr
  for (let e of arr) {
    // run the function on the element
    newArr.push(fn(e));
  }

  return newArr;
}

// The following call to map should return
// [2, 4, 6, 8];
// console.log(
//   map([1, 2, 3, 4], function (value) {
//     const transformedValue = value * 2;
//     return transformedValue;
//   }),
// );

/**
 * Write a fn called reject which accepts two parameters:
 *  - an array
 *  - a callback fn
 * The reject fn should return a new array containing all of the values that do not return true to the callback
 */
function reject(arr, fn) {
  // create new array empty
 let rejects = []
 // loop through the array
 for (let element of arr) {
  // store the call back function return value in a variable
  let isAccepted = fn(element)
  if (!isAccepted) {
    rejects.push(element)
  }
  // if the variable is false => then add the value to the array
  // return the array
 }
function reject(arr, isAccepted) {
  // create a new arr empty
  let rejects = [];
  // loop through the array
  for (let e of arr) {
    // store the callback fn return value in a variable
    // let isAccepted = fn(e);
    // if the variable is false
    if (!isAccepted(e)) {
      // add the value to the new array
      rejects.push(e);
    }
  }

  // return the new arr
  return rejects;
}

// The following call to reject should return
// [1, 2];
// console.log(
//   reject([1, 2, 3, 4], function (value) {
//     const transformedValue = value > 2;
//     return transformedValue;
//   }),
// );

// The following call to reject should return
// [3, 5];
// console.log(
//   reject([2, 3, 4, 5], function (value) {
//     const transformedValue = value % 2 === 0;
//     return transformedValue;
//   }),
// );
