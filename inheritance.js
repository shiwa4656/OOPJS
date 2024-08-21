//parent class
class Order {
    #orderId;
    #customerName;

    constructor (orderId, customerName){
        this.#orderId = orderId;
        this.#customerName = customerName
    }
    get getOderId(){
        return this.#orderId
    }
    set setOrderID (orderid){
        this.#orderId = orderid
    }
    get getCustomerName(){
        return this.#customerName
    }
    set setOrderID (customerName){
        this.#customerName = customerName
    }
    //common method for all orders
    printOrderDetails(){
        console.log(`Processing order #${this.orderId} for ${this.customerName}.`)
    }

}
// CoffeeOrder child class
class CoffeeOrder extends Order {
    #qty;
    #type;
  
    constructor(orderId, customerName, qty, type) {
      super(orderId, customerName); // Calls the constructor of the parent class (Order)
      this.#qty = qty;
      this.#type = type;
    }
  
    // Getter and Setters ... omitted for brevity
  
    // Method unique to CoffeeOrder
    printCoffeeDetails() {
      console.log(`Coffee Order: ${this.qty} x ${this.type}`);
    }
  }
  
  // WineOrder child class
  class WineOrder extends Order {
    #bottleCount;
    #wineType;
  
    constructor(orderId, customerName, bottleCount, wineType) {
      super(orderId, customerName); // Calls the constructor of the parent class (Order)
      this.#bottleCount = bottleCount;
      this.#wineType = wineType;
    }
  
    // Getter and Setters ... omitted for brevity
  
    // Method unique to WineOrder
    printWineDetails() {
      console.log(`Wine Order: ${this.bottleCount} bottles of ${this.wineType}`);
    }
  }
  
  // Example usage
  const generalOrder = new Order(1, 'Alice');
  generalOrder.printOrderDetails(); // Order Number: 1, Customer Name: Alice
  generalOrder.processOrder(); // Processing order #1 for Alice.
  
  const coffeeOrder = new CoffeeOrder(2, 'Bob', 3, 'Latte');
  coffeeOrder.printOrderDetails(); // Order Number: 2, Customer Name: Bob (inherited method)
  coffeeOrder.processOrder(); // Processing order #2 for Bob. (inherited method)
  coffeeOrder.printCoffeeDetails(); // Coffee Order: 3 x Latte (unique method)
  
  const wineOrder = new WineOrder(3, 'Charlie', 5, 'Merlot');
  wineOrder.printOrderDetails(); // Order Number: 3, Customer Name: Charlie (inherited method)
  wineOrder.processOrder(); // Processing order #3 for Charlie. (inherited method)
  wineOrder.printWineDetails(); // Wine Order: 5 bottles of Merlot (unique method)
  
  // Using getters and setters for CoffeeOrder
  coffeeOrder.qty = 4;
  coffeeOrder.type = 'Espresso';
  console.log(`Updated Coffee Order: ${coffeeOrder.qty} x ${coffeeOrder.type}`); // Updated Coffee Order: 4 x Espresso
  
  // Using getters and setters for WineOrder
  wineOrder.bottleCount = 6;
  wineOrder.wineType = 'Chardonnay';
  console.log(`Updated Wine Order: ${wineOrder.bottleCount} bottles of ${wineOrder.wineType}`); // Updated Wine Order: 6 bottles of Chardonnay
  