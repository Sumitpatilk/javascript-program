
function checkEligibility(gradScore, hscScore, sscScore, candidateName) {
    if (gradScore >= 70 || hscScore >= 80 || sscScore >= 90) {
      console.log(`Congrates ${candidateName}, you are eligible for TCS interview.`);
    } else {
      console.log(`Unfortunately you are not eligible for interview`);
    }
  }
  
  checkEligibility(80, 86, 90, "sumit");
  checkEligibility(70, 65, 55, "vipul");
  checkEligibility(60, 79, 88, "yogesh");
   