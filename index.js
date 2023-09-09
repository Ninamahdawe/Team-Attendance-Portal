const inqurer = require("inquirer");
const userQuestions = require("./questions/questions")


// First when our app starts we will display a welcome message.
// Next we will ask them to choose an operation
// with their choice we will call handUserChoice and pass the choice
// the handUserChoice function will route our application to the correct function
// then the opperation will be executed ( may reqire more prompting )
// after they results of the operation are completed you will return them to the menu that ask for their selected operation

function init() {
    console.log("Welcome To the Team Portal!");
    userQuestions()

}
init()