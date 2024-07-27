// Define the higher-order function
function higherOrderFunction(num, callback) {
    callback(num);
}

// Define the callback function
function callbackFunction(number){
    console.log(number);
}
function callbackFunction2(number){
    console.log(number*number);
}
function callbackFunction3(num1,num2){
    console.log(num1+num2);
}

// Call the higher-order function with a number and the callback function
higherOrderFunction(5, callbackFunction);
higherOrderFunction(10, callbackFunction);
higherOrderFunction(4, callbackFunction2);

function newHigherOrderFunction(num1,num2,callback){
    callback(num1,num2)
}
newHigherOrderFunction(4,10,callbackFunction3);


