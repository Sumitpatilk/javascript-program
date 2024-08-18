console.log("================== The length or total no of char. ================================");
let str1 = "Hello world!";
console.log(`The length of the string ${str1} is: ${str1.length}`);

let str2 = "Javascript is the language of Internet";
console.log(`The length of the string ${str2} is: ${str2.length}`);

console.log("===================== Print or log the last CharacterData. ===========================");
function getLastChar(str) {
     return str.charAt(str.length-1);
}

let str3 = "Hey, my friend, Programming Language";
let str4 = "I am learning logical programing";
let str5 = "Angular";

console.log(`The last character of the string ${str3} is: ${getLastChar(str3)}`);
console.log(`The last character of the string ${str4} is: ${getLastChar(str4)}`);
console.log(`The last character of the string ${str5} is: ${getLastChar(str5)}`);

console.log("======================== Print or log the first character==============================");
function getFirstChar(str) {
    return str.charAt(0);
}

let str6 = "React";
let str7 = "Elon Musk";
let str8 = "Apple Founder is Stew Job";

console.log(`The first character of the string ${str6} is: ${getFirstChar(str6)}`);
console.log(`The first character of the string ${str7} is: ${getFirstChar(str7)}`);
console.log(`The first character of the string ${str8} is: ${getFirstChar(str8)}`);

console.log("========================== string contains word UI or not ===========================");
function contains(string) {
    return string.includes('UI');
}

let string1 = "React - UI Developer";
let string2 = "UI Developer";
let string3 = "Front end and Backend technologies";

console.log(`Does the string ${string1} contains 'UI'? ${contains(string1)}`);
console.log(`Does the string ${string2} contains 'UI'? ${contains(string2)}`);
console.log(`Does the string ${string3} contains 'UI'? ${contains(string3)}`);

console.log("============================= split string into array of substring ===================");
function splitString(string) {
    return string.split(",");
}

let string4 = "apple,orange,banana";
let string5 = "Stew,Bill,Jenny,Elon";

let result1 = splitString(string4, ",")
console.log(`The array of substring from ${string4} is: `, result1);
let result2 = splitString(string5, ",")
console.log(`The array of substring from ${string5} is: `, result2);

console.log("============================== Predefined method =====================================");
function reverseStringMethod(string) {
    return string.split('').reverse().join('');
}

let string6 = "Software";
let string7 = "UI Developer";

console.log(`The reverse of the string method ${string6} is: ${reverseStringMethod(string6)}`);
console.log(`The reverse of the string method ${string7} is: ${reverseStringMethod(string7)}`);

console.log("================================ Without predefined method ===========================");
function reverseStringMethod(string) {
    let reversestring = '';
    for (let i = string.length-1;  i >=0; i--) {
        reversestring += string[i];
    }
    return reversestring;
}

let string8 = "Web Developer";
let string9 = "Billion Dollar";
let string10 = "Java";

console.log(`The reverse string ${string8} is: ${reverseStringMethod(string8)}`);
console.log(`The reverse string ${string9} is: ${reverseStringMethod(string9)}`);
console.log(`The reverse string ${string10} is: ${reverseStringMethod(string10)}`);
console.log("========================================================================================");


