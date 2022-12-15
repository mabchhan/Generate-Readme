// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide short explain of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is usage of this project?",
    name: "usage",
  },
  {
    type: "list",
    message: "Please select license for your project:",
    choices: ["None", "MIT", "Apache", "IBM", "ISC"],
    name: "license",
  },
  {
    type: "input",
    message: "Who were your contribute?",
    name: "contribute",
  },
  {
    type: "input",
    message: "How to run your project?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your Email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("success created file")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    //console.log(data);
    //generateMarkdown(answers);
    writeToFile("GenerateReadme.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
