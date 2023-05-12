DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

DROP TABLE IF EXISTS department;

CREATE TABLE department(
    id INT PRIMARY KEY auto_increment,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
    id INT PRIMARY KEY auto_increment,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    constraint fk_department foreign KEY (department_id) references department(id) on delete cascade 
);

CREATE TABLE employee(
    id INT PRIMARY KEY auto_increment,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
      constraint fk_role foreign KEY (role_id) references role(id) on delete cascade,
    manager_id INT,
     constraint fk_manager foreign KEY (manager_id) references employee(id) on delete set NULL
);