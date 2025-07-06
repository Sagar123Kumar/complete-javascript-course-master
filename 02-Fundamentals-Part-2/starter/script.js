'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
*/

/*
// Functions
function logger() {
  console.log('My name is Sagar');
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(2, 4);
console.log(orangeJuice);

const num = Number('23');
console.log(num);
*/

/*
// Function Declarations vs Expressions

// Function declaration
function calcAge1(birthYear) { // we can call function before function declaration 
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//Function expression
const calcAge2 = function (birthYear) { //we can't call function before function expression
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);
*/


/*
// Arrow Function
//Function expression
const calcAge2 = function (birthYear) { 
  return 2037 - birthYear;
}

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName}  retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Sagar'));
console.log(yearsUntilRetirement(1980, 'Sonu'));
*/


/*
// Functions Calling Other Functions
function cutFruitsPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitsPieces(apples); // calling another function
  const orangePieces = cutFruitsPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
  return juice;
} 
console.log(fruitProcessor(2, 3));
*/