DROP DATABASE IF EXISTS employeelist_db;
CREATE DATABASE employeelist_db;

USE employeelist_db;

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL
    department_id INT
)