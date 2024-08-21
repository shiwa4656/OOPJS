//Create a class called Person.
class Person{
    #firstName;
    #lastName;
    constructor(firstName, lastName){
        this.#firstName = firstName;
        this.#lastName = lastName;
    }
    get  getFirstName(){
        return this.#firstName;

    }
    set setFirstName(firstName){
        this.#firstName = firstName
    }
    get  getLastName(){
        return this.#lastName;

    }
    set  setLastName(lastName){
        this.#lastName = lastName
    }
    introduce(){
        console.log(`Hello I am ${this.#firstName} ${this.#lastName}`)
    }

  
}

const testingPerson = new Person("shirwac, Shawah")

console.log(testingPerson.firstName)
console.log(testingPerson.lastName)

testingPerson.firstName = "shii";
testingPerson.lastName = "Sahah3wh"
testingPerson.introduce()