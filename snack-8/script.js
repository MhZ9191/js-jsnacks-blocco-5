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

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

//!
let myObj;
students.forEach((element) => {
  const { name } = element;
  if (name === "Marco Lanci") myObj = element;
});
console.log(myObj.class);

//!
const marcoLanci = students.find(({ name }) => name === "Marco Lanci");
console.log(marcoLanci.class);

const { class: studentClass } = marcoLanci;
console.log(studentClass);

const myClass = marcoLanci?.class;
console.log(myClass);
