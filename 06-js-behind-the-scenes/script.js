'use strict';

//////////////////////////////////////////////////
// Scoping
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName);
  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var milenial = true;
      // const firstName = 'Steven';
      // outer = 'NEW OUTPUT'
      const str = `Oh, you are a milenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    // console.log(add(2,3)); with out strict mode f(add) will be call
    console.log(milenial);
  }

  printAge();

  return age;
}

const firstName = 'Oliver';

calcAge(1993);

//////////////////////////////////////////////////
// Hoisting and TDZ
// Fariables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Oliver';
let job = 'Developer';
const year = 1991;

// Functions
console.log(addDecl(2 + 3)); // 5
console.log(addExp(2 + 3)); // ReferenceError: cannot access --- before initialization TDZ
console.log(addArr(2 + 3)); // ReferenceError: cannot access --- before initialization TDZ

function addDecl(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

// if var => undefined(2,3) TypeError: Undefined is not a function
const addArr = (a, b) => a + b;

// Example
if (!numProducts) deleteShopingCart();

var numProducts = 10;

function deleteShopingCart() {
  console.log('All products deleted!');
}
// => All products deleted, because of hoisting numProducts = undefined
// Dont use var, use const and if need to change variable use let
// Declare variables at the top
// declare functions first and use them only after the declaration
*/
//////////////////////////////////////////////////
// The THIS keyword
/*
console.log(this); // Window Object

const calcAge = function (birthYear) {
  age = 2037 - birthYear;
  console.log(this);
};

const calcAgeArrow = birthYear => {
  age = 2037 - birthYear;
  console.log(this);
};

calcAge(1993); // this = undefined, if no 'use strict' Window Object
calcAgeArrow(1993); // this = Window Object

var firstName = 'Max';

const jonas = {
  firstName: 'Jonas',
  year: 1991,

  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  // Doesn have its own "this keyword"
  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.calcAge(); // this = jonas Object
jonas.greet(); // Hey Max

const max = {
  year: 2017,
};
// Method borrowing - copying the method
max.calcAge = jonas.calcAge;

max.calcAge(); // this = max
*/
///////////////////////////////////////////////////////////////
// Regular functions VS Arrow functions

const jonas = {
  firstName: 'Jonas',
  year: 1991,

  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    // solution 1
    const self = this;
    const isMilenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMilenial();
    // Solution 2
    const isMilenial2 = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMilenial2();
  },

  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.calcAge(); //TypeError: Cannot read property of Undefined

const addExpr = function (a, b) {
  console.log(arguments); // [2, 5]
  return a + b;
};

addExpr(2, 5);

var addArrow = (a, b) => a + b; // Does NOT have arguments it is not defined

///////////////////////////////////////////////////////////////
// Primitives VS Objects
// primitive types
let lastName = 'Williams';
let oldLastName = lastName;

lastName = 'Davis';

console.log(lastName, oldLastName); // Davis Williams
// reference types
const melissa = {
  firstName: 'Melissa',
  lastName: 'Carvajal',
  age: 24,
};

const marriedMelissa = melissa;
marriedMelissa.lastName = 'Castro';

console.log('Before marriage:', melissa);
console.log('After marriage:', marriedMelissa); // same object for both, it is reference type

// copying objts
const melissa2 = {
  firstName: 'Melissa',
  lastName: 'Carvajal',
  age: 24,
};

const melissaCopy = Object.assign({}, melissa2); // creates new objt with this properties - Only works in the first level, shallow copy, inner objects dont deep clone
melissaCopy.lastName = 'Castro';

console.log(melissa2, melissaCopy);
