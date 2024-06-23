const inquirer = require('inquirer')
const fs = require('fs')
const images = ['circle', 'triangle', 'square']

inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter text for logo",
            name: "text"
        },
        {
            type: "list",
            message: "Please select image for logo",
            name: "image",
            choices: images
        },
        {
            type: "input",
            message: "Please enter color for background",
            name: "color"
        },
    ])
    .then((response) => {
        console.log(response)
    })