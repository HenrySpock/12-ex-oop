class Vehicle {  
    constructor(make, model, year) {  
        console.log('Inside vehicle constructor.')
        console.log("You made a new vehicle!");
        console.log(make, model, year);
         
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep."
    }
    toString() {
        return `The vehicle ia a ${this.make} ${this.model} from ${this.year}.`
    }
}  

class Car extends Vehicle{ //
    constructor(make, model, year) {  
        console.log('Inside car constructor.')
        super(make, model, year);   
    }
    numWheels(){  
        return 4;
    }     
}

class Motorcycle extends Vehicle{ //
    constructor(make, model, year) {  
        console.log('Inside motorcycle constructor.')
        super(make, model, year);   
    }
    numWheels(){  
        return 2;
    }     
    revEngine(){
        return "VROOM!!!";
    }
}

class Garage {  
    
    constructor(capacity) {  
        this.servicing = []; 
        this.capacity = capacity; 
        console.log('Inside garage constructor.')
        console.log("You made a new garage!");
        console.log(`We can service ${5} vehicles at a time.`);
    }
    add(vehicle){
        if (this.servicing.length >= 5) {
            return "Ain't no room at the inn, bub."
        }
        if (!(vehicle instanceof Vehicle)){
            return "This ain't that kinda place!"
        } 
        this.servicing.push(vehicle);
        return `${vehicle} added!`;

    }
    vehicles(){
        console.log(this.servicing);
    }
    capacity(){
        return this.capacity;
    }
}  