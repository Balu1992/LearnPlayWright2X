// JavaScript Variable Declarations Examples
// This file demonstrates all possible variable declarations in JavaScript (var, let, const)
// along with negative scenarios and explanations.

// ==========================================
// 1. VAR DECLARATIONS
// ==========================================

// Basic var declaration
var name = "John";
console.log(name); // Output: John

// Var without initialization (undefined)
var age;
console.log(age); // Output: undefined

// Var can be redeclared in the same scope
var city = "New York";
var city = "Los Angeles"; // No error
console.log(city); // Output: Los Angeles

// Var is function-scoped, not block-scoped
if (true) {
    var blockVar = "I'm accessible outside the block";
}
console.log(blockVar); // Output: I'm accessible outside the block

// ==========================================
// 2. LET DECLARATIONS
// ==========================================

// Basic let declaration
let firstName = "Jane";
console.log(firstName); // Output: Jane

// Let without initialization (undefined)
let lastName;
console.log(lastName); // Output: undefined

// Let can be reassigned
let score = 100;
score = 95;
console.log(score); // Output: 95

// Let is block-scoped
if (true) {
    let blockLet = "I'm only accessible inside this block";
    console.log(blockLet); // Output: I'm only accessible inside this block
}
// console.log(blockLet); // ReferenceError: blockLet is not defined

// ==========================================
// 3. CONST DECLARATIONS
// ==========================================

// Basic const declaration (must be initialized)
const PI = 3.14159;
console.log(PI); // Output: 3.14159

// Const with objects (properties can be modified)
const person = { name: "Alice", age: 30 };
person.age = 31; // Allowed - modifying properties
console.log(person); // Output: { name: "Alice", age: 31 }

// Const with arrays (elements can be modified)
const numbers = [1, 2, 3];
numbers.push(4); // Allowed - modifying array contents
console.log(numbers); // Output: [1, 2, 3, 4]

// Const is block-scoped
if (true) {
    const blockConst = "I'm only accessible inside this block";
    console.log(blockConst); // Output: I'm only accessible inside this block
}
// console.log(blockConst); // ReferenceError: blockConst is not defined

// ==========================================
// NEGATIVE SCENARIOS AND EXPLANATIONS
// ==========================================

// 1. Cannot redeclare const in the same scope
// const MAX_USERS = 100;
// const MAX_USERS = 200; // SyntaxError: Identifier 'MAX_USERS' has already been declared

// 2. Cannot reassign const
// const APP_VERSION = "1.0.0";
// APP_VERSION = "1.1.0"; // TypeError: Assignment to constant variable.

// 3. Cannot declare const without initialization
// const UNDEFINED_CONST; // SyntaxError: Missing initializer in const declaration

// 4. Temporal Dead Zone (TDZ) with let and const
// console.log(tdzVar); // ReferenceError: Cannot access 'tdzVar' before initialization
// let tdzVar = "Hello";

// Same with const:
// console.log(tdzConst); // ReferenceError: Cannot access 'tdzConst' before initialization
// const tdzConst = "World";

// 5. Cannot redeclare let in the same scope
// let userName = "Bob";
// let userName = "Alice"; // SyntaxError: Identifier 'userName' has already been declared

// 6. Var hoisting can lead to unexpected behavior
// console.log(hoistedVar); // Output: undefined (not ReferenceError)
// var hoistedVar = "I'm hoisted";

// But with let/const, it's clearer:
// console.log(notHoisted); // ReferenceError: Cannot access 'notHoisted' before initialization
// let notHoisted = "I'm not hoisted";

// 7. Const with primitive values cannot be reassigned
// const immutableString = "Cannot change";
// immutableString = "Try to change"; // TypeError: Assignment to constant variable.

// But objects and arrays are references, so the reference can't change, but contents can
// const obj = { key: "value" };
// obj = { newKey: "newValue" }; // TypeError: Assignment to constant variable.
// obj.key = "newValue"; // This is allowed

// 8. Var in loops can cause closure issues
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 100); // Will log 3, 3, 3
// }

// With let, each iteration gets its own scope
// for (let j = 0; j < 3; j++) {
//     setTimeout(() => console.log(j), 100); // Will log 0, 1, 2
// }

// ==========================================
// SUMMARY
// ==========================================

/*
Variable Declaration Summary:

1. VAR:
   - Function-scoped
   - Can be redeclared
   - Hoisted (initialized as undefined)
   - Can be reassigned

2. LET:
   - Block-scoped
   - Cannot be redeclared in same scope
   - Not hoisted (TDZ)
   - Can be reassigned

3. CONST:
   - Block-scoped
   - Cannot be redeclared in same scope
   - Not hoisted (TDZ)
   - Cannot be reassigned (but object properties/arrays can be modified)

Negative Scenarios:
- Reassigning const
- Using let/const before declaration (TDZ)
- Redeclaring let/const in same scope
- Declaring const without initialization
- Var hoisting leading to undefined values
- Closure issues with var in loops
*/