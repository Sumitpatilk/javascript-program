
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];
// 1. Log the array element with it's index using forEach() with arrow function
arrayNumbers.forEach((element, index) => {
  console.log(`Element at index ${index} is ${element}`);
});
console.log("====================================================================");

// 2. Find the positive numbers and log on console
// a. Using forEach() with arrow function
arrayNumbers.forEach(element => {
  if (element > 0) {
    console.log(`Positive Number: ${element}`);
  }
});
console.log("====================================================================");

// 3. Find the negative numbers, add into new array and and log new array on console using arrow function
const negativeNumbers = [];
arrayNumbers.forEach(element => {
  if (element < 0) {
    negativeNumbers.push(element);
  }
});
console.log("Negative Numbers:", negativeNumbers);
console.log("====================================================================");
// 4. Find the even numbers and log on console using forEach() with arrow function
arrayNumbers.forEach(element => {
  if (element % 2 === 0) {
    console.log(`Even Number: ${element}`);
  }
});
console.log("====================================================================");
// 5. Find the sum of all elements from arrayNumbers and log sum value on console.
let sum = 0;
arrayNumbers.forEach(element => {
  sum += element;
});
console.log(`Sum of all elements: ${sum}`);
console.log("====================================================================");
// 6. Log the only even indexed array value on console. forEach() with arrow function prefered
arrayNumbers.forEach((element, index) => {
  if (index % 2 === 0) {
    console.log(`Even Indexed Array Value: ${element}`);
  }
});
