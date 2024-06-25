// Import the required packages/modules
const inquirer=require('inquirer')
// package to extend the built-in prompt type to allow a max input length
const MaxLengthInputPrompt=require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input',MaxLengthInputPrompt)
const fs=require('fs')
// Array to select image for logo generation
const images=['circle', 'triangle', 'square']
// Destructure the required modules for import
const {Circle,Square,Triangle} = require('./lib/shapes')

// Define variables at Global level
let text = "";
let textColor = "";
let image = "";
let imageColor = "";
let svgLogoContent = "";

// Prompt user with questions related to logo generation
inquirer
    .prompt([
        {
            type: "maxlength-input",
            name: "text",
            message: "Please enter text for logo",
            maxLength:3        
        },
        {
            type:"input",
            message:"Please enter text color for the logo",
            name:"textColor"

        },
        {
            type: "list",
            message: "Please select image for logo",
            name: "image",
            choices: images
        },
        {
            type: "input",
            message: "Please enter image color for the logo",
            name: "imageColor"
        },
    ])
    .then((response) => {
        if(response.image === 'circle'){
            let radius=60;
            text=response.text;
            textColor=response.textColor;
            image=response.image;
            imageColor=response.imageColor;
            const circle=new Circle(radius,text,textColor,image,imageColor);
            svgLogoContent=`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${circle.render()}
            ${circle.renderText()}
            </svg>`
            writeToFile('./examples/logo.svg',svgLogoContent);
        }
        else if(response.image === 'triangle'){
            text=response.text;
            textColor=response.textColor;
            image=response.image;
            imageColor=response.imageColor;
            const triangle=new Triangle(text,textColor,image,imageColor)
            svgLogoContent=`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${triangle.render()}
            ${triangle.renderText()}
            </svg>`
            writeToFile('./examples/logo.svg',svgLogoContent);
        }
        else if(response.image==='square'){
            text=response.text;
            textColor=response.textColor;
            image=response.image;
            imageColor=response.imageColor;
            const square=new Square(text,textColor,image,imageColor)
            svgLogoContent=`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${square.render()}
            ${square.renderText()}
            </svg>`
            writeToFile('./examples/logo.svg',svgLogoContent);
        }
        else{
            console.log('Please select valid image for logo generation')
        }
    })

    // function to generate file
    function writeToFile(fileName,data){
        fs.writeFile(fileName,data,(err)=>
        err ? console.error(err):console.log(`Generated logo.svg`))
    }