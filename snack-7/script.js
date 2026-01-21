const students = [
  {
    id: 1,
    name: "Marco Lanci",
    age: 32,
    class: "3C",
  },
  {
    id: 2,
    name: "Mario Banfi",
    age: 34,
    class: "4A",
  },
  {
    id: 3,
    name: "Luigi Banzi",
    age: 33,
    class: "5B",
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

//!
let studentIdTwo;
students.forEach((element) => {
  const { id } = element;
  if (id === 2) studentIdTwo = element;
});
console.log(studentIdTwo);

//!
const studenteIdDue = students.find(({ id }) => id === 2);
console.log(studenteIdDue);
