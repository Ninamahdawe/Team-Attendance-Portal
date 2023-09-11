const inquirer = require('inquirer');
// const handleUserChoice = require("../lib/menuemp")
const db = require("../db/connection.js")
async function userQuestions() {
    const choices = [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee Role",
        'Update Employee Manager',
        "Exit",
    ];

    const { choice } = await inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Select From these Choices!",
            choices,
        },

    ]);
    console.log(choice)
    handleUserChoice(choice)

}

async function handleUserChoice(choice) {
    console.log(choice)
    switch (choice) {
        case 'View All Departments':
            viewDepartments();
            break;
        case 'View All Roles':
            viewRoles();
            break;
        case 'View All Employees':
            viewEmployees();
            break;
        case 'Add Department':
            addDepartment();
            break;
        case 'Add Role':
            addRole();
            break;
        case 'Add Employee':
            addEmployee();
            break;
        case 'Update Employee Role':
            updateEmployeeRole();
            break;
        case 'Update Employee Manager':
            updateEmployeeManager();
            break;
        case 'Exit':
            console.log('Goodbye SeeYaa!');
            process.exit(0);
        default:
            console.log('Invalid choice Try Again!');
    }
}

function viewDepartments() {
    const query = "SELECT * FROM departments";
    db.query(query, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.table(res);
        setTimeout(userQuestions, 3000)
    });
}

function viewRoles() {
    const query = "SELECT * FROM roles";
    db.query(query, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.table(res);
        setTimeout(userQuestions, 3000)
    });
}
function viewEmployees() {
    const query = "SELECT * FROM employees";
    db.query(query, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.table(res);
        setTimeout(userQuestions, 3000)
    });
}
async function addDepartment() {
    const departmentData = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please Enter The department name! ",


        },
    ]);

    const query = "INSERT INTO departments (name)  VALUES (?)";
    const values = [departmentData.name];
    db.query(query, values, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Department ${departmentData.name} added successfully!`);
        }
        setTimeout(userQuestions, 3000);
    });
}

async function addRole() {
    const roleData = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the role you Would like to add! ",
        },
        {
            type: "input",
            name: "salary",
            message: "Please enter the salary you would like to add?",
        },
        {
            type: "input",
            name: "department_id",
            message: "What is the department ID of the role you would like to add?",
        },
    ])

    const query = "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)";
    const values = [roleData.name, roleData.salary, roleData.department_id];
    db.query(query, values, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Role ${roleData.name} added successfully!`);
        }
        setTimeout(userQuestions, 3000);
    });
}

async function addEmployee() {
    const employeeData = await inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "Please enter the first name of the employee you Would like to add! ",
        },
        {
            type: "input",
            name: "last_name",
            message: "Please enter the last name of the employee you would like to add?",
        },
        {
            type: "input",
            name: "role_id",
            message: "Please enter the department ID of the role you would like to add?",
        },
        {
            type: "input",
            name: "manager_id",
            message: "Please enter the manager ID of the employee you would like to add?",
        },
    ])


    const query = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
    const values = [employeeData.first_name, employeeData.last_name, employeeData.role_id, employeeData.manager_id];
    db.query(query, values, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Employee ${employeeData.first_name$}${employeeData.last_name} added successfully!`);
        }
        setTimeout(userQuestions, 3000);
    });
}
async function updateEmployeeRole() {
    const employeeData = await inquirer.prompt([
        {
            type: "input",
            name: "employee_id",
            message: "Please enter the ID of the employee you would like to update:",
        },
        {
            type: "input",
            name: "new_role_id",
            message: "Please enter the new role ID for the employee:",
        },
    ]);
    const query = "UPDATE employees SET role_id = ? WHERE id = ?";
    const values = [employeeData.new_role_id, employeeData.employee_id];

    db.query(query, values, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Employee with ID ${employeeData.employee_id} has been assigned a new role with ID ${employeeData.new_role_id}.`);
        }
        setTimeout(userQuestions, 3000);
    });
}
async function updateEmployeeManager() {
    const employees = await inquirer.prompt([
        {
            type: "input",
            name: "employee_id",
            message: "What is the ID of the employee you would like to update?:",
        },
        {
            type: "list",
            name: "manager_id",
            message: "Select the new manager for the employee:",
        },
    ]);
    const query = "UPDATE employees SET manager_id = ? WHERE id = ?";
    const values = [employees.manager_id, employees.employee_id];

    db.query(query, values, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Employee manager updated successfully!");
        }
        setTimeout(userQuestions, 3000);
    });
}






module.exports = userQuestions;
