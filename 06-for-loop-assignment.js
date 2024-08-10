
console.log(`======= Print numbers increament by 5 to 15 ==========`);
for (let index = 5; index <= 15; index=index+1) {
    console.log(index);
}

console.log(`======= Print numbers decrement by 50 to 40 ==========`);
for (let index = 50; index >=40; index=index-1) {
    console.log(index);
}
  
console.log(`======= Print even numbers from 0 to 10 ==========`);
for (let index = 0; index <= 20; index=index+2) {
    console.log(index);
}

console.log(`======= Print the table of 5 ==========`);
for (let index = 5; index <= 50; index=index+5) {
    console.log(index);
}

console.log(`======= Print the table of 10 ==========`);
for (let index = 10; index <= 100; index=index+10) {
    console.log(index);
}

console.log(`======= Print the table of 10 in reverse order ==========`);
for (let index = 100; index >= 10; index=index-10) {
    console.log(index);  
}

console.log(`======= Print odd numbers from 0 to 30 ==========`);
for (let index = 1; index <= 30; index++) {
    if (index % 2 !== 0) {
        console.log(index);
    }
}