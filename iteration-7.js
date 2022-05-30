//7.1
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const notas = exams.reduce((suma, exam) => suma + exam.score, 0);
console.log(notas);

//7.2
const result = exams.reduce((acc, person) =>
  person.score >= 5 ? acc + person.score : acc, 0
);

console.log(result);

//7.3
const total = exams.reduce((acc, exam) => acc + exam.score ,0);
const media = total/exams.length;

console.log(media);
