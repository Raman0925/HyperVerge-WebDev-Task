
let temperatures = [-3, 14, 22, 5, -10];

console.log("Logging each temperature using forEach (function expression):");
temperatures.forEach(function(temperature) {
    console.log(temperature);
});

console.log("Logging each temperature using forEach (arrow function):");
temperatures.forEach(temperature => {
    console.log(temperature);
});

console.log("Logging each temperature in Fahrenheit using forEach (function expression):");
temperatures.forEach(function(temperature) {
    console.log((temperature * 9/5) + 32);
});

console.log("Logging each temperature in Fahrenheit using forEach (arrow function):");
temperatures.forEach(temperature => {
    console.log((temperature * 9/5) + 32);
});

// Iterate and Create a New Modified Array Using map
console.log("Creating a new array with temperatures in Fahrenheit using map (function expression):");
let temperaturesInFahrenheit = temperatures.map(function(temperature) {
    return (temperature * 9/5) + 32;
});
console.log(temperaturesInFahrenheit);

console.log("Creating a new array with temperatures in Fahrenheit using map (arrow function):");
temperaturesInFahrenheit = temperatures.map(temperature => (temperature * 9/5) + 32);
console.log(temperaturesInFahrenheit);

// Iterate and Create a New Filtered Array Using filter
console.log("Creating a new array with below freezing temperatures using filter (function expression):");
let belowFreezing = temperatures.filter(function(temperature) {
    return temperature < 0;
});
console.log(belowFreezing);

console.log("Creating a new array with below freezing temperatures using filter (arrow function):");
belowFreezing = temperatures.filter(temperature => temperature < 0);
console.log(belowFreezing);
