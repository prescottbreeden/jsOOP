/*

:...............................:
:                               :
:             JS OOP            :
:                               :
:...............................:

*/


function personConstructor(name, age) {
    const person = {};
    person.name = name;
    person.age = age;
    
    
    person.greet = function(){
        console.log("Hello my name is " + person.name + " and I am " + person.age + " years old!");
    }
    
    return person;
}

const steve = personConstructor("Steve", 27);
steve.greet();

const anika = personConstructor("Anika", 33);
anika.greet();

const emily = personConstructor("Emily", 22);
emily.greet = function() {
    console.log("I am the greatest, ever!");
};
emily.greet();

//--------//
//-- or --//
//--------//

class personConstructor2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.greet = function () {
            console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
        };
    }
}

const anika2 = new personConstructor('Anika', 33);
anika2.greet();
console.log(anika2);

const emily2 = new personConstructor("Emily", 22);
emily2.greet = function() {
    console.log("My name is " + this.name + " and I'm the coolest ever!");
}


//===============//
//--- Privacy ---//
//===============//

class Person {
    constructor(name, age) {
        const privateVariable = "This variable is private";
        const privateMethod = function () {
            console.log(this);
        };
        this.name = name;
        this.age = age;
        this.greet = function () {
            console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
        };
    }
}
const eliza = new Person("Eliza", 48);
console.log(eliza.privateVariable);
// undefined!

class Person2 {
    constructor(name, age) {
        const privateVariable = "This variable is private";
        const privateMethod = function () {
            console.log(this);
        };
        this.name = name;
        this.age = age;
        this.greet = function () {
            console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
            console.log("Also my privateVariable says: " + privateVariable);
            privateMethod();
        };
    }
}
const joe = new Person2("Joe", 23);
joe.greet();
// this in private method refers to window still because when we call on the method from outside the class it's new scope is the window

class Person3 {
    constructor(name, age) {
        const self = this;
        const privateVariable = "This variable is private";
        const privateMethod = function () {
            console.log("this is a private method for " + self.name);
            console.log(self);
        };
        this.name = name;
        this.age = age;
        this.greet = function () {
            console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
            console.log("Also my privateVariable says: " + privateVariable);
            privateMethod();
        };
    }
}
const joe2 = new Person3("Joe", 23);
joe2.greet();

