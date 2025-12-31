// -----------------------------------------
// DAY 9 – JAVASCRIPT CONDITIONALS
// -----------------------------------------

console.log("✔ Day 9: JavaScript Conditionals Loaded");
alert("Day 9 – Conditionals: Open the console!");


// ============================================================
// 1) TEMPERATURE COMMENT APP
// ============================================================

// Example input
let temp = 28;

// Convert & validate
if (typeof temp === "string") {
    temp = Number(temp.trim());
}

if (Number.isNaN(temp)) {
    console.log("❌ Invalid temperature: Please enter a valid number.");
} else {
    // Conditional responses
    if (temp > 30) {
        console.log("🌞 It's hot outside!");
    } else if (temp > 20) {
        console.log("😊 Perfect weather!");
    } else if (temp > 10) {
        console.log("🧥 A little cold.");
    } else {
        console.log("❄️ Very cold!");
    }
}


// ============================================================
// 2) AGE ELIGIBILITY CHECKER
// ============================================================

// Example
let age = 17;

// Convert & validate
if (typeof age === "string") {
    age = Number(age.trim());
}

if (Number.isNaN(age) || age < 0) {
    console.log("❌ Invalid age: Please enter a valid age.");
} else {
    if (age < 13) {
        console.log("👶 Child account allowed.");
    } else if (age <= 17) {
        console.log("🧑 Teen account.");
    } else {
        console.log("🧔 Adult account.");
    }
}


// ============================================================
// 3) GRADE CALCULATOR
// ============================================================

// Example
let score = 88;

// Convert & validate
if (typeof score === "string") {
    score = Number(score.trim());
}

if (Number.isNaN(score) || score < 0 || score > 100) {
    console.log("❌ Invalid score. Enter value between 0 and 100.");
} else {
    if (score >= 90) {
        console.log(`Score: ${score} → Grade: A`);
    } else if (score >= 80) {
        console.log(`Score: ${score} → Grade: B`);
    } else if (score >= 70) {
        console.log(`Score: ${score} → Grade: C`);
    } else if (score >= 60) {
        console.log(`Score: ${score} → Grade: D`);
    } else {
        console.log(`Score: ${score} → Grade: F`);
    }
}


// ============================================================
// OPTIONAL: SWITCH STATEMENT DEMO
// ============================================================

let dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log("📅 Monday");
        break;
    case 2:
        console.log("📅 Tuesday");
        break;
    case 3:
        console.log("📅 Wednesday");
        break;
    case 4:
        console.log("📅 Thursday");
        break;
    case 5:
        console.log("📅 Friday");
        break;
    case 6:
        console.log("📅 Saturday");
        break;
    case 7:
        console.log("📅 Sunday");
        break;
    default:
        console.log("❌ Invalid day number (use 1–7).");
}
