const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your project name?",
    name: "title",
  },
  {
    type: "input",
    message: "What is your Github User Name?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which type of license does your project have?',
    choices: ['MIT', 'Mozilla', 'Apache', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Boost Software ', 'The Unlicense'],
  },
  {
    type: "input",
    message: "Please write a short description.",
    name: "description",
  },
  {
    type: "input",
    message: "How do you install app.",
    name: "installation",
  },
  {
    type: "input",
    message: "How do you use this app.",
    name: "usage",
  },
  {
    type: "input",
    message: "Did anyone else contribute to this app?",
    name: "contributing",
  },
  {
    type: "input",
    message: "How do you test the app.",
    name: "test",
  },

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile("GeneratedReadme.md", generateMarkdown({ ...data }));
    })
}

// function call to initialize program
init();
