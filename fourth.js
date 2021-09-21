const marks = [5, 6, 5, 7, 10, 3, 2, 1, 5, 8];

// get a new array from marks array, consisting of only marks >= 5
// const newarray = marks.filter(function (item) { return true/ false}) - array object
/* const marksMorethanEqual5 = marks.filter(function (item) {
  return item >= 5;
}); */

// arrow functions
/* function add (a, b) {
  return a + b;
}
const add = function (a, b) {
  return a + b;
}; */

/* const add = (a, b) => {
  return a + b;
} */

const add = (a, b) => a + b;

const greeting = username => `Good morning ${username}`;

const noInput = () => console.log('Hi');


const marksMorethanEqual5 = marks.filter(item => item >= 5).map(item => item * item);

// const newArray = array.map(function (item) { // transformed item})

console.log(marksMorethanEqual5);