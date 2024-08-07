
function interviewCheck(gradScore,hscScore, sscScore, candidateName) {
    var result = gradScore>=70 || hscScore>=80 || sscScore>=90 ?
    "you are eligible tcs interview :" : "You are not eligible";
    console.log(result);
    
}
 interviewCheck(80,86,90,"sumit");
 console.log("===============================");
 interviewCheck(70,65,55,"amit");
 console.log("===============================");
 interviewCheck(60,79,88,"vipul");