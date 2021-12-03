// TODO: Include packages needed for this application

//const InputPrompt = require("inquirer/lib/prompts/input");
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your repository?",
    name: "title",
  },
  {
    type: "input",
    message: "Please add a project discription.",
    name: "description",
  },
  {
    type: "input",
    message:
      "Please add notes and a breif description of the necessary intallation prcedure.",
    name: "instal",
  },
  {
    type: "input",
    message: "Include any usage information.",
    name: "usage",
  },
  {
    type: "list",
    message: "Don't forget to add a license here.",
    name: "license",
    choices: ["MIT", "IBM", "Mozilla"],
  },
  {
    type: "input",
    message:
      "Do you want to include any contributions/ contributors to this project?",
    name: "mentions",
  },
  {
    type: "input",
    message: "If available add any tests here.",
    name: "test",
  },
  {
    type: "input",
    message: "Please add any additional notes or comments here.",
    name: "comments",
  },
  {
    type: "input",
    message: "Add your GitHub here.",
    name: "git",
  },
  {
    type: "input",
    message: "Please add your email.",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) =>
    err ? console.log(err) : console.log("Writing ReadMe!")
  );
}
// console.log(writeToFile);

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      // console.log(data);
      console.log(generateMarkdown(data));
      var rawMarkdown = generateMarkdown(data);
      writeToFile("readme.md", rawMarkdown);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log("Something else went wrong");
      }
    });
}
//complete the fs method on line 61
//call the writeToFile function, where?
//What can be passed in as arguments for fileName, and data?
//How to use data from user's answers to write into the file?
//readme: hint - use backtick/template literals to write the readme content before writing to file.

// Function call to initialize app
init();
