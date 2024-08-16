const professor = {
    firstName: "Amit",
    lastName: "Mahajan",
    age: 24,
    city:"Jalgaon",
    collegeName:"KCE College Of Jalgaon",
    certificates:['Hacker Rank Participation','Cerrtification in IFE course','Certificate in Adv computing'],
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing",
        Master :"Master of Science",
        Professional:"Law",
        Doctor:"MBBS"
    }
}
console.log(professor);

console.log("====================== Add new property ==============================================");
// Logging the object
professor.totalExperinces = 14 ;
console.log(`TotalExperinces: ${professor.totalExperinces}`);
console.log("========================== Modify the property ==========================================");
//modify any property and log on console
professor.age = 55;
console.log(`Updated age: ${professor.age}`);
console.log(professor);
console.log("=========================== Add new certificate =========================================");
// Adding a new certificate
professor.certificates.splice(2,0,"Oracle Certificate")
console.log(professor);   // Logging the object again
console.log("=============================== Last certificate =====================================");
// Logging the last element of the certificates array
console.log(professor.certificates[professor.certificates.length - 1]);
console.log("======================== traverse the array for loop ============================================");
// Traversing the certificates array using a for loop

for (let i = 0; i < professor.certificates.length; i++) {

    console.log(professor.certificates[i]);
  }
  console.log("========================== Log the complete object ==========================================");
  // Logging the complete object using a for in loop

for (const key in professor) {

    console.log(`${key}: ${professor[key]}`);
  
  }
  console.log("====================================================================");