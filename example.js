// Create an empty array
let myArray = [];

// Create an object with some properties
let myObject = {
  name: "Test",
  number: 42
};

// Add the object to the array
myArray.push(myObject);

// Update the object
myObject.name = "Test2";
myObject.number = 37;

// Add the object to the array again
myArray.push(myObject);

// See what the array looks like
console.log(myArray);
