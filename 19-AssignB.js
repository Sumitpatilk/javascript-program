
class Employee {
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finace", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finace", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array = [emp_anil,emp_rishi,emp_viny];
 for (const element of array) {
     console.log(`The employee name : ${element.emp_name} & company name: ${element.emp_company}`);
 }

 console.log("=====================================================");
 const Finance = [emp_rishi,emp_sonali];
 for (const element of Finance) {
     console.log(`The departement name :${element.emp_dept} And employee name is : ${element.emp_name}`);
 }
 console.log("=====================================================");

 const r = [emp_rishi,emp_radha];
 for (const element of r) {
      if (element.emp_name.startsWith("R")) {
        console.log(`The employee name :${element.emp_name} And department name is : ${element.emp_dept}`);
      }  
 }
 console.log("=====================================================");
 const salary = [emp_mahi];
 for (const element of salary) {
    if (element.emp_salary>75000) {
        console.log(`The employee name :${element.emp_name} And department name is : ${element.emp_dept} salary${element.emp_salary}`); 
    }
 }
console.log("=====================================================");
const emp = [emp_anil,emp_viny];
 for (const element of emp) {
    if (element.emp_salary>=50000 && element.emp_dept=="IT") {
     console.log(`Employee id: ${element.emp_id} ||employee name :${element.emp_name} ||department name is : ${element.emp_dept}|| salary${element.emp_salary}|| company name:${element.emp_company}`); 
    }
 }
console.log("=====================================================");
 const employee = [emp_sonali,emp_mahi];
 for (const element of employee) {
    console.log(`Employee id: ${element.emp_id} ||employee name :${element.emp_name} ||department name is : ${element.emp_dept}|| salary${element.emp_salary}|| company name:${element.emp_company}`); 
}
 console.log("=====================================================");
