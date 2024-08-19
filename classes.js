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


    