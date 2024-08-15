// Define an array called inventory
let inventory = [
    {
        id: 1,
        name: 'Laptop',
        price: 999.99,
        quantity: 10,
    },
    {
        id: 2,
        name: 'Wireless Mouse',
        price: 29.99,
        quantity: 50,
    },
    {
        id: 3,
        name: 'Smartphone',
        price: 699.99,
        quantity: 20,
    },
    {
        id: 4,
        name: 'Office Chair',
        price: 149.99,
        quantity: 15,
    },
    {
        id: 5,
        name: 'Bluetooth Headphones',
        price: 79.99,
        quantity: 25,
    }
];

// Create the Product class
class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

// Define the displayProducts function
function displayProducts() {
    inventory.forEach(product => {
        console.log(`${product.name} - $${product.price.toFixed(2)} (${product.quantity})`);
    });
}

// Define the addProduct function
function addProduct(id, name, price, quantity) {
    const newProduct = new Product(id, name, price, quantity);
    inventory.push(newProduct);
    console.log(`${name} has been added to the inventory.`);
}

// Define the updateProduct function
function updateProduct(id, quantity) {
    const product = inventory.find(item => item.id === id);
    if (product) {
        product.quantity = quantity;
        console.log(`Quantity of ${product.name} updated to ${quantity}.`);
    } else {
        console.log(`Product with id ${id} not found.`);
    }
}

// Define the updateProductWithMap function
function updateProductWithMap(id, newQuantity) {
    inventory = inventory.map(product =>
        product.id === id ? { ...product, quantity: newQuantity } : product
    );
    console.log(`Product with id ${id} has been updated using map.`);
}

// Define the removeProduct function
function removeProduct(id) {
    inventory = inventory.filter(product => product.id !== id);
    console.log(`Product with id ${id} has been removed from the inventory.`);
}

// Example usage

