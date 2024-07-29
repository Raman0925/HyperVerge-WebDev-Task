function doubleNumber(num1){
    return 2*num1
}
function squareNumber(num1){
    return num1*num1
}
incrementNumber 
function incrementNumber(num1 ){
    return num1+1
}

function performOperation(num,operation){
    let result= operation(num);
    return result;
}

console.log(performOperation(5,doubleNumber))
console.log(performOperation(5,squareNumber))
console.log(performOperation(5,incrementNumber))
