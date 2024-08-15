const bookstoreInventory = [
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 18.99,
      quantity: 34
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      price: 15.99,
      quantity: 50
    },
    {
      id: 3,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: 12.99,
      quantity: 22
    },
    {
      id: 4,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 14.99,
      quantity: 15
    },
    {
      id: 5,
      title: 'Moby-Dick',
      author: 'Herman Melville',
      price: 17.50,
      quantity: 10
    },
    {
      id: 6,
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      price: 22.00,
      quantity: 8
    },
    {
      id: 7,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      price: 16.00,
      quantity: 29
    },
    {
      id: 8,
      title: 'Brave New World',
      author: 'Aldous Huxley',
      price: 13.99,
      quantity: 40
    }
  ];
  
  class Book {
    constructor(id, title, author, price, quantity) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.price = price;
      this.quantity = quantity;
    }
   
  } 
  const displayBooks = () => {
    bookstoreInventory.forEach(book => {
      console.log(`${book.title} - ${book.author} ($${book.price.toFixed(2)})`);
    });
  }
  const addBook = (id, title, author, price, quantity) => {
    const newBook = new Book(id, title, author, price, quantity);
    bookstoreInventory.push(newBook);
    console.log(`Book with id ${id} has been added.`);
  }
  

  const updateBookWithMap = (id, newQuantity) => {
    bookstoreInventory = bookstoreInventory.map(book => 
      book.id === id ? { ...book, quantity: newQuantity } : book
    );
    console.log(`Book with id ${id} has been updated using map.`);
  }

 const  removeBook = (id)   => {
    bookstoreInventory = bookstoreInventory.filter(book => book.id !== id);
    console.log(`Book with id ${id} has been removed.`);
  }