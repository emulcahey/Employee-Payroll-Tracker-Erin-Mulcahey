const addEmployeesBtn = document.querySelector('#add-employees-btn');

addEmployeesBtn.addEventListener('click', function() {
  let employees = [];
  addEmployees(employees);
});
// Collect employee data
const addEmployees = function(employees) {

  addEmployee(employees);

  let continueAdding = confirm("Do you want to add another employee?");
  if (continueAdding) {
    addEmployees(employees);
  } else {
    displayEmployeeDetails(employees);
    // displayAverageSalary(employees);
    // getRandomEmployee(employees);
  }
}

function addEmployee(employees) {
  let firstName = prompt("Enter employee's first name:");
  let lastName = prompt("Enter employee's last name:");
  let salary = prompt("Enter employee's salary:");

  let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary) || 0
  }
  employees.push(employee);
}

  // Get user input to create and return an array of employee objects
  function displayEmployeeDetails(employees) {

    employees.sort((a, b) => {
      if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
          return -1;
      }
      if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
          return 1;
      }
      return 0;
    });
  
    const table = document.querySelector('#employee-table')
    
    employees.forEach((employee, index) => {
      const row = table.insertRow(index);
      row.innerHTML = `<td>${employee.firstName}</td><td>${employee.lastName}</td><td>${employee.salary}</td>`;
    });
  }

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // Calculate and display the average salary

  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;

  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary}.`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
