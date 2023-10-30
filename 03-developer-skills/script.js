// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*/
const temperatures1 = [3, -2, -8, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [-5, -2, -4, -1, 32, 14, 9, 5];

const calAmplitude = (temps1, temps2) => {
  const temps = [...temps1, ...temps2];
  let maxTemp = -Infinity;
  let minTemp = Infinity;

  for (let i = 0; i < temps.length; i++) {
    // console.log(temps[i], typeof temps[i], maxTemp, minTemp);
    if (typeof temps[i] !== 'number') continue;

    if (temps[i] > maxTemp) maxTemp = temps[i];

    if (temps[i] < minTemp) minTemp = temps[i];
  }

  return maxTemp - minTemp;
};

const amplitude = calAmplitude(temperatures1, temperatures2);
console.log(amplitude);
*/
const maxTemps = [17, 21, 23];

const printForecast = (temps) => {
  let str = '...';
  for (let i = 0; i < temps.length; i++) {
    str += ` ${temps[i]}°C in ${i + 1} day${i === 0 ? '' : 's'} ...`;
  }
  return str;
};

console.log(printForecast(maxTemps));
