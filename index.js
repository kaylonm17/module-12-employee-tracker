// inquirer for the ability to ask questions to be answered by the user.
const { prompt } = require('inquirer');
// we require the folder to import akk exports in the folder (connection and sql statements)
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
            case 'ADD_EMPLOYEE':
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