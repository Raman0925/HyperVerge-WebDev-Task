// forEachArray Function
function forEachArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

// mapArray Function
function mapArray(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

// filterArray Function
function filterArray(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

// Test the functions with examples
let numbers = [1, 2, 3, 4, 5];

// Test forEachArray
console.log("forEachArray results:");
forEachArray(numbers, function(number) {
    console.log(number);
});

// Test mapArray
console.log("mapArray results:");
let doubled = mapArray(numbers, function(number) {
    return number * 2;
});
console.log(doubled);

// Test filterArray
console.log("filterArray results:");
let evenNumbers = filterArray(numbers, function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers);
