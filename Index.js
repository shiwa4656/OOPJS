//Initial programing way before OOP
// Global scope variables for three coffee orders

// Order 1

let order1Id = 1;
let order1Type = "Latte"
let order1Quality = 2;
let order1Price = 5.0;

// order 2

let order2Id = 2;
let order2Type = "Espresso";
let order2Quality = 1;
let order2Price = 3.0;

// order 3

let order3Id = 3;
let order3Type = "Cappuccino";
let order3Quality = 3;
let order3Price = 4.5;

function displayOrders(orderID, orderType, orderQuality, orderPrice){
    console.log(`order information: ID =${orderID} type = ${orderType} quality = ${orderQuality} price = ${orderPrice}`)
}

displayOrders(order1Id, order1Type, order1Quality, order1Price)

// Modern Day OOP;

let order1 = {
    id : 1,
    type: "Latte",
    quality : 2,
    price : 5.0
}

let order2 ={
    id : 2,
    type: "Espresso",
    quality : 1,
    price : 3.0
}
let order3 ={
    id : 3,
    type: "capauccino",
    quality : 3,
    price : 4.5
}

function displayOrdersInOP(order){
    console.log(`order information : id = ${order.id}, type = ${order.type}, quality = ${order.quality}, price = ${order.price}`)
}

displayOrdersInOP(order1)
