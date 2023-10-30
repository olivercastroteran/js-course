'use strict';

////////////////////////////////////////////////
// Strict Mode 'use strict'
/*
let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio' => Reserved word
// const private = true => Reserved word
// const if = 23 => Reserved word
*/
////////////////////////////////////////////////
// Functions
/*
function looger() {
  console.log('My name is Jonas');
}

// calling | running | invoking a function
// looger()
// looger()
// looger()

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const mixJuice = fruitProcessor(3, 2);
console.log(mixJuice);
*/
////////////////////////////////////////////////
// Function Declarations VS Function Expressions
/*
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1993);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1993);

console.log(age1, age2);
*/
////////////////////////////////////////////////
// Arrow Functions
/*
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1993);
console.log(age3);

const yearsToRetirement = (birthYear, firstName) => {
  const age = calcAge3(birthYear);
  return `${firstName} retires in ${65 - age} years`;
};

console.log(yearsToRetirement(1993, 'Oliver'));
console.log(yearsToRetirement(1999, 'Melissa'));
*/
////////////////////////////////////////////////
// Arrays
/*
const friends = ['Caste', 'Kurt', 'Agus'];

//const years = new Array(1991, 1994, 1999);

console.log(friends[0]);
//console.log(years.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Agusmin';

const firstName = 'Oliver';
const oli = [firstName, 'Castro', 2037 - 1993, friends];

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1999, 1967, 2002, 2010, 2018];

// Add elements
friends.push('Sanqui'); // at the end
friends.unshift('Jonas'); // at the begining
console.log(friends);

// Remove elements
friends.pop(); // last
friends.shift(); // first one
console.log(friends);

// other
friends.indexOf('Caste'); // return the index of item
friends.includes('Kurt'); // returns true strict equality ===
*/
////////////////////////////////////////////////
// Objects
/*
const me = {
  firstName: 'Oliver',
  lastName: 'CT',
  birthYear: 1993,
  job: 'Fullstack Developer',
  friends: ['Caste', 'Kurt', 'Agus'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  },
};

console.log(me.getSummary());
// console.log(me.firstName);
// console.log(me['lastName']);
*/
////////////////////////////////////////////////
// Loops

for (let rep = 1; rep <= 10; rep++) {
  //console.log(`Lifting weights repetition ${rep} 🏋️`);
}

const me = [
  'Oliver',
  'Castro Teran',
  2037 - 1993,
  'Fullstack Developer',
  ['Caste', 'Kurt', 'Agus'],
];

const types = [];

// ------------- only strings -------------
for (let i = 0; i < me.length; i++) {
  if (typeof me[i] !== 'string') continue;
  types.push(typeof me[i]);
  //console.log(me[i], types[i]);
}

// ------------- break with number -------------
for (let i = 0; i < me.length; i++) {
  if (typeof me[i] === 'number') break;
  //console.log(me[i], types[i]);
}

// ------------- backwards -------------
for (let i = me.length - 1; i >= 0; i--) {
  //console.log(me[i]);
}

// ------------- loop inside loop -------------
// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`------ Starting Exercise ${exercise} ------`);
//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Lifting weight repetition ${rep} 🏋️`);
//   }
// }

// ------------- while loop -------------
// Usefull when we dont know haw many repetitions there will be, just checks if its condition is true

let rep = 1;

while (rep <= 10) {
  //console.log(`Lifting weight repetition ${rep} 🏋️`);
  rep++;
}

let dice1 = Math.trunc(Math.random() * 6) + 1;
let dice2 = Math.trunc(Math.random() * 6) + 1;
let dice3 = Math.trunc(Math.random() * 6) + 1;
let dice4 = Math.trunc(Math.random() * 6) + 1;
let dice5 = Math.trunc(Math.random() * 6) + 1;

let throws = 0;

console.log(dice1, dice2, dice3, dice4, dice5);

while (
  dice1 !== dice2 ||
  dice2 !== dice3 ||
  dice3 !== dice4 ||
  dice4 !== dice5
) {
  console.log(dice1, dice2, dice3, dice4, dice5);

  dice1 = Math.trunc(Math.random() * 6) + 1;
  dice2 = Math.trunc(Math.random() * 6) + 1;
  dice3 = Math.trunc(Math.random() * 6) + 1;
  dice4 = Math.trunc(Math.random() * 6) + 1;
  dice5 = Math.trunc(Math.random() * 6) + 1;
  throws++;
}
console.log(throws);
console.log(dice1, dice2, dice3, dice4, dice5);
