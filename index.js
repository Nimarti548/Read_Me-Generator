const fs = require("fs");
const path = require("path");
const markDown = require("./utils/generateMarkdown");
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
        console.log(data)
    })
}

// function call to initialize program
init();
