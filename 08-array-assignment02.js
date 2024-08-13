
console.log("===================== 1 ========================");
let arrayNumberone = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log("Total element available = ",arrayNumberone.length);

console.log("===================== 2 ========================");

let arrayNumbertwo = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log("First element = ",arrayNumbertwo[0]);
console.log("Last element = ",arrayNumbertwo[arrayNumbertwo.length-1]);

console.log("====================== 3 =======================");

let arrayNumberthree = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log("The third last element = ",arrayNumberthree[arrayNumberthree.length-3]);
console.log("====================== 4 =======================");

let arrayNumberfour = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
for (const element of arrayNumberfour) {
     if (element%2==0) {
        console.log("Even number is given array=  ",element);
     }
}
console.log("======================== 5 =====================");

let arrayNumberfive = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
for (const element of arrayNumberfive) {
    if (element%2==1) {
       console.log("Odd number is given array = ",element);
    }
}
console.log("========================= 6 ====================");

let arrayNumbersix = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
for (const element of arrayNumbersix) {
    if (element%5==0) {
       console.log("Multiple of 5 in given array = ",element);
    }
}
console.log("========================= 7 ====================");

let arrayNumberseven = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
arrayNumberseven = arrayNumberseven.includes(115);
console.log("Number 115 is available in array = ",arrayNumberseven);

console.log("========================== 8 ===================");

let arrayNumbereight = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
arrayNumbereight = arrayNumbereight.includes(23);
console.log("Number 23 is available inn array = ",arrayNumbereight);
console.log("========================== 9 ==================");

let arrayNumbernine = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbernine);
arrayNumbernine.splice(3,0,55,66);
console.log("After inserting 55 & 66 index 3 = ",arrayNumbernine);

console.log("========================= 10 ===================");

let arrayNumberten = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumberten);
arrayNumberten.splice(4,3);
console.log(" Deleting 3 element starting from index 4 = ",arrayNumberten);
console.log("=============================================");

