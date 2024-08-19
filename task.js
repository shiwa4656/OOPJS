//Create a class called Person.
class Person{
    //It should take in firstName and lastName arguments.
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    introduce(){
        console.log(`Hello I am ${this.firstName} ${this.lastName}`)
    }

}

const firstUser = new Person("Ola", "Nordmenn")

firstUser.introduce()