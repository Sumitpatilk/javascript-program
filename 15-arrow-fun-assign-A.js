console.log("==========================================");

// Arrow function with no arguments and no return value
let show = ()=>{
    console.log('Good Morning, Today is Monday');  
}
show();
console.log("============================================");

// Arrow function with arguments and no return value
let Multiplication = (n1, n2,n3=1)=>{
    console.log(`Multiplication is : ${n1*n2*n3}`);  
}
Multiplication(5,5,2);
console.log("============================================");
Multiplication(10,4);

console.log("============================================");

// Arrow function with arguments and return value
let addition = (n1, n2,n3,n4,n5)=>{
    let result = n1+n2+n3+n4+n5;
    return result;
}
let add = addition(100,100,200,349,756);
console.log(`addition is: ${add}`);
console.log("===========================================");

let addone = (n1, n2,n3,n4,n5)=>{
    let result = n1+n2+n3+n4+n5;
    return result;
}
let addtwo = addition("I am"," learning"," ES6"," features"," in depth");
console.log(`addition is: ${addtwo}`);

