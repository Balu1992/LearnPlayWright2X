/*
	13_JS_Literals.js

	Topic: NULL vs UNDEFINED in JavaScript

	Summary:
	- `undefined` means a variable has been declared but has not been assigned a value,
		or a function returned without a value, or a property doesn't exist.
	- `null` is an assignment value that represents "no value" or an intentional
		absence of any object value. It is set explicitly by the programmer.

	Notes:
	- `typeof undefined` === 'undefined'
	- `typeof null` === 'object'  // historical JS quirk
	- `null == undefined`  // true (loose equality)
	- `null === undefined` // false (strict equality)
*/

// Example 1: declared but uninitialized -> undefined
let a;
console.log('a:', a); // undefined
console.log('typeof a:', typeof a); // 'undefined'

// Example 2: explicitly set to null -> intentional absence
let b = null;
console.log('b:', b); // null
console.log('typeof b:', typeof b); // 'object' (historic quirk)

// Example 3: function without return returns undefined
function noReturn() {}
console.log('noReturn():', noReturn()); // undefined

// Example 4: missing object property -> undefined
const obj = { x: 1 };
console.log('obj.y:', obj.y); // undefined

// Example 5: equality comparisons
console.log('null == undefined ->', null == undefined); // true
console.log('null === undefined ->', null === undefined); // false

// Best practices:
// - Use `null` when you want to explicitly indicate "no value" (intentional).
// - Treat `undefined` as "uninitialized" or as a runtime absence from the language.
// - Avoid relying on `typeof null === "object"`; prefer explicit checks when needed.

// Quick helper examples
function returnNull() { return null; }
console.log('returnNull():', returnNull()); // null

// Practical pattern: initialize variables to null when you expect to assign objects later
let connection = null; // explicitly saying: no connection yet
console.log('connection initially:', connection);

// End of examples

