// 1. Create a constructor function with name Bank and add the data members
function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
  }
  
  // 2. Create objects and log the details
  const yesBank = new Bank("Yes Bank", "Mumbai", "YESB0000001", "001");
  const sbiBank = new Bank("State Bank of India", "Delhi", "SBIN0000001", "002");
  const mahBank = new Bank("Bank of Maharashtra", "Pune", "MAHB0000001", "003");
  const axisBank = new Bank("Axis Bank", "Bangalore", "UTIB0000001", "004");
  
  console.log(`Bank Detail Is = ${yesBank.bankName},  LOcation = ${yesBank.location},  IFSC = ${yesBank.ifscCode}, Branch Code =  ${yesBank.branchCode}`);
  console.log(`Bank Detail Is = ${sbiBank.bankName},  LOcation = ${sbiBank.location},  IFSC = ${sbiBank.ifscCode},Branch Code = ${sbiBank.branchCode}`);
  console.log(`Bank Detail Is = ${mahBank.bankName},  LOcation = ${mahBank.location},  IFSC = ${mahBank.ifscCode}, Branch Code = ${mahBank.branchCode}`);
  console.log(`Bank Detail Is = ${axisBank.bankName}, LOcation =  ${axisBank.location}, IFSC = ${axisBank.ifscCode}, Branch Code = ${axisBank.branchCode}`);

  // 3. Add openTime data member to prototype objec
  Bank.prototype.openTime = "9 AM IST"
  // 4. Add closeTime data member to prototype object
  Bank.prototype.closeTime = "6 PM IST";
  console.log("====================================================================================");
  // 5. Log openTime and closeTime of object sbiBank
  console.log(`Open Time = ${sbiBank.openTime} and Close Time at = ${sbiBank.closeTime}`);

  console.log("====================================================================================");
  // 6. Log bankName and closeTime of object axisBank
  console.log(`Bank Name of Axis Bank is= ${axisBank.bankName} Close Time at = ${axisBank.closeTime}`);

  console.log("====================================================================================");
  // 7. Log bankName, branchCode and openTime of object yesBank
  console.log(`Bank Name of Yes Bank is= ${yesBank.bankName} Branch Code = ${yesBank.branchCode} Open Time at = ${yesBank.openTime}`);

  console.log("====================================================================================");