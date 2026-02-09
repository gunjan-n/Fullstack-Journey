// ==================================================
// DAY 10 – JAVASCRIPT LOOPS
// ==================================================

console.log("✅ Day 10: JavaScript Loops Loaded");

// --------------------------------------------------
// MINI PROJECT 1: COUNTER PROGRAM
// --------------------------------------------------

let start = 1;
let end = 10;
let step = 2;

console.log("\n🔢 Counter Program:");

if (step <= 0) {
  console.log("❌ Step must be greater than 0");
} else {
  for (let i = start; i <= end; i += step) {
    console.log(i);
  }
}

// --------------------------------------------------
// MINI PROJECT 2: NUMBER SUM CALCULATOR
// --------------------------------------------------

let sumStart = 1;
let sumEnd = 5;
let sum = 0;

console.log("\n➕ Sum Calculator:");

for (let i = sumStart; i <= sumEnd; i++) {
  sum += i;
}

console.log(`Sum from ${sumStart} to ${sumEnd} = ${sum}`);

// --------------------------------------------------
// MINI PROJECT 3: EVEN / ODD NUMBER PRINTER
// --------------------------------------------------

let rangeStart = 1;
let rangeEnd = 20;
let type = "even"; // change to "odd"

console.log(`\n🔍 ${type.toUpperCase()} numbers:`);

for (let i = rangeStart; i <= rangeEnd; i++) {
  if (type === "even" && i % 2 === 0) {
    console.log(i);
  } else if (type === "odd" && i % 2 !== 0) {
    console.log(i);
  }
}

// --------------------------------------------------
// MINI PROJECT 4: STAR PATTERN GENERATOR
// --------------------------------------------------

let rows = 5;

console.log("\n⭐ Star Pattern:");

for (let i = 1; i <= rows; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

// --------------------------------------------------
// WHILE LOOP EXAMPLE
// --------------------------------------------------

console.log("\n🔁 While Loop Example:");

let count = 1;

while (count <= 5) {
  console.log("Count:", count);
  count++;
}

// --------------------------------------------------
// DO-WHILE LOOP EXAMPLE
// --------------------------------------------------

console.log("\n🔂 Do-While Loop Example:");

let num = 1;

do {
  console.log("Number:", num);
  num++;
} while (num <= 3);

// --------------------------------------------------
// BREAK & CONTINUE
// --------------------------------------------------

console.log("\n⛔ Break & Continue Example:");

for (let i = 1; i <= 10; i++) {
  if (i === 5) continue; // skip 5
  if (i === 9) break;    // stop at 9
  console.log(i);
}
