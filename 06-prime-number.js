// function isPrime(num){
//     for (let index = 2; index < num; index++) {
//         if(num%index==0){
//             return false;
//         } 
//     }
//    return true; 
// }
// var result = isPrime(4);
// console.log(`Is number 4 Prime - ${result}`);

// var result = isPrime(5);
// console.log(`Is number 5 Prime - ${result}`);

console.log("==================================================================");

// 06-prime-number-count.js

// const array = [3, 9, 7, 6, 19, 29, 53];

// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i * i <= num; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// let primeCount = 0;
// for (let num of array) {
//   if (isPrime(num)) primeCount++;
// }

// console.log(`There are ${primeCount} prime numbers in the array.`);
// console.log("===========================================================");

// function spaceCount(str) {
//     return str.split(" ").length - 1;
//   }
//   function spaceCount(str) {
//     return (str.match(/\s/g) || []).length;
//   }
// console.log(spaceCount(`Revision is the mother of success `));
// console.log(spaceCount(`JavaScript is the language of internet world`));

const array = [3, 9, 7, 6, 19, 29, 53];
let count = 0;

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

for (const element of array) {
  const result = isPrime(element);
  if (result === true) {
    count++;
  }
}

console.log(`The total count of prime no in array [3, 9, 7, 6, 19, 29, 53] is : ${count}`);

console.log("======================================================");
// Function to count the total number of spaces in a string
function spaceCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      count++;
    }
  }
  return count;
}

console.log(spaceCount("Revision is the mother of success")); // Output: 5
console.log(spaceCount("JavaScript is the language of internet world")); // Output: 6
