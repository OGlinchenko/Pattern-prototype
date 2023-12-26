// Prototype
class Prototype {
  constructor(prototype) {
    this.prototype = prototype;
  }

  clone() {
    // Cloning process (shallow or deep based on need)
    const newObject = Object.create(this.prototype);
    return newObject;
  }
}

// ConcretePrototype
class ConcretePrototype {
  constructor(field) {
    this.field = field;
  }

  clone() {
    return new ConcretePrototype(this.field);
  }
}

// Using the Prototype
const original = new ConcretePrototype('value');
const cloned = original.clone();

console.log(cloned.field);  // Output: 'value'
