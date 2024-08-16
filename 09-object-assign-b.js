
console.log("===================================== SBI Bank =====================================================");
const sbiBank = {
      bankName:"SBI",
      location:"Nimbhora",
      accountNo:"33452278154",
      ifsc:"SBIN8810",
      interestRate:"10.24",

      showDeatils:function(){
      console.log(`Bank Name: ${this.bankName}, location: ${this.location}, AccountNo: ${this.accountNo}, IFSC: ${this.ifsc}, Iterestrate: ${this.interestRate}`);
      }
}
sbiBank.showDeatils();

console.log("===================================== Axis Bank =====================================================");

const axisBank = {
    bankName:"Axis",
    location:"Raver",
    accountNo:"52346285215",
    ifsc:"AXIS00048",
    interestRate:"9.45",
    
    showDeatils:function(){
    console.log(`Bank Name: ${this.bankName}, location: ${this.location}, AccountNo: ${this.accountNo}, IFSC: ${this.ifsc}, Iterestrate: ${this.interestRate}`);
    }
}
axisBank.showDeatils();


console.log("===================================== HDFC Bank =====================================================");

const hdfcBank = {
    bankName:"HDFC",
    location:"Raver",
    accountNo:"25456285127",
    ifsc:"HDFC0085",
    interestRate:"8.46",
    
    showDeatils:function(){
    console.log(`Bank Name: ${this.bankName}, location: ${this.location}, AccountNo: ${this.accountNo}, IFSC: ${this.ifsc}, Iterestrate: ${this.interestRate}`);
    }
}
hdfcBank.showDeatils();


console.log("===================================== yes Bank =====================================================");

const yesBank = {
    bankName:"YES",
    location:"Jalgaon",
    accountNo:"11257865435",
    ifsc:"YES0045",
    interestRate:"8.45",
    
    showDeatils:function(){
    console.log(`Bank Name: ${this.bankName}, location: ${this.location}, AccountNo: ${this.accountNo}, IFSC: ${this.ifsc}, Iterestrate: ${this.interestRate}`);
    }
}
yesBank.showDeatils();