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
    // create role
    async createRole(role){
        returndb_connection.promise().query('SELECT * FROM employee');
        return data;
    }
    // create employee
    async createEmployee(employee) {
        let data = await db_connection
            .promise()
            .query('INSERT INTO employee SET ?', employee);
        return data;
    }
    // find all employee
    async findAllEmployees() {
        let data = await db_connection.promise().query('SELECT * FROM employee');
        return data;
    }
    //update employee role
    async updateEmployeeRole(employeeId, roleId) {
      let data = await db_connection
        .promise()
        .query('UPDATE employee SET role_id = ? WHERE id = ?', [
          roleId,
          employeeId,
        ]);
      return data;
    }
} 
// end class
module.exports = new DB(db_connection); 