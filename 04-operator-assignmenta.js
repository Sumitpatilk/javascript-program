console.log("=====================1=====================");

function squareOfWordLength(sentence){
    console.log(`Given sentence is: ${sentence}`);
    var result = sentence.split(" ");
    var len = result.length;
    var square = len * len;
    return square;
}
var result = squareOfWordLength("JavaScript");
console.log(`Square of world length is: ${result}`);

var result = squareOfWordLength("Google Chrome");
console.log(`Square of world length is: ${result}`);

var result = squareOfWordLength("Web Developer Smart");
console.log(`Square of world length is: ${result}`);

console.log("=====================2=====================");

function sentencelengthandword(){
    var string ="i am Angular Developer";
    var sentence = string.split(" ");
    var length = string.length;
    console.log(`The number of words in the string "I am Angular Developer" is ${sentence.length}`);
  console.log(`The length of the string divided by the number of words is ${length / sentence.length}`);
  console.log(`The length of the string multiplied by the number of words is ${length * sentence.length}`);

}
   sentencelengthandword();