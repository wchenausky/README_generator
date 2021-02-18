// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const generateREADME = (answers) =>
  `
  # ${answers.title}
  [![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license.split('-')[0]}-green)](https://opensource.org/licenses/${answers.license})

  ${answers.description}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [Contribution](#Contribution)
  [Tests](#Tests)
  [Questions](Questions)

  ## INstallation
  ${answers.install}

  ## Usage
  ${answers.usage}

  ##Contribution
  ${answers.contribution}

  ## Tests
  ${answers.test}

  ## Questions
  Email: [${answers.email}](${answers.email})
  
  My GitHub Page: [github.com/${answers.gitHub}](github.com/${answers.gitHub})
  `;
// TODO: Create an array of questions for user input
inquierer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: 'input',
    name: 'desciption',
    message: 'Please describe your project.',
  },
{
  type:'input',
  name: 'install',
  message: 'Please explain would you install this project?',
},
{
  type: 'input',
  name: 'usage',
  message: "How would you use your application?",
},
{
  type: 'input',
  name: 'contribution',
  message: 'How can others contribute to your open souce project?'
},
{
  type: 'input',
  name: 'test',
  message: 'How would you test your application?'
},
{
  type: 'list',
  choices: ['MIT', 'Apache', 'EPL-2.0', 'GPLv2', 'GPLv3'],
  message: "Which license woud you like to use for your README file?"
},
{
  type: 'input',
  name: 'email',
  message: "What is your email?",
},
{
  type: 'input',
  name: 'gitHub',
  message: 'What is your GitHub username?',
},

]).then((answers) => {
  const htmlPageContent = generateHTML(answers);
 
  fs.writeFile('index.html', htmlPageContent, (err) =>
  err ? console.log(err) : console.log('Successfully created index.html!')
);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}                                                          
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log("testing questions");
  });
}

// Function call to initialize app
init();
