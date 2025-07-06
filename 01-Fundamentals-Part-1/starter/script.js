/*
// Values & Variable
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Sagar";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let person = "sagar";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);

console.log(myCurrentJob)
*/

/*
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 24);
console.log(typeof 'Sagar');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/


/*
//let const var
let age = 30;
age = 31;

const birthYear = 1991;


var job = 'programmer';
job = 'teacher';
*/

/*
//Basic Operators
const now = 2037
const ageSagar = now - 1991;
const ageSarah = now - 2018;
console.log(ageSagar, ageSarah);

console.log(ageSagar * 2, ageSagar / 10, 2**3);

const firstName = 'Sagar';
const lastName = 'Kumar';
console.log(firstName + ' ' + lastName);

//assignment operator
let x = 10 + 5; // 15
x += 10;
x *= 4;
console.log(x);

// Comparison operator
console.log(ageSagar > ageSarah);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
// Operator Precedence
const now = 2037
const ageSagar = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
x = y = 25 - 10 - 5; // x = y = 10;
console.log(x, y);

const averageAge = (ageSagar + ageSarah) / 2;
console.log(ageSagar, ageSarah, averageAge);
*/

/*
// Strings and template Literals
const firstName = 'Sagar';
const job = 'Programmer';
const birthYear = 2004;
const year = 2037 - birthYear

const sagar = "I'm " + firstName + ', a ' + year + ' years old ' + job;
console.log(sagar);

//string literals
const sagarNew = `I'm ${firstName} a ${year} years old ${job}`;
console.log(sagarNew);

// multiple line string
console.log(`String
multiple
lines`)
*/

/*
// If else statement
const age = 15;

if(age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Sagar'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old'); // + convert number to string 
console.log('23' - '10' - 3); // - convert string to number (10)
console.log('23' * '2'); // 46


let n = '1' + 1; // string concatinate 11
n = n - 1; // - convert 11 - 1 (10)
console.log(n);
*/