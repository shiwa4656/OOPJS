class Order {
    #orderId;
    constructor(orderId, total, date){
        this.#orderId = orderId;
        this.total = total
        this.date = date

    }
    #addTax(){
        this.total += this.total*0.2
    }
    printReceipt(){
        this.#addTax()
        console.log(`receipt id : ${this.#orderId}, total : ${this.total}, date : ${this.date}`)
    }
}

const myOrder = new Order( 1,70, "12.12.2020" )

console.log(myOrder.printReceipt())