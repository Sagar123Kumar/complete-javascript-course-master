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

/*
// Reviewing funcion
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if(retirement > 0) {
    console.log(`${firstName}  retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
  
  // return `${firstName}  retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Sagar'));
console.log(yearsUntilRetirement(1970, 'Rohan'));
*/

/*
// Introdunction to Arrays
const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

// const years= new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Sagar';
const sagar = [firstName, 'Kumar', 2037 - 1991, 'teacher', friends];

console.log(sagar);
console.log(sagar[4][0]);

// Exercise 
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

// different way to use array argument as a function call (expression)
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/


/*
// Basic Array Operations (Methods)
// Add elements
const friends = ['Micheal', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); // return the length of new array
console.log(friends);
console.log(newLength);

friends.unshift('John'); // add in beggening of the array
console.log(friends);

// Remove elements
const popped = friends.pop(); // remove last element and return it
console.log(popped);
console.log(friends);

console.log(friends.shift()); // remove first element and return it
console.log(friends);

friends.push(23);
console.log(friends.indexOf('Steven')); // return the index value of the data, if not retrun -1
console.log(friends.includes('Steven')); // return true if present otherwise return false
console.log(friends.includes(23)); 

if (friends.includes('Peter')) {
  console.log('You have a friend called Peter');
}
*/ 

/*
//Introduction to Objects
// Array
const jonasArray = [
  'Sagar',
  'Kumar',
  2037 - 1991,
  'teacher',
  ['Sonu', 'Rahul', 'Shivam']
];

// Object litteral sentax
const sagar = {
  firstName: 'Sagar',
  lastName: 'Kumar',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Sonu', 'Rahul', 'Shivam']
};
*/

/*
// Dot vs Bracket Notation in object
const sagar = {
  firstName: 'Sagar',
  lastName: 'Kumar',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Sonu', 'Rahul', 'Shivam']
};
console.log(sagar);

//fetch properties using (.)
console.log(sagar.lastName);
//fetch properties using []
console.log(sagar['lastName']); // it is useful to when we use properties name form the use so we take and put in [] its evaluete expression and return the value.

const nameKey = 'Name';
console.log(sagar['first' + nameKey]);
console.log(sagar['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Sagar? Choose between firstName, lastName, age, job, friends');

if(sagar[interestedIn]) {
  console.log(sagar[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, friends');
}

sagar.location = 'India';
sagar['github'] = 'github.com/Sagar123Kumar';
console.log(sagar);

// challenge
// "Sagar has 3 friends, and his best friend is called sonu"

console.log(`${sagar.firstName} has ${sagar.friends.length} friends and his best friend is called ${sagar.friends[0]}`);
*/