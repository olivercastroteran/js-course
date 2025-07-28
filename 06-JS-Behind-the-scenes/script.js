'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';
      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';
      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millennial);
  }
  printAge();

  return age;
}

const firstName = 'Oliver';
calcAge(1993);

// Variable Hoisting
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Oliver';
let job = 'Developer';
const year = '1993';

// Functions Hoisting
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteCart();

var numProducts = 10;

function deleteCart() {
  console.log('All products deleted!');
}

console.log(this);

const calcAge = function () {
  console.log(this);
};

const calcAgeArr = () => {
  console.log(this);
};

calcAge();
calcAgeArr();

const oliver = {
  firstName: 'Oliver',
  year: 1993,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillennial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillennial();
  },
  greet: () => console.log(`Hey ${this.firstName}`), // this = Global object => clg undefined
};

const melissa1 = {
  year: 1999,
};
// Method borrowing
melissa1.calcAge = oliver.calcAge;

oliver.calcAge();
melissa1.calcAge();

////////////////////////////
// Object Reference in Practice (Shallow vs Deep copies)

const melissa2 = {
  firstName: 'Melissa',
  lastName: 'Carvajal',
  age: 27,
};

function marryPerson(person, newLastName) {
  person.lastName = newLastName;
  return person;
}

// const marriedMelissa = melissa;
// marriedMelissa.lastName = 'Castro';

console.log('Before:', melissa2);
console.log('after:', marriedMelissa);

const melissa = {
  firstName: 'Melissa',
  lastName: 'Carvajal',
  age: 27,
  family: ['Oliver', 'Thomas'],
};

// 1 Level copy - Shallow Copy
const melissaCopy = { ...melissa };
melissaCopy.lastName = 'Castro';

console.log(melissa, melissaCopy);

melissaCopy.family.push('Bianca');

console.log('Before:', melissa);
console.log('After:', melissaCopy);

// Deep Copy/Clone
const melissaClone = structuredClone(melissa);
melissaClone.family.push('To be defined');

console.log('Original', melissa);
console.log('Clone', melissaClone);
