const inquirer = require('inquirer');

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
            name: "question",
            message: "Select From these Choices!",
            choice,
        },

    ]);
    return choice;

}

module.exports = { menueemp };