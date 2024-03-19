//Write a “person” class to hold all the details.
class Person {
    constructor(firstName, lastName, age, gender, interests) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    bio() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old. I like ${this.interests.join(' and ')}.`;
    }

    greeting() {
        return `Hello! I'm ${this.firstName+" "+this.lastName}.`;
    }
}
// Example usage
let person1 = new Person('Gokul','Krishnan', 30, 'male', ['Reading', 'Dancing']);
console.log(person1.bio()); 
console.log(person1.greeting()); 

class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute, bookingFee) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
        this.bookingFee = bookingFee;
    }

    calculatePrice(distance, duration) {
        const fare = this.baseFare + (distance * this.costPerMile) + (duration * this.costPerMinute);
        return fare + this.bookingFee;
    }
}

const calculator = new UberPriceCalculator(3.5, 0.5, 1.5, 3.2);
const distance = 30; 
const duration = 15; 
const totalPrice = calculator.calculatePrice(distance, duration);
console.log(`Total Price: $${totalPrice.toFixed(2)}`);



