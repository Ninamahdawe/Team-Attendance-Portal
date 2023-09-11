const inqurer = require("inquirer");
const userQuestions = require("./questions/questions")
const figlet = require("figlet");
const util = require('util');
const figletAsync = util.promisify(figlet);

// require("console.table");

async function generateHeader() {
    try {
        const header = await figletAsync("Team Portal", { font: "big" });
        return header;
    } catch (err) {
        console.log("Error:", err); // Log any errors
        return null;
    }
}
async function init() {
    const header = await generateHeader();
    console.log(header);
    console.log('Welcome To the Team Portal!');
    userQuestions();
}

init();

    // First when our app starts we will display a welcome message.
    // Next we will ask them to choose an operation
    // with their choice we will call handUserChoice and pass the choice
    // the handUserChoice function will route our application to the correct function
    // then the opperation will be executed ( may reqire more prompting )
    // after they results of the operation are completed you will return them to the menu that ask for their selected operation

    // function init() {
    //     console.log("Welcome To the Team Portal!");
    //     userQuestions()

    // }
    // init()