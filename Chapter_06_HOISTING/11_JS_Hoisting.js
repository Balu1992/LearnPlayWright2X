//HOISTING refers to the process of moving all the variable and function declarations to the top of their scope before code execution. This means that you can use variables and functions before they are declared in the code.
//In JavaScript, variable declarations using var are hoisted to the top of their scope, but their assignments are not. This means that if you try to access a variable declared with var before its declaration, it will return undefined instead of throwing an error. However, variables declared with let and const are also hoisted, but they are not initialized until their declaration is evaluated. This creates a Temporal Dead Zone (TDZ) where accessing these variables before their declaration will result in a ReferenceError. Function declarations are fully hoisted, meaning you can call a function before its declaration in the code without any issues.
//Example of hoisting with var
console.log(greeting); // Output: undefined
var greeting="Hello Balu!!!"; 
console.log(greeting); // Output: Hello Balu!!!

console.log(g1);
let g1="Hello balu1";
console.log(g1); // ReferenceError: Cannot access 'g1' before initialization

console.log(g2);
const g2="Hello balu2";
console.log(g2); // ReferenceError: Cannot access 'g2' before initialization

//This is referred to as the Temporal Dead Zone (TDZ), which is the time between the start of the block and the point where the variable is declared. During this time, the variable cannot be accessed, and any attempt to do so will result in a ReferenceError. This behavior helps prevent bugs and encourages developers to declare variables before using them, improving code readability and maintainability.