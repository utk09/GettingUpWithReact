const number = [1, 2, 3, 4]; // An array
const newNumber = [...number, 8, 7, 6, 5]; // "...number" takes values from "number" array and then get's appended to the numbers in "newNumber" array
console.log(newNumber);

console.log("----------------------------------------")

const number2 = [1, 2, 3, 4];
const newNumber2 = [number2, 8, 7, 6, 5]; // "number2" takes values from "number2" array and then get's appended to the numbers in "newNumber2" array as an array rather than continuation
console.log(newNumber2);

console.log("----------------------------------------")
console.log("----------------------------------------")


const person = {
    name: "Hulk"
};

const personAge = {
    ...person,
    age: 24
};

console.log(personAge);