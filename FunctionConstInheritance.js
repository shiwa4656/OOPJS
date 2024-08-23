function Order(orderId, total, date) {
    this.orderId = orderId, 
    this.total = total, 
    this.date = date;
  }
  
  // attach to the prototype of Order
  Order.prototype.printReceipt = function () {
    console.log(
      `Receipt Id: ${this.orderId}, Date: ${this.total} Total: ${this.date}`
    );
  };
  
  function CoffeeOrder(qty, orderId, total, date) {
    Order.call(this, orderId, total, date);
    this.qty = qty;
  }
  
  CoffeeOrder.prototype = Object.create(Order.prototype);
  
  CoffeeOrder.prototype.printCoffeeReceipt = function () {
    // defines it's own methods (child)
    console.log(
      `Receipt Id: ${this.orderId}, Date: ${this.total} Total: ${this.date}`
    );
  };
  
  const myFirstCoffeeOrder = new CoffeeOrder(5,1, 190, "10-30-2023");
  const mySecondCoffeeOrder = new CoffeeOrder(8,2, 70, "11-30-2023");
  
  console.log(myFirstCoffeeOrder);
  console.log(mySecondCoffeeOrder);
  
  myFirstCoffeeOrder.printCoffeeReceipt()
  myFirstCoffeeOrder.printReceipt()