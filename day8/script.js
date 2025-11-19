// ---------------------------
// DAY 8 – JAVASCRIPT BASICS
// ---------------------------

// A welcome message in the console
console.log("✔ JavaScript file connected successfully.");
alert("Welcome to Day 8 – JavaScript Basics!");


// --------------------------------
// 1. VARIABLES & DATA TYPES
// --------------------------------

let userName = "Gunjan";        // string
let userAge = 25;             // number
let isStudent = true;         // boolean
let country = "India";
let favoriteColor = "Blue";

console.log("Name:", userName);
console.log("Age:", userAge);
console.log("Student Status:", isStudent);
console.log("Country:", country);
console.log("Favorite Color:", favoriteColor);

console.log("Type of userName:", typeof userName);
console.log("Type of userAge:", typeof userAge);
console.log("Type of isStudent:", typeof isStudent);


// --------------------------------
// 2. OPERATORS
// --------------------------------

// Arithmetic
let x = 10;
let y = 4;

console.log("x + y =", x + y);
console.log("x - y =", x - y);
console.log("x * y =", x * y);
console.log("x / y =", x / y);
console.log("x % y =", x % y);
console.log("x ** y =", x ** y);  // exponent

// Comparison
console.log("10 > 4:", x > y);
console.log("10 == '10':", x == "10");  // true (loose)
console.log("10 === '10':", x === "10"); // false (strict)


// --------------------------------
// 3. TEMPLATE LITERALS
// --------------------------------

let fullName = `${userName} Naraniya`;
console.log(`Full Name: ${fullName}`);


// --------------------------------
// 4. MINI PROJECT – PERSONAL INFO CARD
// --------------------------------

let myName = "Gunjan Naraniya";
let myProfession = "Aspiring Full-Stack Developer";
let myGoal = "Master JavaScript and React";
let myState = "Rajasthan";

console.log(`
-----------------------------
     🌟 PERSONAL INFO CARD 🌟
-----------------------------
👤 Name: ${myName}
💼 Profession: ${myProfession}
📍 Location: ${myState}, ${country}
🎯 Goal: ${myGoal}
-----------------------------
`);
