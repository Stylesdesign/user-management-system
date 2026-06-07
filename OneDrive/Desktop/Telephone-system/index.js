const Telephone = require("./src/Telephone");
const NumberLogger = require("./src/observers/NumberLogger");
const DialLogger = require("./src/observers/DialLogger");

const phone = new Telephone();

// Add numbers
phone.addPhoneNumber("2347023232");
phone.addPhoneNumber("1234567890");

// Create observers
const observer1 = new NumberLogger();
const observer2 = new DialLogger();

// Register observers
phone.addObserver(observer1);
phone.addObserver(observer2);

// Dial
phone.dialPhoneNumber("2347023232");