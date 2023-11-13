'use strict';
/////////////////////////////////////////////////////
// Default Parameters
/*
const bookigns = [];

const createBooking = (
  flightCode,
  numPassengers = 1,
  price = 199 * numPassengers
) => {
  const booking = {
    flightCode,
    numPassengers,
    price,
  };
  bookigns.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

console.log(bookigns);
*/
/////////////////////////////////////////////////////
// Passing Arguments - Value VS Reference
/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 2473967985,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2473967985) {
    console.log('Checkde In');
  } else {
    console.log('Wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
*/
/////////////////////////////////////////////////////
// f()'s accepting callback f()'s
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order f()
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('javascript is the best!', upperFirstWord);
transformer('javascript is the best!', oneWord);
*/
/////////////////////////////////////////////////////
// f()'s returning new f()
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greet('Hello')('Jonas');
*/
/////////////////////////////////////////////////////
// The Call and Apply Methods | The Bind Method
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a set on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${this.flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, 'Oliver CT');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Jonas Smith')
book.call(eurowings, 23, 'Jonas Smth');
const arr = [23, 'Jonas Smth'];
book.apply(eurowings, arr);
book.call(eurowings, ...arr);
// Bind
const bookEW = book.bind(eurowings);
const bookEW23 = book.bind(eurowings, 23);

bookEW23('Jonas Schmedtmann');

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
*/
/////////////////////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const pollBtn = document.querySelector('.poll');

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = +prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    );

    if (
      typeof answer === 'number' &&
      answer >= 0 &&
      answer < this.answers.length
    ) {
      this.answers[answer]++;
    }
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answer: [5, 2, 3] }, 'string');
*/

/////////////////////////////////////////////////////
// IIFE
/*
(function () {
  console.log('This will never run again');
})();
*/
/////////////////////////////////////////////////////
// Closures
/*
const secureBooking = function () {
  let passengerCount = 0; // Can NOT be manipulated or accessed from the outside

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers 🧑`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker)
*/
