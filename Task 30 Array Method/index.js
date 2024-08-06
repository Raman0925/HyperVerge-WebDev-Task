let numbers = [1,2,3,4,5,6,7,8,9];
numbers.forEach(element => {
    console.log(element)
    
});
numbers.forEach(element => {
    console.log(2*element)
    
});

numbers.map((element)=> {
    console.log(element**2)
})



// Iterate and Log Using forEach
console.log("Logging each number using forEach:");
numbers.forEach(function(number) {
    console.log(number);
});

console.log("Logging each number multiplied by 2 using forEach:");
numbers.forEach(function(number) {
    console.log(number * 2);
});

// Iterate and Create a New Modified Array Using map
console.log("Creating a new array with squared numbers using map (function expression):");
let squaredNumbers = numbers.map(function(number) {
    return number * number;
});
console.log(squaredNumbers);

console.log("Creating a new array with squared numbers using map (arrow function):");
squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers);

// Iterate and Create a New Filtered Array Using filter
console.log("Creating a new array with even numbers using filter (function expression):");
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers);

console.log("Creating a new array with even numbers using filter (arrow function):");
evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);
