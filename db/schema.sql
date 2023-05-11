DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

DROP TABLE IF EXISTS department;

CREATE TABLE department{
    id: INT PRIMARY KEY
    name: VARCHAR(30) NOT NULL
    salary: DECIMAL NOT NULL
    department_id: INT
};

CREATE TABLE role{

};

CREATE TABLE employee{
    
}