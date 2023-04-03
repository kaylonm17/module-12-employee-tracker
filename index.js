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
    ])
}