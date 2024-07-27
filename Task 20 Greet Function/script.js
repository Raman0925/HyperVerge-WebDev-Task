function greet(name){
    var message = "Hello, " + name +"!";
    return  message;

}
console.log(greet("Raman"));


function GreetDefault(name ="Guest"){
    var message = "Hello, " + name +"!";
    return  message;

}
console.log(GreetDefault());

var greetfunction = function (name){
    var message = "Hello, " + name +"!";
    return  message;

}

console.log(greetfunction("Raman"))


var name = "Raman";
const greetArrow = (name) =>{
    var message = "Hello, " + name +"!";
    return  message;
    
}
console.log(greetArrow("Raman"));