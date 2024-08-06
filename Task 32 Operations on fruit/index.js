// Define and Initialize the Array
let fruits = ["apple", "banana", "cherry", "date"];

// Iterate and Log Using forEach
console.log("Logging each fruit name capitalized using forEach (function expression):");
fruits.forEach(function(fruit) {
    console.log(fruit.charAt(0).toUpperCase() + fruit.slice(1));
});

console.log("Logging each fruit name capitalized using forEach (arrow function):");
fruits.forEach(fruit => {
    console.log(fruit.charAt(0).toUpperCase() + fruit.slice(1));
});

// Calculate Total Characters Using forEach
let totalCharacters = 0;
fruits.forEach(function(fruit) {
    totalCharacters += fruit.length;
});
console.log("Total characters:", totalCharacters);

// Iterate and Create a New Modified Array Using map
console.log("Creating a new array with reversed fruit names using map (function expression):");
let reversedFruits = fruits.map(function(fruit) {
    return fruit.split('').reverse().join('');
});
console.log(reversedFruits);

console.log("Creating a new array with reversed fruit names using map (arrow function):");
reversedFruits = fruits.map(fruit => fruit.split('').reverse().join(''));
console.log(reversedFruits);

// Iterate and Create a New Filtered Array Using filter
console.log("Creating a new array with fruit names longer than 5 characters using filter (function expression):");
let longFruits = fruits.filter(function(fruit) {
    return fruit.length > 5;
});
console.log(longFruits);

console.log("Creating a new array with fruit names longer than 5 characters using filter (arrow function):");
longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);

// Create a New Filtered and Modified Array using filter() and map()
console.log("Creating a new array with fruits containing 'a' and converting them to uppercase using filter and map (function expression):");
let aFruitsUpper = fruits.filter(function(fruit) {
    return fruit.includes('a');
}).map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(aFruitsUpper);

console.log("Creating a new array with fruits containing 'a' and converting them to uppercase using filter and map (arrow function):");
aFruitsUpper = fruits.filter(fruit => fruit.includes('a')).map(fruit => fruit.toUpperCase());
console.log(aFruitsUpper);
