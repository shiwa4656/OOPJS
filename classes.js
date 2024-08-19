class order  {
    //fields
    orderId;
    total;
    date;
    //constructor
    constructor(orderId, total, date) {
        this.orderId = orderId;
        this.total = total;
        this.date = date
    }

    // methods
    printReceipt(){
        console.log(`Receipt ID : ${this.orderId}, Date ${this.date}, total : ${this.total}`)
    }

}
const myFirstOrder = new order(1,190, "11.10.2025")
const mySecondOrder = new order(2, 200, "11.10.2024")


// PracticaL example

class User{
    language = "Norwegian"
    constructor(firstName, LastName){
        this.firstName = firstName;
        this.LastName = LastName
    }
    greetUser(){``
        console.log(`Hello ${this.firstName} ${this.LastName}! language: ${this.language}`)
    }

}

const newUser = new User("ola", "Nordmenn")
	// Logs "Hello Ola Nordmann! Language: Norwegian"
    newUser.greetUser()

//Second practical Example

class ShoppingCart {
    cart = [];
  
    constructor(shopName, currency) {
      this.shopName = shopName;
      this.currency = currency;
    }
  
    /** Adds the item to the cart **/
    addToCart(item) {
      this.cart.push(item);
    }
  
    /** Removes the item from the cart **/
    removeFromCart(item) {
      const idToFind = item.id;
      // Find the index to remove
      const indexToRemove = this.cart.findIndex(
        (currentItem) => currentItem.id === idToFind
      );
      // If the index is -1 then it means no item was found, so
      //    we return null to break out of the function
      if (indexToRemove === -1) {
        return null;
      }
      // Filter the items and remove the item that matches our index
      const newCart = this.cart.filter((item, index) => index !== indexToRemove);
      // Set the cart to cart without the item by spreading out the array
      this.cart = [...newCart];
    }
  
    /** Calculates the total cost of items in the cart **/
    calculateTotalCost() {
      const totalCost = this.cart.reduce((total, item) => {
        total += item.price;
        return total;
      }, 0);
      return totalCost;
    }
  
    /** Displays the items in the cart **/
    displayCart() {
      console.log("Your cart:");
      console.log("-------------------");
      this.cart.forEach((item) => {
        console.log(item.title);
      });
      console.log("===================");
    }
  
    /** Displays the total cost of the items in the cart **/
    displayTotalCost() {
      console.log("Total items: ", this.cart.length);
      console.log("The total of the cart is:", this.calculateTotalCost());
    }
  }
  
  const myCart = new ShoppingCart("Norway Bakery", "USD");
  
  const cookies = { id: 23, title: "Chocolate Chip Cookies", price: 20.0 };
  const cake = { id: 45, title: "Vanilla Cake", price: 30.0 };
  
  myCart.addToCart(cookies); // Add an item
  myCart.addToCart(cookies); // Add an item
  myCart.addToCart(cake); // Add an item
  myCart.displayCart(); // Display the cart
  myCart.removeFromCart(cookies); // Remove an item
  myCart.displayCart(); // Display the cart
  myCart.displayTotalCost(); // Display total cost of the cart