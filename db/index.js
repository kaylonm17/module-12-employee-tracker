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
    // not working
}