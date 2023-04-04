use employeelist_db;

INSERT INTO department
    (name)
VALUES
    -- ('Sales'),
    -- ('Engineering'),
    -- ('Finance'),
    -- ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    -- ('Sales Lead', 100000, 1),
    -- ('Salesperson', 80000, 1),
    -- ('Lead Engineer', 160000, 2),
    -- ('Software Engineer', 120000, 2),
    -- ('Account Manager', 150000, 3),
    -- ('Accountant', 100000, 3),
    -- ('Legal Team Lead', 240000, 4),
    -- ('Lawyer', 180000, 4),

    INSERT INTO employee
        (first_name, last_name, role_id, manager_id)
    VALUES
        -- ('Rachel', 'Reid', 1, Null),
        -- ('Harry', 'Justin', 2, 1),
        -- ('Melissa', 'Thomas', 3, 7),
        -- ('Gabe', 'Green', 4, NULL),
        -- ('Austin', 'Chism', 5, 6),
        -- ('Nathan', 'Leal', 6, NULL),
        -- ('Sarah', 'Gomez', 7, NULL),
        -- ('Patrick', 'Bill', 8, NULL),