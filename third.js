// OOP
// classes
// class - data type to an object
// class - blueprint for an object
// class - 1 to n objects

// Book - data type - custom data type
// attributes - title, price, pages
// methods on an object - 
class Book {
  constructor(title, price, pages) {
    // implict variable -> `this` - 8009
    this.title = title;
    this.price = price;
    this.pages = pages;
  }

  getDetails = () => {
    // arrow functions take the `this` value from the surrounding context in which they are defined and always remember it
    return `Book name: ${this.title}\nBook price: ${this.price}\nBook pages: ${this.pages}`;
  }

  /* getDetails() {
    // implict variable -> `this` - 8009, 8007
    // return 'Book name: ' + this.title + '\nBook price: ' + this.price + '\nBook pages: ' + this.pages;
    // template literals
    return `Book name: ${this.title}\nBook price: ${this.price}\nBook pages: ${this.pages}`;
  } */
}

// objects
const b1 = new Book('Book 1', 900, 1000); // data type - Book
/*
  Book name: Book 1
  Book price: 900
  Book pages: 1000
*/
/*
  Internally
  new -> 8009 address
  Book.constructor(8009, 'Book 1', 900, 1000)
*/

// console.log(b1.getDetails());
const func = b1.getDetails;
console.log(func()); // imagine react calling this handler function onClick

// Internally
// console.log(Book.getDetails(b1))


/* b1.title = 'Book 1';
b1.price = 900;
b1.pages = 1000; */

const b2 = new Book('Book 2', 670, 900); // data type - Book
/* b2.title = 'Book 2';
b2.price = 670;
b2.pages = 900; */

// console.log(b2.getDetails());
// Internally
// console.log(Book.getDetails(b2))

// console.log(b1, b2)

const b3 = new Book('Book 3', 670, 900); // data type - Book
// console.log(b3.getDetails());
/* b3.bookTitle = 'Book 3';
b3.price = 670;
b3.noOfPages = 900; */

// console.log(b3)