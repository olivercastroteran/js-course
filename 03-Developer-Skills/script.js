// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/* 
_________ Problem Solving Steps _________

1. Understand the problem
2. Break into smaller problems (Sub-problems)
3. Research
4. Write pseudo-code
*/

// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, 'error', 21, -1, 20, 5];

// 1) Understanding the problem
// Temperature amplitude: difference between highest and lowest temp
// How to get max and min temp
// What is a sensor error and what to do

// 2) Breaking up into sub-problems
// Ignore error
// find max tem
// find min tem
// return amplitude max-min

// 3) Research ☑

// 4) Pseudo-code

const calcTempAmplitude = (...temps) => {
  let maxTemp = -999;
  let minTemp = 999;

  for (const temp of temps) {
    if (typeof temp !== 'number') continue;
    maxTemp = temp > maxTemp ? temp : maxTemp;
    minTemp = temp < minTemp ? temp : minTemp;
  }

  return maxTemp - minTemp;
};

console.log(calcTempAmplitude(...temperatures1, ...temperatures2));

////////////////////////////////
// Coding Challenge 01

const printForecast = (temps) => {
  let str = `...`;

  for (let i = 0; i < temps.length; i++) {
    str += ` ${temps[i]}°C in ${i + 1} ${i === 0 ? 'day' : 'days'} ...`;
  }

  console.log(str);
  return str;
};

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, -4];

printForecast(temps2);
