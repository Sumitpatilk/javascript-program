
let arrayNumber0ne = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let Sum = 0;
for (let index = 0; index < arrayNumber0ne.length; index++) {
    if (index%2==0) {
      const element = arrayNumber0ne[index];
      Sum = Sum + element;
    }
}
console.log("sum of all even numbers are = ",Sum);

console.log("====================================================");


let arrayNumbertwo = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let oddNum = 0;
for (let index = 0; index < arrayNumbertwo.length; index++) {
    if (index%2==1) {
      const element = arrayNumbertwo[index];
      oddNum = oddNum + element;
    }
}
console.log("sum of all odd numbers are  = ",oddNum);

console.log("=================================================");

let arrayNumberthree = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let addition = 0;
for (const element of arrayNumberthree) {
    addition = addition + element;
}
console.log("sum of all numbers of array = ",addition);
