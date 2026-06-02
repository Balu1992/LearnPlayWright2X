# LearnPlayWright2X

A comprehensive repository for learning Playwright using JavaScript, covering foundational concepts to advanced automation techniques.

## Repository Structure

```
LearnPlayWright2X/
├── Chapter_01_Basics/          # Foundational Playwright concepts
│   ├── 01_Basics.js
│   ├── 02_JS_Commands.js
│   └── 03_JS_Comments.js
├── Chapter_02_JavascriptConcepts/  # JavaScript fundamentals for automation
│   ├── 04_JS_Basics.js
│   └── 05_JS_Variables.js
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

> All repository documentation is consolidated in this single README file.

## Chapters Overview

### Chapter 01: Basics
Foundational Playwright concepts for browser automation.
- `01_Basics.js` — Basic Playwright usage and simple example flows
- `02_JS_Commands.js` — JavaScript commands used in automation
- `03_JS_Comments.js` — Code documentation and commenting practices

### Chapter 02: JavaScript Concepts
Essential JavaScript fundamentals for automation scripts.
- `04_JS_Basics.js` — Core syntax, operators, and basic JavaScript usage
- `05_JS_Variables.js` — `var`, `let`, and `const` variable behavior
- Topics: scope, hoisting, and variable declarations

### Chapter 03: Functions
JavaScript functions and reusable automation logic.
- `07_JS_Functions.js` — Function declaration, invocation, and parameter handling
- Topics: return values, reusable helpers, and modular script design

### Chapter 04: LET
`let` keyword examples and block-scoping behavior.
- `08_JS_UsageofLET.js` — Block scope and reassignment examples
- `09_JS_LET1.js` — Best practices for `let` usage
- Topics: Temporal Dead Zone and safer variable declarations

### Chapter 05: CONST
`const` keyword examples and immutable bindings.
- `10_JS_Const.js` — Constant declarations and immutability patterns
- Topics: object and array mutability with `const`

### Chapter 06: Hoisting
JavaScript hoisting and function scope explained.
- `11_JS_Hoisting.js` — How `var`, `let`, and `const` are hoisted differently
- `12_JS_Hoisting_Functions.js` — Function scope hoisting and `undefined` behavior
- Topics: declaration hoisting, Temporal Dead Zone, and closure pitfalls

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
