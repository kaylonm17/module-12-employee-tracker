// inquirer for the ability to ask questions to be answered by the user.
const { prompt } = require('inquirer');
// we require the folder to import all exports in the folder (connection and sql statements)
// db holds the connection and the queries
const db = require('./db');
// use this library because console.log is ugly
require('console.table');

// Start the app
async function init() {
    console.log('Welcome Start tracking employees here!');
    // inquirer qeustions
    // await stops the prompts from continuing without an answer
    // 
    await prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                {
                    name: 'View All Departments',
                    value: 'VIEW_DEPARTMENTS',  
                },
                {
                    name: 'Add Department',
                    value: 'ADD_DEPARTMENT',
                },
                {
                    name: 'View all roles',
                    value: 'VIEW_ROLES',
                },
                {
                    name: 'Add role',
                    value: 'ADD_ROLE',
                },
                {
                    name: 'View all employees',
                    value: 'VIEW_EMPLOYEES',
                },
                {
                    name: 'Add emplyee',
                    value: 'ADD_EMPLOYEE',
                },
                {
                    name: 'Update employee role',
                    value: 'UPDATE_EMPLOYEE_ROLE',
                },
                {
                    name: 'Quit',
                    value: 'QUIT',
                },
            ],
        },
    ]).then((res) => {
        let choice = res.choice;
        // case is the users value of the above choices
        // Call the corrisponding function depending on what the user chooses
        // break is used for switch statements to break out from checking all the cases
        switch (choice) {
            case 'VIEW_EMPLOYEES':
                viewEmployee();
                break;
            case 'ADD_DEPARTMENT':
                addDeparment();
                break;
            case 'VIEW_DEPARTMENTS':
                viewDepartments();
                break;
            case 'VIEW_ROLES':
                addRoles();
                break;
            case 'ADD_ROLE':
                addRole();
                break;
            case 'ADD_EMPLOYEE',
                addEmployee():
                break;
            case 'UPDATE_EMPLOYEE_ROLE',
                updateEmployeeRole():
                break;
            default:
                quit();
        }
    });
}
// view all departments
// async is used to use the benefit of promises (chaining method)
// findAllDeparments()code is in the db/index.js
// findAllDeparments() returns an array of db data rows
// console.table() takes the rows and formants the output with column titles and data
async function viewDepartments() {
    await db
        .findAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.log('\n');
            console.log('Deparments Table');
            console.table(departments);
        })
        .then(() => init());
}

// Add a department
async function addDepartment() {
    // gets the name of the department from the user
    await prompt([
        {
            name: 'name',
            message: 'What is the name of the department?',
        },
    ]).then((res) => {
        let name = res;
        db.createDepartment(name)
            .then(() => {
                console.log('\n\n\n');
                console.log(`Added ${name.name} to the database`);
                console.log(`View All Departments to see the result`);
            })
            .then(() => init())
    });
}

// view all roles
async function viewRoles() {
    await db
        .findAllRoles()
        .then(([rows]) => {
            let roles = rows;
            console.table(roles);
        })
        .then(() => init());
}

// Add a role
async function addRole() {
    await db.findAllDepartments().then(([rows]) => {
        let departments = rows;
        console.log(departments);
        const departmentChoices = departments.map(({ id, name }) => ({
            name: name,
            value: id,
        }));

        prompt([
            {
                name: 'title',
                message: 'What is the name of the role?',
            },
            {
                name: 'salary',
                message: 'What is the salary of the role?',
            },
            {
                type: 'list',
                name: 'department_id',
                message: 'Which department does the role belong to?',
                choices: departmentChoices,
            },
        ]).then((role) => {
            db.createRole(role)
                .then(() => console.log(`Added ${role.title} to the database`))
                .then(() => init());
        });
    });
}

//  Add an employee
function addEmployee() {
    // call query the call to the prompt
}

// Update an employee's role
async function updateEmployeeRole() {
    await db.findAllEmployees().then(([rows]) => {
        let employees = rows;
        const employeeChoices =employees.map(({ id, first_name, last_name }) => ({
            name: `${first_name} ${last_name}`,
            value: id,
        }));
        
        prompt([
            {
                type: 'list',
                name: 'employeeId',
                message: "Which employee's role would you like to update?",
                choices: employeeChoices,
            },
        ]).then((res) => {
            let employeeId = res.employeeId;
            db.findAllRoles().then(([rows]) => {
                let roles = rows;
                const roleCgoices = toles.map(({ id, title }) => ({
                    name: title,
                    value: id,
                }));

                prompt([
                    {
                        type: 'list',
                        name: 'roleId',
                        message: 'Which role would you like to assign the employee?',
                        choices: roleChoices,
                    },
                ])
                    .then((res) => db.updateEmployeeRole(employeeId, res.roleId))
                    .then(() => console.log("employee's role has been updated"))
                    .then(() => init());
            });
        });
    });
}

// Exit the application
function quit() {
    console.log('Goodbye!');
    process.exit();
}

// call to start
init();