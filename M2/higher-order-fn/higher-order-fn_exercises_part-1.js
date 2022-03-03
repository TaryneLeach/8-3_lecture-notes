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

 
text (fn)
return text.toUpperCase()



text (fn)
return text.toLowerCase()



text (fn) 
return text.split(' ').join('-')


text (fn)
return 


/**
 * Use the function above to transform the text in the following ways. For each line below, you will need to write an anonymous function.
 * 
 *
 * "left" -> "LEFT"
 * "RiGhT" -> "right"
 * "left right left" -> "left-right-left"
 * "up Down left" -> "UDL"
 */
