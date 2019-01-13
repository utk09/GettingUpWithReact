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

// Let us now see inheritance of classes

console.log("-------------------------------------")

class IronMan extends Person { // extends is a keyword
    constructor() {
        super(); // super is special way to call the parent class from where values are inherited
        this.version = "Mark 42";
        //  this.age = 67; // Uncomment this when you run this for the second time, it actually assigns new values to "age"
    }

    printVersion() {
        console.log(this.version);
    }
}

const ironman = new IronMan();
ironman.printMyValues();
ironman.printVersion();