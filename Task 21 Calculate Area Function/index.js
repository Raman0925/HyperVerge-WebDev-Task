function calculateArea(width,height){
    return width*height;
}
console.log(calculateArea(5,10));

function calculateAreaDefault(width=1,height=1){
    return width*height;
}
console.log(calculateAreaDefault(5,10));
console.log(calculateAreaDefault());

var area = function(width,height){
    return width*height;
}
console.log(area(5,10))

const calculateAreaArrow = (width,height)=>{
    return width*height;

 }
console.log(calculateAreaArrow(5,10));