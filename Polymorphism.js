// Parent class
class Bear {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Common method for all bears
    hibernate() {
      console.log(`${this.name} is hibernating.`);
    }
  
    // Method to be overridden by child classes
    findFood() {
      console.log(`${this.name} is looking for food.`);
    }
  }
  
  // GrizzlyBear child class
  class GrizzlyBear extends Bear {
    constructor(name, age) {
      super(name, age); // Calls the constructor of the parent class (Bear)
    }
  
    // Overriding the method
    findFood() {
      console.log(`${this.name} the grizzly bear is catching fish in the river.`);
    }
  }
  
  // PolarBear child class
  class PolarBear extends Bear {
    constructor(name, age) {
      super(name, age); // Calls the constructor of the parent class (Bear)
    }
  
    // Overriding the method
    findFood() {
      console.log(`${this.name} the polar bear is hunting seals on the ice.`);
    }
  }
  
  
  // Example usage
  const grizzlyBear = new GrizzlyBear('Grizzly', 10);
  const polarBear = new PolarBear('Polar', 5);
  
  grizzlyBear.findFood(); // Grizzly the grizzly bear is catching fish in the river.
  polarBear.findFood(); // Polar the polar bear is hunting seals on the ice.