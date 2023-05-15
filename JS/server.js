const figlet = require('figlet');
const inquirer = require('inquirer');
const sql = require("./sql");
const connection = require("./db/schema.sql");
const connection2 = require("./db/seeds.sql");
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
        viewAllDepartments();
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
    let connection = `SELECT employee,id, employee.first_name, employee.last_name, role.title, role.salary, department.name
     FROM employee, role, department
     WHERE department.id = role.department_id
     AND role.id = employee.role_id`;
}

function viewAllRoles() {
    let connection = `SELECT role.id, role.title, department.department_name 
    AS department 
    FROM role
    INNER JOIN department ON role.department_id = department.id`;
}

function viewAllDepartments() {
    let connection = `SELECT department.id 
    AS id, department.department_name 
    AS department 
    FROM department`;
}

const addADepartment = () => {
    inquirer
    .prompt([
        {
            name: 'new department',
            message: 'What would you like to name your new department?',
            type: 'input'
        }
    ])
    .then((answer) => {
        let connection2 = `INSERT INTO department (department_name) VALUES`;
        sql.query(sql, answer.addADepartment, (error, response) => {
            if(error) throw error;
            console.log(error)
        })
    })
};

const addARole = () => {
    inquirer
}