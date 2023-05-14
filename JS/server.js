const inquirer = require('inquirer');
const db = require("./sql");
require("console.table");

const promptUser = () => {
    inquirer.prompt([
        {
            name: 'choices',
            message: 'Please select one of the options',
            type: 'list',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role'
            ]
        }
    ])
}
.then((answers) => {
    const {choices} = answers;
    if (choices === 'View all departments') {
        viewAllDeparmtnets();
    }
    if (choices === 'View all roles') {
        viewAllRoles();
    }
    if (choices === 'View all employees') {
        viewAllEmployees();
    }
    if (choices === 'Add a department') {
        addADepartment();
    }
    if (choices === 'Add a role') {
        addARole();
    }
    if (choices === 'Add an employee') {
        addAEmployee();
    }
    if (choices === 'Update an employee role') {
        updateAnEmployeeRole();
    }
})

function viewAllEmployees() {
    let db = `SELECT employee,id, employee.first_name, employee.last_name, role.title, role.salary, department.name
     FROM employee, role, department
     WHERE department.id = role.department_id
     AND role.id = employee.role_id`
}