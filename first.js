// myadd() that can take 0 to n arguments
// ... REST operator
function myadd(...params) {
  // rest operator is bundling all the passed inputs into a new array
  // console.log(params) // array
  let sum = 0; // let defines the variable in the block scope {}
  for (let i = 0; i < params.length; i++) {
    sum = sum + params[i];
  }

  return sum;
}

/* function myadd(a, b, ...params) {
  // rest operator is bundling all the passed inputs into a new array
  console.log(a)
  console.log(b)
  console.log(params) // array
} */

console.log(myadd());
console.log(myadd(5, 6));
console.log(myadd(5, 4, 3, 6, 7));


function perimeterRectangle(length, breadth) {
  return 2 * (length + breadth);
}

stats = [6, 3];
// console.log(perimeterRectangle(stats[0], stats[1]));

// spread operator
// is very much like the REST operator, but is used during the function call
console.log(perimeterRectangle(...stats));

const cars = ['Audi', 'Mercedes', 'Bmw'];
// const is very much like let
// scope is the block scoped {} or the entire file
// but a const variable cannot be reassigned further in the program
// cars = 89; // this is not allowed

// create a clone of cars array
const clonedCars = [...cars];

console.log(cars);
console.log(clonedCars);
console.log(cars === clonedCars);


const employee = {
  id: 1,
  name: 'mehul',
  gender: 'm'
};
const newEmployee = {...employee};

console.log(employee);
console.log(newEmployee);
console.log(employee === newEmployee);

function areaRectangle({ length, breadth }) {
  // const { length, breadth } = props;
  return length * breadth;
}

// console.log(areaRectangle(4, 3.9));
console.log(areaRectangle({ length: 4, breadth: 3.9 }));
console.log(areaRectangle({ breadth: 3.9, length: 4 }));