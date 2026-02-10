/***********************
 * OBJECT BASICS
 ***********************/

const person = {
  name: "Rahul",
  age: 25,
  profession: "Software Engineer"
};

console.log(person.name);        // dot notation
console.log(person["age"]);      // bracket notation

// Update
person.age = 26;

// Add new property
person.city = "Bangalore";

// Delete property
delete person.profession;

console.log(person);

/***********************
 * NESTED OBJECTS
 ***********************/

const student = {
  name: "Amit",
  age: 22,
  marks: [78, 85, 90],
  address: {
    city: "Delhi",
    pincode: 110001
  }
};

console.log(student.address.city);
console.log(student.marks[1]);

/***********************
 * LOOPING THROUGH OBJECT
 ***********************/

for (let key in student) {
  console.log(key, student[key]);
}

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

/***********************
 * DESTRUCTURING
 ***********************/

const { name, age } = student;
console.log(name, age);

/***********************
 * MINI PROJECT 1
 * Student Profile Manager
 ***********************/

const studentProfile = {
  name: "Neha",
  marks: [70, 80, 90],
  address: {
    city: "Mumbai",
    state: "MH"
  }
};

let totalMarks = 0;
for (let mark of studentProfile.marks) {
  totalMarks += mark;
}

const average = totalMarks / studentProfile.marks.length;
const result = average >= 40 ? "Pass" : "Fail";

console.log("Student:", studentProfile.name);
console.log("Average Marks:", average);
console.log("Result:", result);
console.log("City:", studentProfile.address.city);

/***********************
 * MINI PROJECT 2
 * Product Inventory System
 ***********************/

const products = [
  { name: "Laptop", price: 50000, stock: 5 },
  { name: "Phone", price: 20000, stock: 0 },
  { name: "Tablet", price: 30000, stock: 3 }
];

let inventoryValue = 0;

for (let product of products) {
  inventoryValue += product.price * product.stock;

  if (product.stock === 0) {
    console.log(product.name, "is out of stock");
  }
}

console.log("Total Inventory Value:", inventoryValue);

/***********************
 * MINI PROJECT 3
 * User Account Summary
 ***********************/

const user = {
  username: "john_doe",
  isActive: true,
  logins: ["2024-01-01", "2024-01-15", "2024-02-01"],
  settings: {
    theme: "dark",
    notifications: true
  }
};

console.log("User:", user.username);
console.log("Last Login:", user.logins[user.logins.length - 1]);
console.log("Theme:", user.settings.theme);
console.log("Account Status:", user.isActive ? "Active" : "Inactive");
