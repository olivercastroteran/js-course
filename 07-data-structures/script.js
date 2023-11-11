'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDevlivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, $[ing2] and ${ing3}`
    );
  },
};

restaurant.orderDevlivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
/*
const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // 2 3 4

//const [first, second] = restaurant.categories; // Italian Pizzeria
const [first, , second] = restaurant.categories; // Italian Vegetarian

//let [main, secondary] = restaurant.categories;
// switch variables
[main, secondary] = [secondary, main];

const [starter, main] = restaurant.order(2, 0); // [Garlic Bread, Pizza] => Garlic Bread Pizza

const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested; // 2 5 6

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 undefined // 8 9 1
*/
/*
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
  menu = [],
  starterMenu: starters = [],
} = restaurant;

const {
  fri: { open, close },
} = openingHours;

const arr = [7, 8, 9];
const newArr = [1, 2, 3, ...arr]; // merges arr into newArr => [1,2,3,7,8,9]

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // makes new array from scratch

// copy
const mainMenuCopy = [...restaurant.mainMenu];
// Merge arrs
const menu2 = [...restaurant.starterMenu, restaurant.mainMenu];

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

restaurant.orderPasta(...ingredients);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giussepe' };
// Only 1st level copy
const restCopy = { ...restaurant };
*/
/*
const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const { sat, ...wekDays } = restaurant.openingHours;

const add = function (...numbers) {
  let sum = 0;
  numbers.forEach(num => (sum += num));
  return sum;
};

console.log(add(2, 3));
console.log(add(5, 6, 7, 2));
console.log(add(8, 2, 5, 3, 2, 1, 4));

const x = [23, 5, 7];
add(...x);
/*
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

// const [players1, players2] = game.players;

// const [gk1, ...fieldPlayers1] = players1;
// const [gk2, ...fieldPlayers2] = players2;

// const allPlayers = [...players1, ...players2];

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// const { team1, x: draw, team2 } = game.odds;

// const printGoals = (...players) => {
//   console.log(`${players.length} goals were scored`);
// };

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

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
const odds = Object.values(game.odds);
for (const odd of odds) {
  sum += odd;
}
console.log(sum / odds.length);

for (const [team, odd] of Object.entries(game.odds)) {
  const str = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${str}: ${odd}`);
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
///////////////////////////////////////////////////////
// Sets

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet); // {"Pasta", "Pizza", "Risoto"}
ordersSet.size; // 3
ordersSet.has('Pizza'); // true
ordersSet.has('Bread'); // false
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread'); // {"Pasta", "Pizza", "Risoto", "Garlic Bread"}
ordersSet.delete('Risotto');
ordersSet.clear();

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];

///////////////////////////////////////////////////////
// Maps

const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal'); // set method return the actual Map
// we can change the set method
rest
  .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are copen :D')
  .set(false, 'We are close :(');

rest.get('name'); // Classico Italiano
rest.get(true); // We are copen :D
rest.get(1); // Firenze, Italy

const time = 21;
rest.get(time > rest.get('open') && time < rest.get('close')); // We are copen :D

rest.has('Categories'); // true
rest.size; // 7

const arr = [1, 2];
rest.set(arr, 'Test');

rest.get([1, 2]); // Undefined
rest.get(arr); // Test

///////////////////////////////////////////////////
// Working with Strings

const airline = 'TAP Air Portugal';
const plane = 'A320';

plane[0]; // A
'B737'[0]; // B

airline.length; // 16
'B737'.length; // 4

airline.indexOf('r'); // 6
airline.lastIndexOf('r'); // 10

airline.indexOf('Portugal'); // 8
airline.indexOf('portugal'); // -1

airline.slice(4); // Air Portugal

///////////////////////////////////////////////////
// Coding Challenge
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// Data needed for a later exercise
const flights = `
  _Delayed_Departure;fao93766109;txl2133758440;11:25
  +_Arrival;bru0943384722;fao93766109;11:45
  +_Delayed_Arrival;hel7439299980;fao93766109;12:05
  +_Departure;fao93766109;lis2323639855;12:30
`;

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} FROM ${getCode(from)} TO ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(40);

  console.log(output);
}
