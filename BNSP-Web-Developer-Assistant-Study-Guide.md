# BNSP Web Developer Assistant Study Guide

This guide summarizes six competency units relevant to the BNSP Web Developer Assistant certification. It is intended for study, review, and exam preparation. The goal is to connect each competency description to practical developer work.

## How to use this guide

When you study each unit, ask yourself four questions:
- What is the purpose of this unit?
- What skill is being tested?
- What would a developer do in practice?
- What standards or best practices apply?

## 1. J.620100.005.02 | Implementing User Interfaces

This unit focuses on creating interfaces that are clear, usable, and aligned with user needs. Good interfaces organize content logically, guide the user effectively, and remain easy to use on different screen sizes.

### Key points
- Understand user needs and interface goals
- Organize interface elements into a clear structure
- Apply layout, spacing, and visual hierarchy
- Build forms, navigation, buttons, and menus
- Ensure usability and consistency
- Consider responsiveness and accessibility

### Study focus
- UI/UX basics
- Layout and composition
- Forms and input design
- Navigation patterns
- Responsive design
- Accessibility principles

### Practical example: responsive card layout
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sample UI</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f7fb; }
    .card { max-width: 600px; margin: auto; padding: 20px; background: white; border: 1px solid #ddd; border-radius: 8px; }
    button { background: #2563eb; color: white; border: none; padding: 10px 15px; border-radius: 4px; }
    @media (max-width: 600px) {
      .card { padding: 15px; }
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>Welcome</h2>
    <p>This layout is easier to read on both desktop and mobile screens.</p>
    <button type="button">Get Started</button>
  </div>
</body>
</html>
```

### Practical example: accessible form
```html
<form>
  <label for="name">Name</label>
  <input id="name" name="name" type="text" required />

  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />

  <button type="submit">Submit</button>
</form>
```

### Exam tip
A strong UI is not only attractive; it should also help users complete tasks quickly and with minimal confusion.

## 2. J.620100.010.01 | Implementing Execution Commands for Text-based, Graphical, and Multimedia Programming Languages

This unit covers the ability to run programs and scripts using the correct execution methods for different environments. It also includes starting applications, using development tools, and handling basic runtime errors.

### Key points
- Understand how to execute code in different environments
- Use command-line or tool-based execution methods
- Run programs written in text-based or graphical languages
- Troubleshoot basic runtime errors
- Work with development tools, interpreters, or compilers

### Study focus
- Command-line execution
- IDE and tool usage
- Program startup and runtime behavior
- Basic debugging
- Environment setup

### Practical example: running the repository backend and frontend
```bash
cd backend
npm install
npm run server
```

```bash
cd frontend
npm install
npm start
```

### Practical example: package scripts in this repo
```json
{
  "scripts": {
    "server": "node server.js"
  }
}
```

```json
{
  "scripts": {
    "start": "set PORT=1100 && react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test"
  }
}
```

In this repository, the backend starts an Express server that initializes MySQL schema and serves portfolio data from the database only. The frontend loads the portfolio data from `/api/portfolio-data`.

### Practical example: common runtime error
```javascript
function greet(name) {
  if (!name) {
    throw new Error("Name is required");
  }
  console.log("Hello, " + name);
}

greet();
```

This produces an error because the argument is missing. A developer should read the message, identify the problem, and fix the code or add input validation.

### Exam tip
Be able to explain how to run code, where to find errors, and how to use the correct tool for the job.

## 3. J.620100.015.01 | Organizing Functions, Files, or Other Programming Resources Neatly

This unit emphasizes keeping projects structured so that code and resources are easy to read, manage, and reuse. Good organization reduces confusion and makes future updates easier.

### Key points
- Group related code logically
- Use clear file and folder naming
- Separate logic, presentation, and assets
- Maintain consistency in project structure
- Keep resources easy to locate and update

### Study focus
- Folder structure
- Modular programming
- Naming conventions
- Separation of concerns
- Asset and resource management

### Practical example: clear folder structure
```text
backend/
  controllers/
  routes/
  services/
  db/
  server.js
frontend/
  public/
  src/
    components/
    hooks/
    services/
    styles/
```

### Practical example: separate logic into modules
```javascript
// backend/services/portfolio-data.service.js
async function fetchPortfolioData(pool) {
  const [rows] = await pool.query('SELECT * FROM portfolios LIMIT 1');
  return rows[0];
}
```

```javascript
// frontend/src/services/portfolio.service.js
export const fetchPortfolioData = async () => {
  const response = await fetch('http://localhost:5000/api/portfolio-data');
  if (!response.ok) {
    throw new Error('Unable to load portfolio data');
  }
  return response.json();
};
```

### Exam tip
A well-organized project should make it obvious where code, styles, and assets belong.

## 4. J.620100.016.01 | Writing Code Based on Guidelines and Best Practices

This unit focuses on writing code that is readable, maintainable, and professional. It includes following coding standards and applying habits that improve quality and reduce future problems.

### Key points
- Use meaningful names for variables and functions
- Write clear and structured code
- Follow consistent formatting and indentation
- Avoid unnecessary complexity
- Use comments and documentation appropriately
- Write code that is easy to test and maintain

### Study focus
- Clean code principles
- Readability
- Naming conventions
- Formatting standards
- Maintainability
- Documentation practices

### Practical example: readable code
```javascript
function calculateTotalPrice(price, quantity, taxRate) {
  const subtotal = price * quantity;
  const tax = subtotal * taxRate;
  return subtotal + tax;
}

const total = calculateTotalPrice(50, 2, 0.1);
console.log(total);
```

### Practical example: better naming
```javascript
// Poor
const x = 10;
const y = 2;
const z = x * y;

// Better
const hoursWorked = 10;
const hourlyRate = 2;
const weeklyPay = hoursWorked * hourlyRate;
```

### Exam tip
Readable code is easier to review, debug, and maintain than clever code that is hard to follow.

## 5. J.620100.017.02 | Implementing Structured Programming

This unit covers structured programming techniques used to solve problems in an organized and controlled way. It focuses on logic flow, problem decomposition, and creating solutions with clear steps.

### Key points
- Use sequence, selection, and repetition correctly
- Break problems into smaller parts
- Organize logic into functions or procedures
- Build clear input-process-output flows
- Avoid tangled or poorly structured logic

### Study focus
- Algorithm design
- Control structures
- Functions and procedures
- Flow of execution
- Problem decomposition

### Practical example: sequence, selection, and repetition
```javascript
function printEvenNumbers(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printEvenNumbers(10);
```

### Practical example: breaking a task into functions
```javascript
function getDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent) / 100;
}

function showPrice(productName, price, discountPercent) {
  const finalPrice = getDiscountedPrice(price, discountPercent);
  console.log(`${productName}: ${finalPrice}`);
}

showPrice("Laptop", 1000, 10);
```

### Exam tip
When solving a problem, look for the input, the processing steps, and the expected output.

## 6. J.620100.019.02 | Using Existing Libraries or Components

This unit focuses on using existing libraries, frameworks, and reusable components effectively instead of building everything from scratch. It includes selecting suitable tools, understanding their purpose, and integrating them properly into a project.

### Key points
- Identify appropriate libraries or components
- Read and apply documentation correctly
- Integrate external resources into a project
- Adapt reusable components to fit needs
- Manage dependencies responsibly

### Study focus
- Libraries and frameworks
- Reusable components
- Dependency management
- Documentation reading
- Integration and customization

### Practical example: using a React component
```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
```

### Practical example: installing and using a package in this repo
```bash
cd backend
npm install mysql2
```

```javascript
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});
```

### Exam tip
Choose tools that fit the job, and always check the documentation before integrating a new library.

## Study Tips

When preparing for certification, focus on the practical meaning of each unit:
- What is the purpose of the unit?
- What skill is being tested?
- What action would a developer perform in practice?
- What standards or best practices apply?

## Quick practice ideas
- Rewrite a messy script using better variable names.
- Create a small folder structure for a mini project.
- Run a program from the terminal and observe the output.
- Build a simple form with accessible labels and buttons.
- Try using one external package and read its documentation.

## Quick exam checklist
- Can I explain the goal of each competency unit?
- Can I describe how to build a simple usable interface?
- Can I run and debug a basic program?
- Can I organize files and resources clearly?
- Can I write readable code using functions and control structures?
- Can I choose and integrate an external library responsibly?
