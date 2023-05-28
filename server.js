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
    let connection = `SELECT * FROM employee`
     const [employees] = await db.promise().query(connection)
     console.table(employees)
     promptUser();
}

async function viewAllRoles() {
    let connection = `SELECT * FROM role`
    const [role] = await db.promise().query(connection)
    console.table(role)
    promptUser();
}

async function viewAllDepartments() {
    let connection = `SELECT * FROM department`
    const [department] = await db.promise().query(connection)
    console.table(department)
    promptUser();
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
    const [department] = await db.promise().query(`SELECT * FROM role`)
    const sql = `SELECT * FROM role`;
        inquirer.prompt([
            {
                name: 'role_name',
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
        .then((answer) => {
            let sql = `INSERT INTO role (name) VALUES('${answer.role}')`;
            db.query(sql, (error, response) => {
                // if(error) throw error;
                console.table(response)
                promptUser();
            })
      })
  }

const addAEmployee = () => {
    // const [employee] = db.promise().query(`SELECT * FROM employee`)
    const sql = `SELECT * FROM employee`;
    inquirer.prompt ([
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
        },
        {
            name: 'manager',
            message: 'Who is the employee`s manager?',
            type: 'list',
            choices: ['1', '2', '3', '4', '5', '6']
        }
    ])
    .then((answer) => {
        let sql = `INSERT INTO employee (name) VALUES('${answer.employee}')`;
        db.query(sql, (error, response) => {
            // if(error) throw error;
            console.table(response)
            promptUser();
        })
    })
};

const updateAnEmployeeRole = () => {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (error, rows) => {
        // if (error) throw error
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
        .then((answer) => {
            const sql = `UPDATE employee SET role_id`;
            db.query(sql, (error, rows) => {
                // if (error) throw error;
                let sql = `SELECT * FROM employee`;
                db.query(sql, (error, rows) => {
                    // if (error) throw error;
                    console.log(error)
                    promptUser();
                })
            })
        })
    })
}

promptUser();