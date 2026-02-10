// ==================================================
// DAY 12 – ADVANCED ARRAY METHODS
// map(), filter(), reduce()
// ==================================================

console.log("✅ Day 12: Advanced Array Methods Loaded");

// --------------------------------------------------
// MAP() — TRANSFORM DATA
// --------------------------------------------------

const numbers = [10, 20, 30, 40, 50];

const doubled = numbers.map(num => num * 2);
console.log("Original:", numbers);
console.log("Doubled:", doubled);

// Convert prices with tax
const prices = [100, 250, 500];
const pricesWithTax = prices.map(price => price * 1.18);
console.log("Prices with tax:", pricesWithTax);

// Uppercase names
const names = ["rahul", "neha", "amit"];
const upperNames = names.map(name => name.toUpperCase());
console.log("Uppercase names:", upperNames);

// --------------------------------------------------
// FILTER() — SELECT DATA
// --------------------------------------------------

const ages = [12, 17, 19, 25, 30];

const adults = ages.filter(age => age >= 18);
console.log("Adults:", adults);

// Filter expensive products
const productPrices = [499, 799, 1200, 2500, 320];
const expensive = productPrices.filter(price => price > 1000);
console.log("Expensive products:", expensive);

// --------------------------------------------------
// REDUCE() — ACCUMULATE TO ONE VALUE
// --------------------------------------------------

const marks = [78, 85, 92, 66, 88];

// Sum
const totalMarks = marks.reduce((total, mark) => total + mark, 0);
console.log("Total marks:", totalMarks);

// Average
const averageMarks = totalMarks / marks.length;
console.log("Average marks:", averageMarks);

// Max value
const maxMark = marks.reduce((max, mark) => 
  mark > max ? mark : max
);
console.log("Highest mark:", maxMark);

// Count pass students
const passCount = marks.reduce((count, mark) => 
  mark >= 40 ? count + 1 : count, 0
);
console.log("Pass count:", passCount);

// --------------------------------------------------
// MINI PROJECT 1: PRODUCT PRICE PROCESSOR
// --------------------------------------------------

console.log("\n🛒 Product Price Processor");

const basePrices = [500, 1200, 750, 3000];

// Add tax
const finalPrices = basePrices.map(price => price * 1.18);

// Filter prices > 1000
const premiumProducts = finalPrices.filter(price => price > 1000);

console.log("Final prices:", finalPrices);
console.log("Premium products:", premiumProducts);

// --------------------------------------------------
// MINI PROJECT 2: STUDENT RESULT ANALYZER
// --------------------------------------------------

console.log("\n🎓 Student Result Analyzer");

const studentMarks = [35, 78, 92, 40, 66];

// Passed students
const passed = studentMarks.filter(mark => mark >= 40);

// Add bonus marks
const bonusMarks = passed.map(mark => mark + 5);

// Class average
const classAverage =
  bonusMarks.reduce((sum, mark) => sum + mark, 0) / bonusMarks.length;

console.log("Passed students:", passed);
console.log("Bonus marks:", bonusMarks);
console.log("Class average:", classAverage);

// --------------------------------------------------
// MINI PROJECT 3: EXPENSE TRACKER SUMMARY
// --------------------------------------------------

console.log("\n💸 Expense Tracker Summary");

const expenses = [120, 450, 2000, 600, 1500];

// Total expense
const totalExpense = expenses.reduce((sum, exp) => sum + exp, 0);

// Highest expense
const highestExpense = expenses.reduce((max, exp) =>
  exp > max ? exp : max
);

// Expenses above threshold
const highExpenses = expenses.filter(exp => exp > 1000);

console.log("Total expense:", totalExpense);
console.log("Highest expense:", highestExpense);
console.log("Expenses > 1000:", highExpenses);

// --------------------------------------------------
// METHOD CHAINING (REAL-WORLD STYLE)
// --------------------------------------------------

console.log("\n🔗 Method Chaining Example");

const chainResult = expenses
  .filter(exp => exp > 500)
  .map(exp => exp * 1.18)
  .reduce((sum, exp) => sum + exp, 0);

console.log("Chained result:", chainResult);
