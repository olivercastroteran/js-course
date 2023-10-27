////////////////////////////////////////////////
// Challange 05
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (teamA, scoreA, teamB, scoreB) {
  if (scoreA >= scoreB * 2) {
    console.log(`${teamA} win (${scoreA} vs. ${scoreB})`);
  } else if (scoreA * 2 <= scoreB) {
    console.log(`${teamB} win (${scoreB} vs. ${scoreA})`);
  } else {
    console.log('No team wins');
  }
  return;
};

checkWinner('Dolphins', scoreDolphins, 'Koalas', scoreKoalas);
*/
////////////////////////////////////////////////
// Challange 06
/*
const bills = [125, 555, 44];
const tips = []

function calcTip2(bills) {
    bills.forEach((bill, i) => {
        const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
        tips.push(tip)
    })
    return
}

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2

calcTip2(bills)
console.log(tips)
*/
////////////////////////////////////////////////
// Challange 07
/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
      this.bmi = this.mass / (this.height * this.height)
      return this.bmi
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
      this.bmi = this.mass / (this.height * this.height)
      return this.bmi
  }
}

mark.calcBMI();
john.calcBMI()

if (mark.bmi > john.bmi) {
  console.log(`Mark Miller's BMI (${mark.bmi}) is higher than John Smith's (${john.bmi})!`)
} else {
  console.log(`John Smith's BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!`)
}
*/
////////////////////////////////////////////////
// Challange 08
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i]
}

console.log(tips)
console.log(totals)

function calcAverage(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total / arr.length
} 

console.log(calcAverage(totals))
*/
