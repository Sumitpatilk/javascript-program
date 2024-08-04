console.log("============= step1 ===============");
var stringBasics=' Hey you are doing good, keep it up ';
console.log("The given String IS : ",stringBasics);

console.log("============= step2 ===============");
console.log("The length of string: ",stringBasics.length);

console.log("============= step3 ===============");
var trimmedstringBasic = stringBasics.trim();
console.log("string after timing:", trimmedstringBasic, "lenght=",trimmedstringBasic.length);

console.log("============step4====================");
var extraspacecount = stringBasics.length -trimmedstringBasic.length;
console.log("total extra spaces removed:",extraspacecount);

console.log("============step5====================");
var firstname = trimmedstringBasic.charAt(0);
var lastname = trimmedstringBasic.charAt(trimmedstringBasic.length-1);
console.log("first name triming :",firstname);
console.log("last name triming: ",lastname);


console.log("============step6====================");
var words = trimmedstringBasic.split(" ");
var wordcount = words.length;
console.log("total words in string:",wordcount);

console.log("============step7====================");
var goodindex = trimmedstringBasic.indexOf("good");
console.log("index of good :",goodindex);

console.log("============step8====================");
var substring = trimmedstringBasic.substring(22);
console.log("substring starting from index 22",substring);

console.log("============step9====================");
var endWithUp = trimmedstringBasic.endsWith("up");
console.log("string ends with up: ",endWithUp);

console.log("============step10====================");
var startWithHey = trimmedstringBasic.startsWith("Hey");
console.log("string starts with hey:", startWithHey);







