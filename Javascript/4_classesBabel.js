class Person {
    name = "Tony Stark";
    age = 52;


    printMyValues = () => {
        console.log(this.name);
        console.log(this.age);
    }
}

const person = new Person();
person.printMyValues();


console.log("-------------------------------------")

class IronMan extends Person {
    version = "Mark 42";
    age = 67;

    printVersion = () => {
        console.log(this.version);
    }
}

const ironman = new IronMan();
ironman.printMyValues();
ironman.printVersion();