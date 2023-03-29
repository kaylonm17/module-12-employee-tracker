const db_connection = require('./connection');

class DB {
    // constructor function auto runs everytime a class is created
    constructor(db_connection) {
        this.db_connection = db_connection;
    }
    // department
    async findAllDepartments() {
        let data = await db_connection
            .promise()
            .query('SELECT department.id, department.name FROM department ORDER BY id');
        return data;
    }

    async createDepartment(department) {
        let data = await db_connection
            .promise()
            .query('INSERT INTO department SET ?', department);
        return data;
    }
    //roles
    async findAllRoles() {
        return  db_connection.promise().query('SELECT * FROM role');
    }
    // // not working
    // async createRole(role) {
    //     return db_connection.promise().query('INSERT INTO role SET ?', role);
    // }
    // employee
    async findAllEmployees() {
        let data = await db_connection.promise().query('SELECT * FROM employee');
        return data;
    }
    // // not working
    // async createEmployee(employee) {
    //     let data = await db_connection
    //         .promise()
    //         .query('INSERT INTO employee SET ?', employee);
    //     return data;
    // }
} 
// end class
module.exports = new DB(db_connections); 