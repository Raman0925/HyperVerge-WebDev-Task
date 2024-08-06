// Define and Log the colors Array
let colors = ["red", "green", "blue"];
console.log("First element:", colors[0]);

// Modify and Add color elements
colors[1] = "yellow";
console.log("Second element after modification:", colors[1]);

colors.push("purple");
console.log("Last element after adding a new color:", colors[colors.length - 1]);

// Iterate using Loops over the colors Array
console.log("Using for loop:");
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

console.log("Using while loop:");
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

console.log("Using for...of loop:");
for (let color of colors) {
    console.log(color);
}

// Check Array Properties
console.log("Type of colors:", typeof colors);
console.log("Length of colors array:", colors.length);

// Array Methods
colors.push("orange");
console.log("After push:", colors);

colors.pop();
console.log("After pop:", colors);

console.log("Index of 'blue':", colors.indexOf("blue"));

// Add and Iterate Over Properties
colors.owner = "Your Name";
console.log("Colors array with owner property:", colors);

console.log("Using for...in loop to iterate over properties:");
for (let property in colors) {
    console.log(`${property}: ${colors[property]}`);
}
