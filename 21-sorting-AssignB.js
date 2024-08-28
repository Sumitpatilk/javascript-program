
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  
  const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
  
  // 1. Sort the 'arrayEmployees' in descending order of Employee Id's and log employee details → Id, Name, Department
  arrayEmployees.sort((a, b) => b.emp_id - a.emp_id);
  console.log("Sorted by Employee ID in descending order:");
  arrayEmployees.forEach(employee => {
    console.log(` ${employee.emp_id} || ${employee.emp_name} || ${employee.emp_dept}`);
  });
  console.log("=======================================================");
  // 2. Sort the 'arrayEmployees' in ascending order of employee department & log Id, dept, & Company
  arrayEmployees.sort((a, b) => {
    if (a.emp_dept < b.emp_dept) {
      return -1;
    } else if (a.emp_dept > b.emp_dept) {
      return 1;
    } else {
      return a.emp_id - b.emp_id;
    }
  });
  console.log("\nSorted by Department and ID in ascending order:");
  arrayEmployees.forEach(employee => {
    console.log(`${employee.emp_id} || ${employee.emp_dept}|| ${employee.emp_company}`);
  });
  console.log("=======================================================");
  
  // 3. Sort the employee array in descending order of employee salary and log Name, Salary & Company
  arrayEmployees.sort((a, b) => b.emp_salary - a.emp_salary);
  console.log("\nSorted by Salary in descending order:");
  arrayEmployees.forEach(employee => {
    console.log(`${employee.emp_name} || ${employee.emp_salary} || ${employee.emp_company}`);
  });