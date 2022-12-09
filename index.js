//Compare Scopes of the var and let Keywords
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
//Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
//Prevent Object Mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line
  Object.freeze(freezeObj);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 3.14;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
//Arrow Function
const magic = () => {
  return new Date();
};
//Arrow Functions with Parameters
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
//Set Default Parameters for Your Functions
const increment = (number = 1, value = 1) => number + value;
//Rest Parameter with Function Parameters
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
//Spread Operator to Evaluate Arrays In-Place
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
arr2 = [...arr1];
console.log(arr2);
//Destructuring Assignment to Extract Values from Objects
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80,
// };
// const { today, tomorrow } = HIGH_TEMPERATURES;
//Destructuring Assignment to Assign Variables from Objects
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80,
// };
// const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
//Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};
const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;
//Use Destructuring Assignment to
let a = 8,
  b = 6;
[a, b] = [b, a];
console.log(a, b);
//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
function removeFirstTwo(list) {
  const [, , ...shorterList] = list; // Change this line
  return shorterList;
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
