const stats = [5, 4];

// destructure elements of an array into separate variables
// const length = stats[0];
// const breadth = stats[1];

// const [length, breadth] = stats;
// console.log(length);
// console.log(breadth);

// const [, breadth] = stats;
// console.log(breadth);

const stats2 = [6];

const [length, breadth=2] = stats2;
console.log(length); // 6
console.log(breadth); // 2

// Object destructuring
const employee = {
  id: 1,
  name: 'mehul',
  gender: 'm',
  address: {
    city: 'mumbai',
    country: 'india'
  }
};

// const id = employee.id;
// const gender = employee.gender;

const {id, gender, name: empName, address: {city, country}} = employee;

console.log(id, gender, empName, city, country);


const name = 'mehul';
const gen = 'm';
const roll = 10;

// shorthand objece literal syntax of es6
const student = {
  name,
  gen,
  roll 
};

console.log(student);