// Generator functions

// internal part (function itself)
function* fun() {
  console.log('good morning');
  console.log('good evening');
  return 6;
}


// outside party (who calls the function)
const handle = fun();
// console.log(handle);

// control shifts to the outside party
let a = handle.next();
// console.log(a);


function* hello(a, b) {
  const c = yield a * b; // async call 1
  const d = yield a + b; // async call 2
  return d;
}



// outside library
const handle2 = hello(4,7);
a = handle2.next();
console.log(a.value);

if (a.value < 20) {
  console.log('inside if');
  a = handle2.next();
  console.log(a);

  a = handle2.next();
  console.log(a);
} else {
  console.log('else');
}