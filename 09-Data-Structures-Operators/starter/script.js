'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Enhanced Object literals

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  // ES6 enhanced method literals
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // function argument destructing
  // ES6 enhanced method literals
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // ES6 enhanced method literals
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  // ES6 enhanced method literals
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

/*
// Optional Chaining (.)
if (restaurant.openingHours && restaurant.openingHours.mon) 
  console.log(restaurant.openingHours.mon.open);

  // with optional chaining
  console.log(restaurant.openingHours.mon?.open);
  console.log(restaurant.openingHours?.mon?.open);

  // Example
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  // optional chaining
  for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
  }

  // optional chaining on Methods
  console.log(restaurant.order?.(0, 1) ?? 'Method does not exit');

  // optional chaining on arrays
  const users = [
    {name: 'Sagar', email: 'jhasagar700@gmail.com'}
  ];
  console.log(users[0]?.name ?? 'User array empty');
*/

/*
// Looping arrays the for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// value with inex
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// console.log([...menu.entries()]);
*/

/*
// Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ||= 10;

// using nulish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// AND assignment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1, rest2);
*/

/*
// restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
console.log('---- OR ----');
// Use any data type, return any data type, short-cicuting

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// here restaurant.numGuests is undefined so 10 will the answer
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----'); 

console.log(0 && 'Sagar');
console.log(7 && 'Sagar');
console.log('Hello' && 23 && null && 'Sagar');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

// using && operator check and call the method
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
*/

/*
// 1) Destructruing
// Array Resting
// Spread, because on righ side of =
const arr = [1, 2, ...[3, 4]];

// Rest, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects Rest pattern
const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Functions (...number) rest parameter
const add = function (...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    sum +=numbers[i];
  }
  console.log(sum);
}
add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushroom');
*/

/*
// The Spred Operator
const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. Not objects
const str = 'Sagar';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// invalid
// console.log(`${...str}`)

// Real-world examples
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('I'),
];ngredient 2?'),
  // prompt('Ingredient 3?
console.log(ingredients);
restaurant.orderPasta(...ingredients);

// Object
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

// copy object
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorant Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
// Destructuring Objects
// passing object to the function 
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// illustarte default working
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b:7, c: 14};
({a, b} = obj);

console.log(a, b);

// Nested objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);
*/

/*
// Destructuring Arrays
// Swtiching variables 
let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] =  restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring 
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);
const [i, ,[j, k]] = nested;
console.log(i, j, k);

// Default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
*/
