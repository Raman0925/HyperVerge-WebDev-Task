function areaOfRectangle(length,width){
     return length*width;

}
function areaOfCircle(radius){
    return 3.14*radius*radius;

}
function areaOfTriangle(base,height){
    return 0.5*base*height;

}

function calculatePaintingCost(dimesion1,dimension2,calculateArea){
    const costPerUnit = 2; 
    const area = calculateArea(dimesion1,dimension2) 
    const totalCost = costPerUnit*area;
    return totalCost;
}

console.log(calculatePaintingCost(5,10,areaOfRectangle));
console.log(calculatePaintingCost(3,null,areaOfCircle));
console.log(calculatePaintingCost(6,8,areaOfTriangle))




