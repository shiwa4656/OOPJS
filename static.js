class User {
    constructor(name) {
      this.name = name;
    }
  
    // This method is available to all instances of a class
    greetUser() {
      console.log(`Hello ${this.name}!`);
    }
  
    static company = "Acme";
  
    // This method is available only on the User class itself
    static displayTime() {
      console.log("12:00");
    }
  }
  
  const newUser = new User("Ola Nordmann");
  
  // This is called on the new instance of the class
  newUser.greetUser();
  // Logs:
  // Hello Ola Nordmann
  
  // The static property 'company' is only available on the class itself
  console.log(User.company);
  // Logs:
  // Acme
  
  // The static method 'displayTime()' is only available on the class itself
  User.displayTime();
  // Logs:
  // 12:00


  //Another Example

  class Calculator{
    static add(a,b){
        return a +b
    }
    static sub(a,b){
        return a-b
    }
    static multiply(a,b){
        return a *b
    }
    static divides(a,b){
        if (a ===0){
            throw new Error("nothing can divide zero, error")
        }
        return a/b
    }
    static modulus(a, b) {
	    return a % b;
	  }
    static power(a, b) {
	   return a ** b;
	}
  }

  const num1 = 10;
  const num2 = 20

  console.log(`addion : ${Calculator.add(num1,num2)}`)
  console.log(`subtraction : ${Calculator.sub(num1,num2)}`)
  console.log(`multiplication : ${Calculator.multiply(num1,num2)}`)
  console.log(`modulus : ${Calculator.modulus(num1,num2)}`)
  console.log(`power: ${Calculator.power(num1,num2)}`)
  
  
  