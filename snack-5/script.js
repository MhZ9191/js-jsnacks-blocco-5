const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

//!
const numsEven = nums.filter((element) => {
  const currentEl = element;
  return element % 2 === 0;
});
console.table(numsEven);

//!
const numsEvenTwo = nums.filter((element) => element % 2 === 0);
console.table(numsEvenTwo);

//!
const numsEvenThree = [];
nums.forEach((element) => {
  if (element % 2 == 0) numsEvenThree.push(element);
});
console.table(numsEvenThree);

//!
function verifyEven(num) {
  return num % 2 === 0;
}
const numsEvenFour = nums.filter((element) => verifyEven(element));
console.table(numsEvenFour);
