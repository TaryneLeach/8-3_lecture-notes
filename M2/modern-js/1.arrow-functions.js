/**
 * 1. Convert the greet() function to use the arrow function syntax instead of the function declaration syntax.
 */
<<<<<<< HEAD

=======
>>>>>>> e30763bfbfa8bbc89c36c3391436af4c890979b1
const greet = (name) => {
  let result = "";
  if (name) {
    result = `Welcome to NASA, ${name}!`;
  } else {
    result = "Welcome to NASA, space cadet!";
  }
  return result;
};

<<<<<<< HEAD


/*function greet(name) {
  let result = "";
  if (name) {
    result = `Welcome to NASA, ${name}!`;
  } else {
    result = "Welcome to NASA, space cadet!";
  }
  return result;
} */
=======
// function name(name) {
//   let result = "";
//   if (name) {
//     result = `Welcome to NASA, ${name}!`;
//   } else {
//     result = "Welcome to NASA, space cadet!";
//   }
//   return result;
// }
>>>>>>> e30763bfbfa8bbc89c36c3391436af4c890979b1

console.log(greet("Jessica")); //> "Welcome to NASA, Jessica!"
console.log(greet()); //> "Welcome to NASA, space cadet!"

/**
 * 2. Try writing the greet() function above on a single line.
 * Hint...
 * . 
 * .
 * .
 * .
 * (you may need to use a ternary operator and an implicit return)
 */
<<<<<<< HEAD
 const greet2 = (name) => name ? `Welcome to NASA, ${name}!`: "Welcome to NASA, space cadet!"
// implicit return
=======

const greet2 = (name) =>
  name ? `Welcome to NASA, ${name}!` : "Welcome to NASA, space cadet!";

console.log(greet2("Jessica")); //> "Welcome to NASA, Jessica!"
console.log(greet2()); //> "Welcome to NASA, space cadet!"

>>>>>>> e30763bfbfa8bbc89c36c3391436af4c890979b1
/**
 * 3. Are there any benefits to using the arrow function syntax? Are there any limitations? Write a brief response below.
 * concise
 * potentially more reable
 * less clutter
 * easier to create "anonymous founctions (a function without a name)"
 * 
 * BUT
 * arrow functions aren't hoisted
 */

// concise
// potentially more readable
// easier to create 'anonymous functions' (a function without a name)

// BUT

// arrow functions aren't hoisted
