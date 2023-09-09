const inquirer = require('inquirer');
// const handleUserChoice = require("../lib/menuemp")
const db = require("../db/connection.js")
async function userQuestions() {
    const choices = [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add Employee",
        "Add Role",
        "Add Department",
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
        case 'Add A Department':
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
function view() {
    const query = "SELECT * FROM roles";
    db.query(query, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.table(res);
        setTimeout(userQuestions, 3000)
    });
}

module.exports = userQuestions;