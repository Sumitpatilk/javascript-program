var word = "I am very good IT Developer";
var count = 0;
var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index);
    if (vowels.includes(char)) {
        count++;
    }
    
}
console.log("count of the vowels is :", count);

console.log("===========================================================");

function sumOfCubes(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i * i * i;
    }
    return sum;
  }
  let result = sumOfCubes(5);
  console.log("Sum of cubes from 1 to 5: " + result);

  console.log("===========================================================");
  
  var string1= "Hard work always pays back";
  var string2 = "Soon I will be UI IT Champ";
  function oddPositionedChars(string1) {
     for (let i = 0; i <= string1.length; i++) {
        var charAt;
        if ( i%2==1 && charAt !==" ") {
           console.log(string1[i]);  
        }
        
     }
  }
  console.log("characters at odd position :",string1);
  oddPositionedChars(string1);
  console.log("===============================================");
  console.log("characters at odd position",string2);
  oddPositionedChars(string2);
