function addNumbers(a,b){
    return a+b;
}
function multiplyNumbers(a,b){
    return a*b;
}
function divideNumbers(a,b){
    return a/b;
}
function subtractNumbers(a,b){
    return a-b;
}
function performArithmetic(num1,num2,callback){
    let result = callback(num1,num2);
    return result
}

console.log(performArithmetic(5,3,addNumbers))
console.log(performArithmetic(5,3,multiplyNumbers))
console.log(performArithmetic(5,3,divideNumbers))
console.log(performArithmetic(5,3,subtractNumbers))



