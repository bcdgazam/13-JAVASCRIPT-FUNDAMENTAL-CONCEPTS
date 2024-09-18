//24-6 Apply map, filter, find on an array of objects

const students = [
    {id: 16, name: 'Programmer'},
    {id: 20, name: 'Hyper Text'},
    {id: 30, name: 'Cascading'},
    {id: 40, name: 'TailWind'},
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 20)
const biggerOne = students.find(s => s.id > 20)
console.log(biggerOne);


//I have to try it by for loop "bangla system";