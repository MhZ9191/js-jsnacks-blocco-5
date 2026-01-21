const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

//!
const newArray = numbers.map((element) => {
  currentElement = element + 1;
  return currentElement;
});
console.table(newArray);

//!
const newArrayTwo = numbers.map((element) => (element += 1));
console.table(newArrayTwo);

//!
const newArrayThree = numbers.map((element) => ++element);
console.table(newArrayThree);

//!
const newArrayFour = [];
numbers.forEach((element) => newArrayFour.push(++element));
console.table(newArrayFour);

//!
function increment(numb) {
  return ++numb;
}
const newArrayFive = numbers.map((element) => increment(element));
console.table(newArrayFive);
