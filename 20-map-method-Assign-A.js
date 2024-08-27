const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];

//1. Add 10 into each element and log new array result on console
const addTen = arrayNumbers.map((num) => {
  return num + 10;
});

console.log("Add 10 to each element:", addTen);
console.log("============================================================");

//2. Cube the each array element and log on console
const cubeArray = arrayNumbers.map((num) => {
  return num * num * num;
});

console.log("Cube each element:", cubeArray);
console.log("============================================================");

//3. Add the index value into its corresponding each array element and log new array result on console
const addIndex = arrayNumbers.map((num, index) => {
  return num + index;
});

console.log("Add index to each element:", addIndex);