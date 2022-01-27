// This 
// Goals: 
// explain .call
// explain .bind 
// use .call and .bind to reassign the value of "this"

const cat = {
    name: 'Blue',
    breed: 'Scottish Fold', 
    dance: function(dance){
        console.log('This is:', this);
        console.log(`Meow, I am ${this.name} and I like to ${dance}.`
        );
    }
}
// "This" will be set to whatever is to the left of the dot. 
// cat.dance('salsa'); //This refers to cat.

const bluesDance = cat.dance;
bluesDance('salsa') //"this" in this case is the window object, not the cat object
//This (ugh) happens because when you call a function on nothing in JavaScript it gets called on the global object.
// In the browser the global is window.
// In NodeJS, the globa is global.

// alert("Hi!");
// window.alert("Hi!"); //same thing

//The window object actually has a "name" on it, of "".

// Strict Mode: 
class Cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    dance(danceType) {
        console.log('This is:', this);
        console.log(`Meow, I am a ${this.breed} and I like to ${danceType}`)
    }
}

const rocket = new Cat('rocket', 'tabby');
rocket.dance('tango');
// const rocketDance = rocket.dance; 
// rocketDance('tango'); //TypeError: cannot read 'breed'
//Classes run in 'strict mode', though strict mode can be used anywhere.

// call(): specifies what value of "this" should be when you call a function
// let fDance = fluffy.dance;
// fDance.call(fluffy, "tango"); //here, "fluffy" would provide the value for "this"

// const dog = {
//     breed : 'Black Lab',
//     name : 'Elton',
// };

// blueDance.call(dog, 'hip hop dance'); //calls dance on dog, even though dog doesn't have dance
// call is a method on a function

// bind is also a method that can be used on a function: 
// Bind "perma-bind"s a function to a context
// bDance('waltz'); //won't work
// const boundDance = bDance.bind(blue);

// Use cases for bind:

// myBtn.addEventListner("click", fluffy.dance); Here, this won't be what we expect. 
// myBtn.addEventListner("click", fluffy.dance.bind(target)); This will get us what we want, assuming correct target.
// Bind returns a new function where the argument is already baked in.

// Arrow functions and this: 
const greeter = {
    msg : "I like chickenz",
    sayHi: () => {
        alert(this.msg);
    }
}

// greeter.sayHi() returns undefined
//Arrow functions do not create their own this.
//For this reason it's not recommended to use arrow functions on objects.
//You can bind this to the callback: callback.bind(this)