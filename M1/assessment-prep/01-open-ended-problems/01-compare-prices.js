// Setup: The program below is supposed to check which value is larger, but it's broken.
//    Checkpoint: How can you tell it's broken? Can you run the code?
// Challenge:  Fix the program so that it correctly checks which value is larger.

// Hint:
//  Write a function that converts a string like "€39.501" into the number 39501
//  Using this function, compare the price of the house to the price of the car AS NUMBERS

// DO NOT CHANGE THE VALUE OF THESE VARIABLES
let priceOfHouse = "€1.500.000";
let priceOfCar = "€20.000";

if (newPriceOfHouse > newPriceOfCar) {
  console.log("The house is more expensive");
} else {
  console.log("The car is more expensive");
}
// todo: write a function
// todo: add 2 string parameters to the function def
function comparePrices(price1, price2){
  // todo: define default value and type <-- a string, its a message
// todo: create an array to store all prices
  const strPrices = [price1, price2]
  let strPricesData = {}
  for(let i =0; i < strPrices.length; i++) {
    strPricesData[i].strPrice = strPrices[i]
    strPricesData[i].isString = false;

    if (typeof strPrice[i] === string) {
      strPricesData[i].isString = false;


    for(let chars of strPrices[i]) {
      console.log(chars)
      // create a te
    }
    }
    console.log(strPricesData)
  }

  // todo: validate the arguments (edge cases)
  // todo: double check that the values are strings (loop through the array)
  //todo: double check that there are at least 1 number character in the string
  // todo: if either string argument has number characters, then a return a message saying s

  // todo: get the number value of each price string

  // todo: compare each price string to the other
  // todo: set the higher price to the resu;t
  // todo: return the result
  let result = `Neither price 1: $(price1) or price 2: ${price2} contains any numbers to compare.`
  

  return result
}
  console.log(comparePrices)(priceOfcar,priceOfHouse)
