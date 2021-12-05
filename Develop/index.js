// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Questions array for user input
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

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) =>
    err ? console.log(err) : console.log("Writing ReadMe!")
  );
}

// Init fuction to call
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

// Function call to initialize app
init();
