let cart = [
    { Name: "Turmeric powder", Quantity: 100, price: 20 },
    { Name: "Sugar", Quantity: 100, price: 20 },
    { Name: "Wheat", Quantity: 100, price: 20 },
    { Name: "Rice", Quantity: 100, price: 20 }
];

function calculateTotalPrice(cart) {
    let totalPrice = 0;

    cart.forEach(element => {
        totalPrice += element.price * element.Quantity;
    });

    return totalPrice;
}

console.log(calculateTotalPrice(cart)); // Output: 8000
