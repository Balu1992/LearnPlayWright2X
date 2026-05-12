//LET is block scoped and does not allow redeclaration within the same scope, making it a safer choice for variable declarations in modern JavaScript development. It helps prevent bugs related to variable hoisting and unintended global variables, which can occur with var.
// It can be reassigned but not redeclared within the same scope, and it is not hoisted to the top of its block, meaning it cannot be accessed before its declaration. This makes let a more predictable and reliable option for variable declarations compared to var.
// It is hoisted to the top of its block but is not initialized, so it cannot be accessed before its declaration. This means that if you try to access a let variable before it is declared, you will get a ReferenceError. This behavior helps prevent bugs related to variable hoisting and makes let a safer choice for variable declarations in modern JavaScript development.
let a=10;
a+=2;
console.log("Value of a is:"+a); //12
let a=20; //SyntaxError: Identifier 'a' has already been declared 
// This is the reason why let is safer than var, as it prevents accidental redeclaration of variables within the same scope, which can lead to bugs and unintended consequences in larger codebases.
