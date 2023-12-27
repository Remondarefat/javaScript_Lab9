
//!------------------------Part1---------
class shape {
    constructor(name , sides , sideLength){
        this.name=name;
        this.sides=sides;
        this.sideLength=sideLength;
    }
    calcPerimeter() {
        console.log(this.sideLength*this.sides);
    }
}

var square = new shape ("square" , 4 , 5);
square.calcPerimeter();
var triangle = new shape ("triangle" , 3 , 3);
triangle.calcPerimeter();
//!-------------------Part2--------------
//? Define subclass Square 

class Square extends shape {
    constructor(sideLength){
        super("square" , 4 , sideLength)
    }
    calcArea() {
        console.log(this.sideLength*2)
    }
}
square = new Square(5);
square.calcPerimeter();
square.calcArea();
//!--------------Part3------------------
class Triple {
    static customName ="Tripler";
    static description ="I triple any number you provide";
    static calculation(n=1){
        return n*3;
    }
}

//? Define subclass SquaredTriple 

class SquaredTriple extends Triple{
    static longDescription ;
    static description ="square the triple of any number you provide"

    static calculate(n=1){
        return super.calculate(n)*2;
    }
}

//test 
console.log(Triple.description);
console.log(Triple.calculate());  
console.log(Triple.calculate(6)); 

console.log(SquaredTriple.calculate(3)); 
console.log(SquaredTriple.description); 
console.log(SquaredTriple.longDescription); 
console.log(SquaredTriple.customName); 
