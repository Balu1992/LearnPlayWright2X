# LearnPlayWright2X

A comprehensive repository for learning Playwright using JavaScript, covering foundational concepts to advanced automation techniques.

## Repository Structure

```
LearnPlayWright2X/
├── Chapter_01_Basics/          # Foundational Playwright concepts
│   ├── 01_Basics.js
│   ├── 02_JS_Commands.js
│   ├── 03_JS_Comments.js
│   └── README.md
├── Chapter_02_JavascriptConcepts/  # JavaScript fundamentals for automation
│   ├── 04_JS_Basics.js
│   ├── 05_JS_Variables.js
│   └── README.md
├── Chapter_03_Functions/       # JavaScript functions for automation workflows
│   └── 07_JS_Functions.js
├── Chapter_04_LET.js/          # LET keyword and block scope examples
│   ├── 08_JS_UsageofLET.js
│   └── 09_JS_LET1.js
├── Chapter_05_CONST/           # CONST keyword and value immutability
│   └── 10_JS_Const.js
├── Chapter_06_HOISTING/        # Hoisting examples and function scope
│   ├── 11_JS_Hoisting.js
│   └── 12_JS_Hoisting_Functions.js
└── README.md
```

## Chapters Overview

### [Chapter 01: Basics](./Chapter_01_Basics/README.md)
Introduction to Playwright and JavaScript basics for browser automation.
- Basic Playwright usage
- JavaScript commands for automation
- Code documentation and comments

### [Chapter 02: JavaScript Concepts](./Chapter_02_JavascriptConcepts/README.md)
Essential JavaScript concepts for writing effective automation scripts.
- JavaScript fundamentals
- Variable declarations (var, let, const)
- Scope and hoisting

### [Chapter 03: Functions](./Chapter_03_Functions/README.md)
Covers JavaScript functions and reusable automation logic.
- Function declaration and invocation
- Parameters and return values
- Modular script design

### [Chapter 04: LET](./Chapter_04_LET.js/README.md)
Explains the `let` keyword, block scope, and best practices.
- Block scoping rules
- Reassignment behavior
- Temporal Dead Zone

### [Chapter 05: CONST](./Chapter_05_CONST/README.md)
Explains the `const` keyword and immutable bindings.
- Constant declarations
- Object and array mutability
- Usage patterns for safe automation scripts

### [Chapter 06: Hoisting](./Chapter_06_HOISTING/README.md)
Explains JavaScript hoisting and how function scope affects variables.
- `var` hoisting and initialization
- Function declaration hoisting
- Common pitfalls with closures and loops

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Basic JavaScript knowledge

### Installation

```bash
# Clone the repository
git clone https://github.com/Balu1992/LearnPlayWright2X.git
cd LearnPlayWright2X

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Running Examples

```bash
# Run a specific chapter file
node Chapter_01_Basics/01_Basics.js

# Run with a test runner
npx jest Chapter_01_Basics/01_Basics.js
```

## Learning Path

1. Start with **Chapter 01: Basics** to understand Playwright fundamentals
2. Progress to **Chapter 02: JavaScript Concepts** to strengthen your JavaScript skills
3. Review the README in each chapter for detailed information

## Usage Tips

- Each file includes detailed comments explaining concepts
- Run examples individually to understand each concept
- Modify examples to experiment with different scenarios
- Reference negative scenarios to understand common pitfalls

## Key Topics Covered

### Playwright
- Browser launching and navigation
- Element interaction and selection
- Event handling and JavaScript execution

### JavaScript
- Data types and operations
- Variable declarations and scoping
- Control flow and functions
- Hoisting and the Temporal Dead Zone

## Contributing

This is a learning repository. Feel free to:
- Extend examples with additional scenarios
- Add new chapters for advanced topics
- Create pull requests with improvements

## Changelog

- **2026-05-12**: Added chapter overview and repository structure entries for `Chapter_03_Functions`, `Chapter_04_LET.js`, and `Chapter_05_CONST`.
- **2026-05-18**: Added `Chapter_06_HOISTING` with hoisting examples and updated repository documentation.

## License

MIT

## Author

Balaji

## References

- [Playwright Documentation](https://playwright.dev)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info)
