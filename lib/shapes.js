class Shape {
    constructor(height,width,radius) {
    this.height = height;
    this.width = width; 
    this.radius = radius;
    }
}

class Circle extends Shape {
    constructor(radius,text,textColor,image,imageColor) {
        super("","",radius)
        this.text=text;
        this.textColor=textColor;
        this.image=image;
        this.imageColor=imageColor;
    }
    render() {
        return `<svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
         <circle cx="50" cy="50" r="${this.radius}" fill="${this.imageColor}" />
         <text x="50" y="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
         </svg>`
    }
}

class Triangle{
    constructor(text,textColor,image,imageColor){
        this.text=text;
        this.textColor=textColor;
        this.image=image;
        this.imageColor=imageColor;
    }
    render(){
        return `<svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,0 50,100 150,100" fill="${this.imageColor}"/>
                <text x="100" y="50" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                </svg>`
    }

}

class Square{
    constructor(text,textColor,image,imageColor){
        this.text=text;
        this.textColor=textColor;
        this.image=image;
        this.imageColor=imageColor;
    }
    render(){
        return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" x="50" y="50" fill="${this.imageColor}" />
        <text x="125" y="125" text-anchor="middle" fill="${this.textColor}">${this.text}</text>         
        </svg>`        
    }
}

module.exports={
    Circle,
    Triangle,
    Square
};