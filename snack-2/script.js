const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

//!
people.forEach((element) => {
  const currentEl = element;
  const currentName = currentEl.name;
  console.log(currentName);
});

//!
people.forEach((element) => console.log(element.name));

//!
people.forEach((element) => {
  const { name } = element;
  console.log(name);
});

//!
people.forEach(({ name }) => console.log(name));

//!
people.forEach((element) => {
  const { name } = element;
  const currentEl = { name };
  console.log(currentEl.name);
});

//! map
const newArray = people.map(({ name }) => ({ name }));
newArray.forEach((element) => console.log(element.name));
