function myName(name) { // way to declare a function
    console.log(name); 
}

myName('Madmax'); // calling a function

console.log("---------------------------------------")

// another way to define function is by using arrows: "=>". 
const myAnotherName = (name) => { // let and const are two ways to define a variable, "var" is not used from ES6 now
    console.log(name);
}

myAnotherName('Fury');


console.log("---------------------------------------")

let twoArguments = (name, age) => {
    console.log("My name:", name + "\t My age:", age); // "\t" is an escape character, it gives a spacing of a "tab" key. Another important escape character is "\n", takes things to "new line".
}

twoArguments('Holaa', 45);
/* 
This is the way to write multi-line comment in Javascript.
This is one line.
This is another line.
This is one another line.
*/

console.log("---------------------------------------")

const mutiplyNums = number => {
    return number * number * 3;
}

console.log("Number * Number * 3: ", mutiplyNums(4));


console.log("---------------------------------------")

const singleLine = (number, anotherNum) => number * anotherNum;
console.log("number * anotherNum: ", singleLine(3, 6));