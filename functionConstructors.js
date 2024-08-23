//function constructor

function Order(orderId,total,date){
    this.orderId = orderId;
    this.total = total;
    this.date = date;
    this.printReceipt = function(){
        console.log(`Receipt id :${this.orderId} total : ${this.total} date :${this.date}`)
    }
}

const myFirstOrder = new Order(1,190,"20.12.2024")
const mySecondOrder = new Order (2,220,"22.12.2024")

console.log(myFirstOrder)
console.log(mySecondOrder)