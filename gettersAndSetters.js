class Order{
    #orderId;
    #total;
    #date;

    constructor(orderId,total, date){
        this.#orderId = orderId;
        this.#total = total;
        this.#date= date;
    }
    //getters for orderID
    get orderId (){
        return this.#orderId
    }

    //setters for orderId
    set orderId(newOrderId){
        this.#orderId = newOrderId;
    }

    //getters for total
    get total (){
        return this.#total;
    }
    //setter for total
    set total(newTotal){
        if(newTotal >= 0){
           this.#total = newTotal
        }else {
            console.log("total can not be negative ")
        }
    }
    //getter for date
    get date (){
        return this.#date;
    }
    set date (date){
        this.#date= date;
    }
    addTax(){
        this.#total += this.#total*0.2
    }
    printReceipt(){
        this.addTax()
        console.log(`Receipt id: ${this.#orderId}, total : ${this.#total}, date :${this.#date}`)    
    }
}

//example usage
const order = new Order(1,123, "11.10.2024")
console.log(order.orderId)
console.log(order.total)
console.log(order.date)

order.total = 120;
order.date = '2023-07-01';
	
order.printReceipt();