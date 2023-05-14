USE employees

INSERT INTO department(name)
VALUES ("Software Engineering"), 
        ("Accounting"),
        ("Sales"),
        ("Production"),
        ("Legal Team"),
        ("Marketing");

INSERT INTO role (title, salary, department_id)
    VALUES ("Software Engineer" , 50000 , 1 ),
            ("Accountant" , 45000 , 2),
            ("Salesperson" , 45000, 3),
            ("Marketing Manager" , 42000, 6),
            ("Legal Assistant", 60000, 5),
            ("Producer" , 55000 , 4);
            

INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES ("Ana," , "Perez" , 1 , NULL),
               ("Claudia" , "Martinez" , 2 , 1),
               ("Carlos" , "Rosario" , 3 , 2),
               ("Jose" , "Duran" , 4 , 3),
               ("Ashley" , "Lopez" , 5 , 4),
               ("Jesus" , "Alvarado" , 6, 5);