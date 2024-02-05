const a = [1, 2, 3];
const b = [1, 2, 3];
const c = '1,2,3';

console.log(a == c);
console.log(a == b);

const sum = (a, b) => {
  console.log(a + b);
  return a + b;
};

setTimeout(() => {
  console.log('world');
}, 500);
console.log('hello');

// Function declaration - No error; logs "hello"
myFunction();
function myFunction() {
  console.log('hello');
}

// Function expression - Error: `myFunction` is not a function
myFunction();
var myFunction = function () {
  console.log('hello');
};

function isArraySorted(array) {
  // Your code here
}

console.log(isArraySorted([-2, -4, 9, 0, 12, 13, 15, 14])); // false
console.log(isArraySorted([-2, -1, 0, 1, 3, 5, 6, 9, 23])); // true