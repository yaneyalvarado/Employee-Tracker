USE employees

INSERT INTO department(name)
VALUES ("Software Engineering"), 
        ("Accounting"),
        ("Sales"),
        ("Production"),
        ("Legal Team"),
        ("Marketing");

INSERT INTO role (title, salary, department_id)
    VALUES ("Software Engineer"),
            ("Accountant"),
            ("Salesperson"),
            ("Marketing Manager"),
            ("Legal Assistant");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES ("")
               ("")
               ("")