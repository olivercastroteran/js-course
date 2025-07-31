'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

function formatFlights(flights) {
  let str = [];
  const getCode = (str) => str.slice(0, 3).toUpperCase();

  for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    str.push(
      `${type.startsWith('_Delayed') && '🔴'} ${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(
        36,
      ),
    );
  }
}

formatFlight(flights);

/*
///////////////////////////////////////
// Coding Challenge #4


Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

///////////////////////////////////////
// Working With Strings - Part 3

console.log('a+very+nice+string'.split('+')); // ['a', 'very', 'nice', 'string']

const [firstName, lastName] = 'Oliver Castro'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); // Mr. Oliver CASTRO

const capitalizeName = function (name) {
  const nameArr = name.split(' ');

  return nameArr.map((n) => n[0].toUpperCase() + n.slice(1)).join(' ');
};

capitalizeName('oliver castro teran');

const message = 'Go to gate 23!';

message.padStart(20, '+').padEnd(30, '+'); // ++++++Go to gate 23!++++++++++

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

maskCreditCard(4562123078958520); // ************8520

const message2 = 'Bad weather... All departures Delayed... ';
console.log(message2.repeat(5));

/*
///////////////////////////////////////
// Working With Strings - Part 2
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'oLivEr';
const passedLower = passenger.toLowerCase();
const passengerCorrect = passedLower[0].toUpperCase() + passedLower.slice(1);

const email = 'test@test.com';
const loginEmail = '   Test@test.cOm \n';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replaceAll(/door/g, 'gate'));

const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); //true
console.log(plane.startsWith('Air')); //true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/
/*
///////////////////////////////////////
// Working With Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // 7 not included

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));
*/
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

///////////////////////////////////////
// New Operations to make sets Useful
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', [...commonFoods]);

const italianMexicanFoods = italianFoods.union(mexicanFoods);
console.log('Union:', [...italianMexicanFoods]);

const onlyItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference:', onlyItalianFoods);

const uniqueItalianMexican = italianFoods.symmetricDifference(mexicanFoods);
// Check Ben diagrams for sets

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

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}, will be delivered to: ${address} at ${time}`,
    );
  },

  orderPaste(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with: ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/////////////////////////////////////
// Looping Objects: key, values & entries

for (const day of object.keys(openingHours)) {
  console.log(day);
}

for (const val of object.values(openingHours)) {
  console.log(val);
}

for (const [key, value] of object.entries(openingHours)) {
  console.log(key, value);
}
// [key, value]
for (const [day, { open, close }] in openingHours) {
  console.log(`on ${day}: we open at: ${open} and close at: ${close}`);
}

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);


// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/
///////////////////////////////////////
// Maps: Iteration

/*
///////////////////////////////////////
// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/
/*
///////////////////////////////////////
// MAPS
const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

rest
  .set('categories', ['Italian', 'Pizzeria'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are close');

rest.get('name');
rest.get(true);

rest.delete(2);
rest.has('categories');
rest.size;
*/
// rest.clear()
/*
///////////////////////////////////////
// SETS
const orderSet = newSet(['Pizza', 'Risotto', 'Pizza', 'Pasta']);
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
for (const order of orderSet) {
  console.log(order);
}
// orderSet.clear()
*/
///////////////////////////////////////
// Coding Challenge #2
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

let sum = 0;
for (const odd of Object.values(game.odds)) {
  sum += odd;
}
console.log(sum / Object.values(game.odds).length);

for (const [team, odd] of object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}*/
/*
/////////////////////////////////////
// Optional Chaining ?.
console.log(restaurant.openingHours?.mon?.open);

for (const day of weekdays) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On day ${day} we open at ${open}`);
}

// On methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');
*/
/*
/////////////////////////////////////
// Looping Arrays - for of
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/
///////////////////////////////////////
// Coding Challenge #1
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*

// 1
const [players1, players2] = game.players;
// 2
const [gk, ...fieldPlayers] = players1;
// 3
const allPlayers = [...players1, ...players2];
// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
// 6
function printGoals(...players) {
  let str = '';
  players.forEach((player) => {
    str += `${player} scored a goal, `;
  });
  str += `In totals scored ${players.length} goals`;
}

printGoals(...game.scored);
// 7
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');
*/
/*
/////////////////////////////////////
// Logical Assignment operators
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// OR assignment operator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// Nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
rest2.owner &&= '<ANONYMOUS>';
*/
/*
/////////////////////////////////////
// Nullish coalescing operator ??
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
// Nullish: null, undefined (NOT 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
*/
/*
/////////////////////////////////////
// Short Circuiting && and ||
// use any data type, return any data type & short-circuiting
// ------- OR Operator -------
console.log(3 || 'Oli');
console.log('' || 'Oli');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

restaurant.numGuests = 23;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
const guests2 = restaurant.numGuests || 10;

// ------- AND Operator -------
console.log(0 && 'Oli'); // 0
console.log(7 && 'Oli'); // Oli

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'cheese');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'cheese');
*/
/*
/////////////////////////////////////
// Rest Patterns & Operators
// 1. Destructuring
// spread, because on LEFT side of =
const arr = [1, 2, ...[3, 4]];
// rest, because on RIGHT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
// Objects
const { sat, ...weekdays } = restaurant.openingHours;

// 2. Functions
const add = function (...numbers) {
  // converts into array
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  return sum;
};

add(2, 3);
add(5, 6, 2, 65, 6, 2);
const x = [2, 3, 4, 5, 6];
add(...x);
*/
/*
/////////////////////////////////////
// Spread Operator
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2+ arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Iterables: arrays, strings, maps, sets. NOT Objects
const str = 'Oliver';
const letters = [...str, ' ', 'C'];

const ingredients = [
  prompt("Let's make pasta: Ingredient 1?"),
  prompt("Let's make pasta: Ingredient 2?"),
  prompt("Let's make pasta: Ingredient 3?"),
];

restaurant.orderPaste(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe'}
*/
/*
/////////////////////////////////////
// Destructuring Objects
const { name, openingHours, categories } = restaurant;

// Alias
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;

// Mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // () needed

// Nested Objects
const {
  fri: { open, close },
} = openingHours;

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sol, 21',
  starterIndex: 2,
  mainIndex: 2,
});
*/
/*
/////////////////////////////////////
// Destructuring Arrays

const [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
[main, secondary] = [secondary, main];

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];

const [i, j, [q, k]] = nested;
console.log(i, j, q, k);

// Default values
const [p = 1, r = 1, t = 1] = [8, 9];
console.log(p, r, t);
*/
