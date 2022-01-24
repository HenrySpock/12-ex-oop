let o1 = {};
let o2 = new Object();

o1.name1 = "Whiskey";
o1["name2"] = "Gin";

const color = 'teal';
const obj = {};
obj.color = '#3723FF'; //adds a new property with the key of color
obj[color] = '#3723FF'; //hear, const color 'teal' is passed in, notice, color is not in quotes
//{color: '#3723FF', teal: '#3723FF'}
obj['color2'] = '#3723FF'; //here, color2 is indeed set to the number without a pass in

// Retrieving information:
// Object.keys();
// Object.values();
// Object.entries();
Object.keys(obj); //['color', 'teal', 'color2']
Object.values(obj); // ['#3723FF', '#3723FF', '#3723FF']
Object.entries(obj); 
// [ ['color', '#3723FF'], 1: (2) ['teal', '#3723FF'], 2: (2) ['color2', '#3723FF'] }
// You can iterate over Object.keys(), Object.values() and Object.entries(). 

// If you try to access a property that does not exist in an object you don't get an error, you get undefined.
// Any time you add a key to an object it's stringified.

// We can add functions as keys to an object:
o1.sayHi = function() {return "Hi!"};
o1.sayHi(); // Hi!

// We can use objects to groups method together. 

// const add = (x, y) => x + y;
// const mult = (x, y) => x * y;
// const square = (x) => x * x;
// const power = (x, y) => x ** y;

// const myMath = {};
// myMath.add = add;
// myMath.mult = mult;
// myMath.square = square;
// myMath.power = power;

// or:
// const myMath = {add, mult, square, power}; 

// Or do it inline: 

// const myMath = {
//     add: function(x, y) {
//     return x + y;
//     },
//     mult: function(x, y) {
//     return x * y;
//     },
//     square: function(x) {
//     return x * x;
//     },
//     power: function(x, y) {
//     return x ** y;
//     }
// }

// Or shorthand: 
const myMath = {
    add(x,y) {
        return x+y;
    },
    mult(x,y) {
        return x*y;
    },
    square(x) {
        return x*x;
    },
    power(x,y) {
        return x**y;
    }
}

// Making a set:
const s = new Set()
// Gives an object with standard properties/methods; When we work with Math object we never 
// instantiate it, whereas here we are making a new object.

// This: 
function getHypotenuse(a,b){
    return Math.sqrt((a ** 2) + (b ** 2));
}
function getArea(a, b) {
    return (a * b) / 2;
}

// const side1 = 4;
// const side2 = 3;
// const side3 = getHypotenuse(side1, side2);

// const area = getArea(side1, side2);

// We could create an object that has these functions:

let triangle = {
    a: 3, 
    b: 4,
    getArea: function() {
        return (this.a * this.b) / 2;
    },
    getHypotenuse: function(){
        return Math.sqrt((this.a ** 2) + (this.b ** 2));
    }
}
// Functions in above object don't have any arguments, they are referenced by 
// "this" which looks them up in the object's scope. 

// const rightTriangle = {
//     a: 9,
//     b: 12,
//     getArea: function() {
//         return (this.a * this.b) / 2;
//     },
//     getHypotenuse: function() {
//         return Math.sqrt((this.a ** 2) + (this.b ** 2));
//     }
// }

// Above could be written:
const rightTriangle = {
    a: 9,
    b: 12,
    getArea() {
        return (this.a * this.b) / 2;
    },
    getHypotenuse() {
        return Math.sqrt((this.a ** 2) + (this.b ** 2));
    }
}

// The two above can *not* be written with arrow functions because it will cause "this" to behave differently.
// How do we make a repeatable pattern for, in this case, multiple triangles?

// Constructor functions:

// constructor functions have uppercase first letter:
// function Triangle(a,b) {
//     this.a = a;
//     this.b = b;
//     this.getArea = function() {
//         return this.a * this.b / 2;
//     };
//     this.getHypotenuse = function() {
//         return Math.sqrt((this.a ** 2) + (this.b ** 2));
//     };
// } //Remember, this is *not* an object like the previous example, this is a function.
// // To initialize a constructor function we use the "new" operator:
// const t1 = new Triangle(3, 4);
// const t2 = new Triangle(9, 12);
// t1.getHypotenuse() //5
// t2.getHypotenuse() //15

// When you call a function with New, it creates a blank object and passes it the "this" context;
// returns this if we don't return our own object.
// Classes provide a cleaner, easier syntax for the above. 

// Prototypes in JavaScript:
// A lot of the available methods are on the "prototype"
// Prototype is an object that contains the functionality of the element in question
// You can in fact add things to the prototype

// Array.prototype.push = function(val){
//     console.log(`SO YOU WANT TO ADD ${val}??`);
//     console.log("Sorry, don't feel like it.");
// }

// The only time you might consider actually changing the prototype is with polyfills: 
// How do we utilize prototype for constructor functions of our own? 
// Triangle.prototype.getArea = function() {
//     return this.a * this.b / 2; 
// };
// Triangle.prototype.getHypotenuse = function() {
//     return Math.sqrt((this.a ** 2) + (this.b ** 2));
// };

// Using classes alleviates the need for prototypes. 

// Classes: 
// Creating patterns for objects
class Triangle { //class objects are templates for instancing *from*; capitalized so we know it's a class
    constructor(a, b, c) { //The constructor is *automatically run.* Notice constructor is purple where as the other methods
        //greet, getArea and display are blue. Here, the constructor takes 3 arguments passed from the 
        //instantiation of the Triangle with new
        console.log('Inside triangle constructor.')
        console.log("You made a new triangle!");
        console.log(a, b, c);
        for (let side of [a,b,c]){
            if (!Number.isFinite(side) || side <= 0){
                throw new Error("Sides must be positive numbers!");
            }
        }
        
        //     //You never *return* a value from a constructor, it stops the execution of the constructor but completes instantiation.
        //     throw new Error("Sides must be positive numbers!");
        // }
        // if(Number.isFinite(b) || b <= 0){
        //     throw new Error("Sides must be positive numbers!");
        // }
        // if(Number.isFinite(c) || c <= 0){
        //     throw new Error("Sides must be positive numbers!");
        // }
        this.a = a;
        this.b = b; 
        this.c = c;
    }
    greet() {
        console.log('HELLO FROM TRIANGLE!!!');
    }
    getArea() {
        const {a, b, c} = this;
        const s = (a+b+c)/2;
        return Math.sqrt(s*(s-a)*(s-b)*(s-c));
    }
    display() {
        console.log(`I am a triangle with sides ${this.a}, ${this.b}, and ${this.c}.`)
    }
    getArea() {
     const {a,b,c} = this;
     const s = (a+b+c)/2;
     return Math.sqrt(s * (s-a)*(s-b)*(s-c));   
    }
    isBig(){ //Here we are calling another method from inside the class, getArea(). "This" is 
        //required, otherwise it's checking outside the scope for getArea(), which would not exist.
        return this.getArea() > 50;
    }
} //This refers to the instance, not the class.

const firstTri = new Triangle(3,4,154);
// firstTri.a = 3; //these are added to the instance object, not the class template
// firstTri.b = 4;
// firstTri.c = 154;
const secondTri = new Triangle(9,12,254);
// secondTri.a = 9;
// secondTri.b = 12; //manually adding data like this is not ideal, it would be better to be able 
// firstTri.c = 254; // to pass this in; this happens with Constructors


// Validating data: 

// Methods - has a property on an object; when refering to classes they are instance methods
// "This" accesses the instance. 

const t1 = new Triangle(3,4,5);
const t2 = new Triangle(5, 9, 10);
const t3 = new Triangle(30,40,50);
t1.display();

t1.isBig(); //false
t2.isBig(); //false
t3.isBig(); //true

//Extends, Inheritance and Super: 

class RightTriangle extends Triangle{ //
    constructor(a, b, c) {  
 
        if (a*a + b*b !== c*c){
            throw new Error('Invalid C side for right triangle!')
        }
        console.log('Inside right triangle constructor.')
        super(a,b,c); //Calls the whole constructor, such that the rest of the constructor
        //doesn't need to be duplicated here.
        //Super is "superclass" of triangle, RightTriangle is thus a subclass.
        //a,b,c must be passed into the superclass-constructor, otherwise they are undefined.
        //This thus comes from the subclass.
        this.hypot = c; //It is also common to add properties to a subclass/extends.
        //Right triangles constructed here would thus have 4 properties instead of 3.

    }
    isRightTriangle(){ //notice this method only exists for RightTriangle class.
        return true;
    }
    display() { //Notice this exists for super and sub, but the subclass overwrites the superclass here.
        console.log(
            `Right Triangle with sides of ${this.a}, ${this.b}, ${this.c}.`
        )
        // You can also call the method of super:
        // display() {
        //     return 'Right ' + super.display();
        // }
        //for the above to work, console.log in the super class display() would have to be changed to "return."
    }
    
}

// const myRightTriangle = new RightTriangle(3,4,5)

