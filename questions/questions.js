const inquirer = require('inquirer');
// const handleUserChoice = require("../lib/menuemp")
const db = require("../db/connection.js")
async function userQuestions() {
    const choices = [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add Department",
        "Add Employee",
        "Add Role",
        "Update Employee Role",
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
        case 'Add A Role':
            addRole();
            break;
        case 'Add An Employee':
            addEmployee();
            break;
        case 'Update An Employee Role':
            updateEmployeeRole();
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
    const departmentData = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please tnter the role you Would like to add! ",
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
module.exports = userQuestions;