const inquirer = require("inquirer");
const employees = require("server");
const { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('../db');

async function handleUserChoice(choice) {
    switch (choice) {
        async function handleUserChoice(choice) {
        switch (choice) {
            case 'View all departments':
                await viewDepartments();
                break;
            case 'View all roles':
                await viewRoles();
                break;