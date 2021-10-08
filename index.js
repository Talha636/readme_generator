// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a Title for your project.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the instructions for installing your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information for your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which of the following licenses would you like to use?',
        choices: ['MIT', 'Apache 2.0', 'GNU 3.0']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter the contribution guidelines.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter the test instructions.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile('GeneratedREADME.md', generateMarkdown(answers));
    })
}
    
// Function call to initialize app
init();
