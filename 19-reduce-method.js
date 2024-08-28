
const array = [2, 3, 1, 5, 4 ]; // 15

const sum = array.reduce((runningTotal, element)=>{
    return runningTotal+ element;
}, 0);

console.log(sum);
console.log("=====================================================================");

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
//Find the average salary of employee from company Wipro.
const wiproEmployees = arrayEmployee.filter((employee)=>{
    return employee.emp_company=="wipro";
});
console.log(wiproEmployees[0]);
console.log(wiproEmployees[1]);

const wiproEmpSalary = wiproEmployees.map( (employee)=>{
    return employee.emp_salary;
});
console.log(wiproEmpSalary);
let salarySum = 0;
for (const element of wiproEmpSalary) {
    salarySum = salarySum + element;
}
console.log(`Salary Sum is: ${salarySum}`);
let averageSalary = salarySum / wiproEmpSalary.length 

console.log(`Average salary is: ${averageSalary}`);

