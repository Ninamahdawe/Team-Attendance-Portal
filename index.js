// Import the 'inquirer' library for handling user input.
const inqurer = require("inquirer");
// Import the 'userQuestions' module from './questions/questions'.
const userQuestions = require("./questions/questions")

// Import the 'figlet' library for creating ASCII art text.
const figlet = require("figlet");

// Import the 'util' module for utility functions.
const util = require('util');
const figletAsync = util.promisify(figlet);

// require("console.table");

// Define an async function 'generateHeader()' to create an ASCII art header.
async function generateHeader() {
    try {
        // Generate the header text using 'figletAsync' with the font 'big'.
        const header = await figletAsync("Team Portal", { font: "big" });

        // Return the generated header.
        return header;
    } catch (err) {
        // If there is an error, log it to the console.
        console.log("Error:", err); // Log any errors
        return null;
    }
}
// Define an async function 'init()' to initialize the application.
async function init() {
    const header = await generateHeader();
    console.log(header);

    // Log a welcome message to the console.
    console.log('Welcome To the Team Portal!');

    // Call the 'userQuestions()' function to start the user interaction.
    userQuestions();
}
// Call the 'init()' function to initialize the application.
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