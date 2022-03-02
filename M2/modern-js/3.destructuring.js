/**
 * 1. What is destructuring? Write a brief response below.
 */ // The pulling apart of objects and arrays which lets you declare multiple variables at once.

/**
 * 2. Use destructuring to create three new variables from the following array.
 */
const astronauts = ["Jessica Watkins", "Robert Shane", "Nicole Mann"];
const [first, second, third] = astronauts
console.log(first);
console.log(second);
console.log(third);

/**
 * 3. Use destructuring to create three new variables that represent each key-value pair in the following object.
 */
const astronaut = {
  name: "Jessica Watkins",
  isActive: true,
  occupation: "Geologist",

};
const {name, isActive, occupation} = astronaut

/**
 * 4. What are some benefits of using destructuring? Are there any limitations? Write a brief response below.
 */ // Shorter, more concise and better readability

/**
 * 5. Apply destructuring to the following function.
 */
function getAstronautActivityStatus({isActive}, {name}) {
  let result = "";
  if (isActive) {
    result = `${name} is active.`;
  } else {
    result = `${name} is not active.`;
  }
  return result;
}

const astronaut = {
  name: "Jessica Watkins",
  isActive: true,
  occupation: "Geologist",
};
console.log(getAstronautActivityStatus(astronaut, astronaut)); //> "Jessica Watkins is active."
