const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ];

// 1. Reverse the array
console.log("1. Reverse the array: ", arrayRollNumbers.reverse());
console.log("=======================================================");
// 2. Use the sort() method as it is without any custom sorting logic (Without passing any arguments) & notice the issue
console.log("2. Use the sort() method: ", arrayRollNumbers.sort()); // The sort() method sorts the array alphabetically, not numerically.
console.log("=======================================================");
// 3. Sort the array in ascending order, by writing your custom logic
console.log("3. Sort the array in ascending order: ", arrayRollNumbers.sort((a, b) => a - b));
console.log("=======================================================");
// 4. Find the Greatest number from the array
console.log("4. Find the Greatest number: ", Math.max(...arrayRollNumbers));
console.log("=======================================================");
// 5. Find the smallest number from the array
console.log("5. Find the smallest number: ", Math.min(...arrayRollNumbers));
console.log("=======================================================");
// 6. Remove duplicates from array
const uniqueArray = [...new Set(arrayRollNumbers)];
console.log("6. Remove duplicates from array: ", uniqueArray);
console.log("=======================================================");