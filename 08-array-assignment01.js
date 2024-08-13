const fruits  = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits);
console.log("First element = ",fruits[0]);
console.log("Last element = ",fruits[fruits.length-1]);

console.log("================== 2 =======================");

const fruitstwo  = ["Papaya","Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Inserting element at the beginning of the array`);
fruitstwo.unshift("Papaya")
console.log("Add element papaya = ",fruitstwo);

console.log("==================== 3 =====================");

const fruitsthree  = ["Papaya","Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruitsthree);
fruitsthree.splice(4,1)
console.log("Remove mango From the array = ",fruitsthree);

console.log("====================== 4 =======================");

const fruitsfour= ["Papaya","Banana","Orange","Apple","Water Melon","Pineapple"];
console.log(fruitsfour);
console.log("insert the element of last position");
fruitsfour.push("pineapple");
console.log("Add and insert an last element in pineapple = ",fruitsfour);

console.log("======================= 5 =======================");
const fruitsfive= ["Papaya","Banana","Orange","Apple","Water Melon","Pineapple"];
console.log(fruitsfive);
fruitsfive.splice(4,0 ,"Dragon Fuit");
console.log("insert the dragon fruit before water melon = ",fruitsfive);

console.log("========================= 6 ==========================");

const fruitssix  = ["Papaya","Banana","Orange","Apple","Dragon Fruit","Water Melon","Pineapple"];
console.log(fruitssix);
fruitssix.splice(1,1,"Kiwi");
console.log("replace element orange with kiwi = ",fruitssix);

console.log("======================== 7 ===========================");

const fruitsseven  = ["Papaya","Banana","Kiwi","Apple","Dragon Fruit","Water Melon","Pineapple"];
console.log(fruitsseven);
const listseven  = fruitsseven.slice(1,4);
console.log("Stating from index 1 to 4 = ",listseven);

console.log("========================== 8 =========================");

const fruitseight  = ["Papaya","Banana","Kiwi","Dragon Fruit","Water Melon","Pineapple"];
console.log(fruitseight);
const deleteCount = fruitseight.splice(3);
console.log("Select 3 element and log on console the length",deleteCount);

console.log("===================================================");

