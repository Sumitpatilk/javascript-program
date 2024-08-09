
var voteEligibility = function (age) {
    if (age==0 || age< 0 || age>130) {
        console.log(`Ivalid data: ${age}`);   
    } else {
        console.log(`valid data: ${age}`);
        if (age>=18) {
            console.log(`You are Eligible for voting`);
            } else {
            console.log(`you are not eligible`);
            
        }
    }  
}
voteEligibility(45);
console.log("--------------------------------------");
voteEligibility(17);
console.log("--------------------------------------");
voteEligibility(8);
console.log("--------------------------------------");
voteEligibility(20);
console.log("--------------------------------------");
voteEligibility(-10);
console.log("--------------------------------------");
voteEligibility(200);
console.log("--------------------------------------");
voteEligibility(0);
console.log("--------------------------------------");
voteEligibility(null);
