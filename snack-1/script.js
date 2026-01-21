const names = ["Edoardo", "Simone", "Francesco"];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

//!
names.forEach((element) => {
  const currentElement = element;
  console.log(currentElement);
});

//!
names.forEach((element) => {
  console.log(element);
});

//!
names.forEach((element) => console.log(element));
