INSERT INTO departments (name)
VALUES ("Accounting"), ("Legal"), ("Management"), ("Engineering"), ("Human Resources");

INSERT INTO
    roles (title, salary, department_id)
VALUES ("Solutions Engineer", 11000, 3), ("Software Engineer", 11.662, 3), ("Staff Accountant", 6500, 2), ("Sales Engineer", 8000, 3);

INSERT INTO
    employees (
        first_name,
        last_name,
        role_id,
        manager_id
    )
VALUES ("Laura ", "YU", 1, NULL), ("Ali", "ABD", 2, 1), ("Sarah", "Asgari", 2, 1), ("Kevin", "Clark", 4, NULL), ("James", "Johnson", 4, NULL), ("Nina", "Mahdawe", 2, NULL), ("Michael", "Miller", 3, 1);