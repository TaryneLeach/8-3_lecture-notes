/**
 * 1. What is destructuring? Write a brief response below.
 */ // The pulling apart of objects and arrays which lets you declare multiple variables at once.

// unpacking individual parts of an object or array
// kind of the inverse of object shorthand

/**
 * 2. Use destructuring to create three new variables from the following array.
 */
const astronauts = ["Jessica Watkins", "Robert Shane", "Nicole Mann"];
<<<<<<< HEAD
const [first, second, third] = astronauts
console.log(first);
console.log(second);
console.log(third);
=======
const [astro1, astro2, astro3] = astronauts;

console.log(typeof astro2);

// You can tell we are using destructuring when there is a [] or a {} on the lhs of an =
>>>>>>> e30763bfbfa8bbc89c36c3391436af4c890979b1

/**
 * 3. Use destructuring to create three new variables that represent each key-value pair in the following object.
 */
const astronaut = {
  name: "Jessica Watkins",
  isActive: true,
  occupation: "Geologist",

};
const {name, isActive, occupation} = astronaut

const { occupation } = astronaut;
console.log(occupation);

const getName = () => ["myra", "smith"];
const [firstName, lastName] = getName();

/**
 * 4. What are some benefits of using destructuring? Are there any limitations? Write a brief response below.
 */ // Shorter, more concise and better readability

/**
 * 5. Apply destructuring to the following function.
 */
<<<<<<< HEAD
function getAstronautActivityStatus({isActive}, {name}) {
=======
function getAstronautActivityStatus({ isActive, name }) {
>>>>>>> e30763bfbfa8bbc89c36c3391436af4c890979b1
  let result = "";
  if (isActive) {
    result = `${name} is active.`;
  } else {
    result = `${name} is not active.`;
  }
  return result;
}

<<<<<<< HEAD
const astronaut = {
  name: "Jessica Watkins",
  isActive: true,
  occupation: "Geologist",
};
console.log(getAstronautActivityStatus(astronaut, astronaut)); //> "Jessica Watkins is active."
=======
// const astronaut = {
//   name: "Jessica Watkins",
//   isActive: true,
//   occupation: "Geologist",
// };
getAstronautActivityStatus(astronaut); //> "Jessica Watkins is active."
>>>>>>> e30763bfbfa8bbc89c36c3391436af4c890979b1
