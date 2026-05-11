# Chapter 02: JavaScript Concepts

This chapter dives deeper into JavaScript concepts that are essential for writing effective Playwright test automation scripts.

## Files in This Chapter

### 04_JS_Basics.js
Core JavaScript fundamentals including:
- Data types and type coercion
- Operators and expressions
- Control flow statements (if/else, loops)
- Functions and scope

### 05_JS_Variables.js
Comprehensive guide to variable declarations in JavaScript:
- `var` - Function-scoped variables
- `let` - Block-scoped variables
- `const` - Block-scoped constants
- Variable hoisting and the Temporal Dead Zone (TDZ)
- Positive examples and negative scenarios with explanations
- Best practices for variable declaration

## Learning Outcomes

After completing this chapter, you should understand:
- JavaScript data types and how they work
- The differences between `var`, `let`, and `const`
- Scope and hoisting in JavaScript
- How to write clean, maintainable automation code
- Common pitfalls and how to avoid them

## Prerequisites

- Completion of Chapter 01: Basics
- Basic JavaScript knowledge
- Familiarity with browser automation concepts

## How to Run

```bash
# Run a specific file
node 04_JS_Basics.js

# Or run with Node REPL
node
> require('./05_JS_Variables.js')
```

## Key Concepts

### Variables
- **var**: Function-scoped, can be redeclared, hoisted
- **let**: Block-scoped, cannot be redeclared, not hoisted
- **const**: Block-scoped, cannot be redeclared or reassigned, not hoisted

### Common Pitfalls
- Using `var` in loops (closure issues)
- Redeclaring variables in the same scope
- Reassigning `const` values
- Accessing variables before declaration (TDZ)

## Notes

Understanding these JavaScript concepts is crucial for writing reliable and maintainable Playwright automation scripts. Pay special attention to variable scoping and hoisting behaviors.
