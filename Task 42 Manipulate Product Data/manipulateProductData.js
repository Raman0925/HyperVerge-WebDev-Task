// Define an array of products
let products = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
    { id: 2, name: "Smartphone", price: 800, category: "Electronics" },
    { id: 3, name: "Coffee Maker", price: 150, category: "Home Appliances" },
    { id: 4, name: "Book", price: 8, category: "Books" },
    { id: 5, name: "Headphones", price: 100, category: "Electronics" },
    { id: 6, name: "Office Chair", price: 200, category: "Furniture" },
    { id: 7, name: "Desk Lamp", price: 45, category: "Furniture" },
    { id: 8, name: "Potato", price: 8, category: "Food" }

];

// Function to display products
const displayProducts = (products) => {
    products.forEach(product => {
        console.log(product.name, " - ", product.price);
    });
};

// Calculate prices with tax
const productsWithTax = products.map(product => {
    const tax = 0.1;
    let productTax = product.price * tax
    let ProductWithTax = product.price + productTax 
    return {
        ...product,
        price: ProductWithTax
    };
});

// Display products with tax
console.log("Products with Tax:");
displayProducts(productsWithTax);

const foodProducts = () => { products.filter((product) => {
     return {
        ...product,
       category : product.category === "food"}

})}


const affordableProducts = () =>
    {products.filter((product) => {
    // Check if the price of the current product is less than 10
    if (product.price < 10) {
        // Return the product object
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category
        };
    }
});}

const totalPriceCalculator = (products) => {
    let totalPrice = 0;
    products.forEach((product) => {
        totalPrice = totalPrice + product.price;
    });
    return totalPrice;
};


console.log(totalPriceCalculator(products))
displayProducts(affordableProducts)
