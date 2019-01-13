class Person { //  creating a class named "Person"
    constructor() { // constructor() is default function method 
        this.name = "Tony Stark";
        this.age = 52;

    }

    printMyValues() { // a method
        console.log(this.name);
        console.log(this.age);
    }
}

const person = new Person(); // assignning class to an instance of class
person.printMyValues(); // calling instance