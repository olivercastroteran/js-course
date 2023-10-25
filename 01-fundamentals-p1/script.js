/////////////////////////////////////////////////
// Values & Variables
/*
let firstName = 'Oliver';

console.log(firstName);

let jonas_matilda = 'JM';
let PI = 3.1415;

let mysFirstJob = 'Electromechanic';
let myCurrentJob = 'Programmer';
*/
/////////////////////////////////////////////////
// Data Types
/*
let javascriptIsFun = true;

console.log(typeof javascriptIsFun); // boolean
console.log(typeof 'Oliver'); // string
console.log(typeof 23); // number

javascriptIsFun = 'Yes';
console.log(typeof javascriptIsFun); // string
let year;
console.log(typeof year); // undefined

//bugs
console.log(typeof null); // object
console.log(typeof NaN); // number
*/
/////////////////////////////////////////////////
// let, const and var
/*
let age = 30;
age = 31;

const birthYear = 1993;
// birthYear = 1994 xxxxxxxxxxxxxxxxx CAN NOT
// const year xxxxxxxxxxxxxxxxx CAN NOT
var job = 'programmer';
job = 'teacher';
*/
/////////////////////////////////////////////////
// Basic Operators
/*
const now = 2023;
const ageOli = now - 1993;
const ageMeli = now - 1999;
console.log({ ageOli, ageMeli });
console.log(ageOli * 2, ageOli / 10, 2 ** 3);

const firstName = 'Oliver';
const lastName = 'Casto Teran';

console.log(firstName + ' ' + lastName);
console.log(`${firstName} ${lastName}`);

// Assignment operatoors
let x = 10 + 5;
x += 10; // x = x + 10
x -= 5; // x = x - 5
x *= 4; // x = x * 4
x /= 2; // x = x / 2
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageOli > ageMeli); // true
console.log(ageMeli >= 18); // true
*/
/////////////////////////////////////////////////
// Template literals
/*
const firstName = 'Oliver';
const job = 'Fullstack developer';
const birthYear = 1993;
const year = 2023;

const oli = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(oli);
*/
/////////////////////////////////////////////////
// if/else statement CONTROL STRUCTURE
/*
const age = 19;
// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log('She can start driving 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`She is too young, Wait another ${yearsLeft} years :)`);
}

const birthYear = 1993;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/
/////////////////////////////////////////////////
// Type Conversion & Coercion
// type conversion
/*
const inputYear = '1993';
console.log(inputYear + 18); // 199318
console.log(Number(inputYear) + 18); // 2011
// type coercion
console.log(`I'm 30 years old`); // 'I'm 30 years old'
console.log('23' - '10' - 3); // 10
// turthy falsy values
console.log(0, '', undefined, null, Nan); // boolean => false
*/
/////////////////////////////////////////////////
// Equality operators === | ==
/*
console.log(Boolean(18 === '18')); // false - It does NOT type coercion | stric
console.log(Boolean(18 == '18')); // true - It does type coerscion | loose
const favoriteNum = prompt('What is your favorite number?');
console.log(favoriteNum); // '1' string
// difernet !==
*/
/////////////////////////////////////////////////
// Boolean logic
/*
let hasDriversLicense = true;
let hasGoodVision = true;
let isTired = false;

console.log(hasDriversLicense && hasGoodVision); // true
hasGoodVision = false;
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense || hasGoodVision); // false
hasGoodVision = true;
const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

if (shouldDrive) {
  console.log('Is able to drive');
} else {
  console.log('walk');
}
*/
/////////////////////////////////////////////////
// Switch Statement
/*
const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'Tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('enjoy the weekend :)');
    break;
  default:
    console.log('Not a valid day!');
}
*/
/////////////////////////////////////////////////
// The conditional/ternary operator
/*
const age = 23;
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';

console.log(`I like to drink ${drink}`);
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/
