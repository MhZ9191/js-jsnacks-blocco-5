const posts = [
  { author: "Marco", date: "12/3/2021", content: "lorem ipsum..." },
  { author: "Luca", date: "30/6/2021", content: "lorem ipsum..." },
  { author: "Fabrizio", date: "12/9/2020", content: "lorem ipsum..." },
  { author: "Enrico", date: "09/12/2021", content: "lorem ipsum..." },
];

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

//!
const newArray = posts.map((element) => {
  const currentElement = element;
  return currentElement.author;
});
console.table(newArray);

//!
const newArrayTwo = posts.map((element) => element.author);
console.table(newArrayTwo);

//!
const newArrayThree = posts.map((element) => {
  const { author } = element;
  return author;
});
console.table(newArrayThree);

//!
const newArrayFour = posts.map(({ author }) => author);
console.table(newArrayFour);

//!
const newArrayFive = [];
posts.forEach(({ author }) => newArrayFive.push(author));
console.table(newArrayFive);
