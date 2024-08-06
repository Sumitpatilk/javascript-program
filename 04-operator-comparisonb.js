console.log("============================1===========================");

// 1.1. Function to find the greatest number amongst two numbers
function greaterNumber(num1, num2) {
    var result = num1 > num2 ? num1 : num2;
    console.log(`Given number are ${num1} , ${num2} and greater number is = ${result}`);
  }
  greaterNumber(10, -10);
  greaterNumber(800, 899);
//   console.log("Greater number:", greaterNumber(10, -10)); // Output: 10
//   console.log("Greater number:", greaterNumber(800, 899));
  console.log("============================2===========================");

  // 2.1. Function to determine if a number is even or odd
  function isEvenOrOddNum(num) {
    return num % 2 === 0 ? true : false;
  }
  console.log('Is number "29" is even = ', isEvenOrOddNum(29)); // Output: false
  console.log('Is number "44" is even = ', isEvenOrOddNum(44));
  console.log('Is number "0" is even  =', isEvenOrOddNum(0));
  console.log('Is number "101" is even =', isEvenOrOddNum(101));

  console.log("============================3===========================");

  // 3.1. Function to determine if a word has an even or odd length
  function wordLength(word) {
    return word.length % 2 === 0 ? "EVEN" : "ODD";
 
  }
  console.log(' javascript has length', wordLength("JavaScript")); // Output: ODD
  console.log(' developer has length', wordLength("developer"));
  console.log(' Google has length', wordLength("Google"));