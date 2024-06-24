// Shape class defined to initialize attributes that are common to shapes
class Shape {
    constructor(text, textColor, image, imageColor) {
        this.text = text;
        this.textColor = textColor;
        this.image = image;
        this.imageColor = imageColor;
    }
    // Function defined to set imageColor
    setColor(imageColor){
        this.imageColor = imageColor;
    }
}

class Circle extends Shape {
    constructor(radius, text, textColor, image, imageColor) {
        // Invoke Shape class constructor using super to initialize common attributes
        super(text, textColor, image, imageColor)
        this.radius = radius;
    }
    render() {
        return `<circle cx="100" cy="100" r="${this.radius}" fill="${this.imageColor}" />`
    }
    renderText() {
        return `<text x="100" y="100" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class Triangle extends Shape {
    constructor(text, textColor, image, imageColor) {
        // Invoke Shape class constructor using super to initialize common attributes
        super(text, textColor, image, imageColor)
    }
    render() {
        return `<polygon points="100,0 50,100 150,100" fill="${this.imageColor}"/>`
    }
    renderText() {
        return `<text x="100" y="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class Square extends Shape {
    constructor(text, textColor, image, imageColor) {
        // Invoke Shape class constructor using super to initialize common attributes
        super(text, textColor, image, imageColor)
    }
    render() {
        return `<rect x="50" y="50" width="100" height="100" fill="${this.imageColor}"/>`
    }
    renderText() {
        return `<text x="100" y="100" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = {
    Circle,
    Triangle,
    Square
};