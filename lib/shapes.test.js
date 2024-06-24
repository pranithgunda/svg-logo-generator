// Import the required classes
const { Circle, Square, Triangle } = require('./shapes')

// A testing suite for Circle
describe('Circle', () => {
    // test case to match returned string by render method that generates circle image with given color
    it('should match returned string by render method to generate circle', () => {
        const imageColor = '#00FF00';
        const circle = new Circle("40", "", "", "", "");
        circle.setColor(imageColor);
        expect(circle.render()).toEqual('<circle cx="75" cy="75" r="40" fill="#00FF00" />')
    })
})

// A testing suite for Square
describe('Square', () => {
    // test case to match returned string by render method that generates square image with given color
    it('should match returned string by render method to generate square',()=>{
        const imageColor='#00FF00';
        const square = new Square();
        square.setColor(imageColor);
        expect(square.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="#00FF00"/>')
    })
})

// A testing suite for Triangle
describe('Triangle', () => {
    // test case to match returned string by render method that generates triangle image with given color
    it('should match returned string by render method to generate triangle',()=>{
        const imageColor='#00FF00';
        const triangle = new Triangle();
        triangle.setColor(imageColor);
        expect(triangle.render()).toEqual('<polygon points="100,0 50,100 150,100" fill="#00FF00"/>')
    })
})

