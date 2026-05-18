# Chapter 06: Hoisting

This chapter explores JavaScript hoisting, function scope, and how variable declarations behave inside functions and blocks.

## Topics covered

- `var` hoisting and function scope
- Function declaration hoisting
- Differences between `var`, `let`, and `const`
- Hoisting pitfalls with closures and loops

## Files

- `11_JS_Hoisting.js` — Shows how `var`, `let`, and `const` are hoisted differently, and why accessing `let`/`const` before declaration triggers the Temporal Dead Zone.
- `12_JS_Hoisting_Functions.js` — Demonstrates function scope hoisting with `var` inside a function and why a variable can print `undefined` before assignment.
