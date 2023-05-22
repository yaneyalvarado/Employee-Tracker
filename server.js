const { table } = require('console');
const inquirer = require('inquirer');
const db = require("./JS/sql.js");
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
}
 async function viewAllEmployees() {
    // let connection = `SELECT employee,id, employee.first_name, employee.last_name, role.title, role.salary, department.name
    //  FROM employee, role, department
    //  WHERE department.id = role.department_id
    //  AND role.id = employee.role_id`;
    let connection = `SELECT * FROM employee`
     const [employees] = await db.promise().query(connection)
     console.table(employees)
     promptUser();
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
            name: 'department',
            message: 'What would you like to name your new department?',
            type: 'input'
        }
    ])
    .then((answer) => {
        let sql = `INSERT INTO department (name) VALUES('${answer.department}')`;
        db.query(sql, (error, response) => {
            if(error) throw error;
            console.table(response)
            promptUser();
        })
    })
};

const addARole = async () => {
    const [department] = await db.promise().query(`SELECT * FROM department`)
    const sql = `SELECT * FROM department`;
    // db.query(db, (err, rows) => {
    //     if (err) throw err;
    //     const department_id = [];
    //     rows.forEACH(function(department_id) {
    //         department_id.push({name: department_id.department_name, value: department_id.id});
    //     });
        inquirer.prompt([
            {
                name: 'role name',
                message: 'What is the new role?',
                type: 'input'
            },
            {
                name: 'salary',
                message: 'What is the salary for this new role?',
                type: 'input'
            },
            {
                name: 'department',
                message: 'In what department would you like to place this new role?',
                type: 'list',
                choices: department.map(({id, name}) => ({
                    name, 
                    value: id
                }))
            }
        ])
        .then(response => {
            const connection = `INSERT INTO employee_role(title, salary, department_id) VALUES`
            db.query(sql, (error, rows) => {
                if (error) throw error;
                const connection2 = `SELECT * FROM employee_role`;
                db.query(sql, (error, rows) => {
                    if (error) throw error;
                    console.log(error)
                })
            })
        })
}

const addAEmployee = () => {
    const connection = `SELECT * FROM employee`;
    sql.query (sql, (error, rows) => {
        if (error) throw error;
        const employee = [];
        rows.forEach(function (employee) {
            employee.push({name: employee.first_name, value:employee.id});
        });

        const manager_id = [];
        rows.forEach(function (manager) {
            manager_id.push({name: manager.first_name, value: manager.id});
        });
        return inquirer.prompt([
            {
                name: 'first_name',
                message: 'What is the employee`s first name?',
                type: 'input'
            },
            {
                name: 'last_name',
                message: 'What is the employee`s last name?',
                type: 'input'
            },
            {
                name: 'role',
                message: 'What is the new employee`s role?',
                type: 'list',
                choices: ['Accountant',
                        'Software Engineer',
                        'Salesperson',
                        'Marketing Manager',
                        'Legal Assistant',
                        'Producer']
            }
        ])
        .then(response => {
            const connection = `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES`
            db.query(sql, (error, rows) => {
                if (error) throw error;
                const connection2 = `SELECT * FROM employee`;
                db.query(sql, (error, rows) => {
                    if (error) throw error;
                    console.log(error)
                })
             })
        })
    })
}

const updateAnEmployeeRole = () => {
    const connection = `SELECT * FROM employee`;
    db.query(sql, (error, rows) => {
        if (error) throw error
        const employee = [];
        rows.forEach(function (role) {
            employee.push({name: role.title, value: {role_id: role.role_id, title: role.title, dep_name: role.department_name}});
        });
        return inquirer.prompt ([
            {
                name: 'update_employee',
                message: 'What is the employee`s name?',
                type: 'list',
                choices: [
                    'Ana Perez',
                    'Claudia Martinez',
                    'Carlos Rosario',
                    'Jose Duran',
                    'Ashley Lopez',
                    'Jesus Alvarado'
                ]
            }
        ])
        .then(response => {
            const connection2 = `UPDATE employee SET role_id`;
            db.query(sql, (error, rows) => {
                if (error) throw error;
                const connection2 = `SELECT * FROM employee`;
                db.query(sql, (error, rows) => {
                    if (error) throw error;
                    console.log(error)
                })
            })
        })
    })
}

promptUser();