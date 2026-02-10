// ==================================================
// DAY 11 – JAVASCRIPT ARRAYS
// ==================================================

console.log("✅ Day 11: JavaScript Arrays Loaded");

// --------------------------------------------------
// ARRAY BASICS
// --------------------------------------------------

let numbers = [10, 20, 30, 40, 50];
let names = ["Alice", "Bob", "Charlie", "Diana"];

console.log("Numbers:", numbers);
console.log("Names:", names);

console.log("First number:", numbers[0]);
console.log("Array length:", numbers.length);

// Modify element
numbers[2] = 35;
console.log("Updated numbers:", numbers);

// --------------------------------------------------
// LOOPING THROUGH ARRAYS
// --------------------------------------------------

console.log("\n🔁 Looping through numbers:");

for (let i = 0; i < numbers.length; i++) {
  console.log(`Index ${i}:`, numbers[i]);
}

// Sum of array
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum of numbers:", sum);

// --------------------------------------------------
// ARRAY METHODS
// --------------------------------------------------

let cart = ["Laptop", "Mouse"];

console.log("\n🛒 Shopping Cart:", cart);

// Add items
cart.push("Keyboard");
console.log("After push:", cart);

// Remove last item
cart.pop();
console.log("After pop:", cart);

// Add to start
cart.unshift("Monitor");
console.log("After unshift:", cart);

// Remove from start
cart.shift();
console.log("After shift:", cart);

// Check existence
console.log("Has Mouse?", cart.includes("Mouse"));

// Find index
console.log("Index of Laptop:", cart.indexOf("Laptop"));

// Slice (copy part)
let newCart = cart.slice(0, 1);
console.log("Sliced cart:", newCart);

// Splice (remove/add)
cart.splice(1, 0, "Webcam");
console.log("After splice:", cart);

// --------------------------------------------------
// MINI PROJECT 1: STUDENT MARKS ANALYZER
// --------------------------------------------------

console.log("\n📊 Student Marks Analyzer");

let marks = [78, 85, 92, 66, 88];
let total = 0;
let highest = marks[0];
let lowest = marks[0];

for (let i = 0; i < marks.length; i++) {
  total += marks[i];

  if (marks[i] > highest) highest = marks[i];
  if (marks[i] < lowest) lowest = marks[i];
}

let average = total / marks.length;

console.log("Marks:", marks);
console.log("Total:", total);
console.log("Average:", average);
console.log("Highest:", highest);
console.log("Lowest:", lowest);

// --------------------------------------------------
// MINI PROJECT 2: SHOPPING CART SIMULATOR
// --------------------------------------------------

console.log("\n🛍 Shopping Cart Simulator");

let shoppingCart = [];

shoppingCart.push("Phone");
shoppingCart.push("Charger");
shoppingCart.push("Headphones");

console.log("Cart Items:", shoppingCart);

shoppingCart.pop();
console.log("After removing last item:", shoppingCart);

console.log("Has Phone?", shoppingCart.includes("Phone"));

// --------------------------------------------------
// MINI PROJECT 3: NAME SEARCH TOOL
// --------------------------------------------------

console.log("\n🔎 Name Search Tool");

let people = ["Rahul", "Amit", "Neha", "Priya"];
let searchName = "Neha";

if (people.includes(searchName)) {
  console.log(
    `${searchName} found at index ${people.indexOf(searchName)}`
  );
} else {
  console.log(`${searchName} not found`);
}
