class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

  addPhoneNumber(number) {
    if (!this.phoneNumbers.includes(number)) {
      this.phoneNumbers.push(number);
    }
  }

  removePhoneNumber(number) {
    this.phoneNumbers = this.phoneNumbers.filter(n => n !== number);
  }

  dialPhoneNumber(number) {
    if (this.phoneNumbers.includes(number)) {
      console.log("Dialling...");
      this.notifyObservers(number);
    } else {
      console.log("Number not found");
    }
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(number) {
    this.observers.forEach(observer => observer.update(number));
  }
}

module.exports = Telephone;