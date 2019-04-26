/*

//object literal with "new" and method Example 1 with "use strict"

class Cat {
    constructor(name, color) {
        this.name = name
        this.color = color
    }

    speak() {
        console.log("Meow")//method
    }
}
var cat1 = new Cat("Fluffy", "White");
var cat2 = new Cat("Spike", "Gray");
var cat3 = new Cat("Rover", "Purple");

console.log(cat1, cat2, cat3);
cat1.speak();

*/

/*

//ojbect constructor with "new" Example 2

function Friend(name, tshirtColor) {
    this.name = name;
    this.tshirtColor = tshirtColor;
}

var johnny = new Friend("Johnny", "Brown");
var connie = new Friend("Connie", "Orange");
var george = new Friend("George", "Blue" );
var greg = new Friend("Greg", "Black");

console.log(johnny.name, johnny.tshirtColor);
console.log(connie.name, connie.tshirtColor);
console.log(george.name,george.tshirtColor);
console.log(greg.name,greg.tshirtColor);

*/

/*
//Object with "new" & add and delete properties Example 3
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

var nissan = new Car("Nissan", "Muran", 2017, "purple");
nissan.engine = "V6";//new property added inline

var lexus = new Car("Lexus", "GS3000", 2009, "white");
lexus.engine = "V4";///new property added inline

var honda = new Car("Honda", "Accord", 2018, "blue");
honda.engine = "V6";///delete property inline
delete honda.year;

console.log(nissan.make, nissan.model, nissan.year, nissan.color, nissan.engine);

console.log(lexus.make, lexus.model, lexus.year, lexus.color, lexus.engine);

console.log(honda.make, honda.model, honda.year, honda.color, honda.engine);

*/
