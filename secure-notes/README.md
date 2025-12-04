Note: This is a demonstration project focused on XSS prevention. Authentication is intentionally omitted to keep the example focused and simple. In a production environment, you would want to add user authentication and store notes in a database.

# Secure Notes App

A simple notes application built with Node.js, Express, and EJS that focuses on security and safe user input handling.

## Features & Security Highlights

### XSS Protection
- All user input is sanitized using `sanitize-html` before being stored
- Any HTML or script tags entered by the user are rendered as plain text, preventing malicious scripts from executing

### Helmet Security Headers
- The app uses `helmet` to set HTTP headers that protect against common web vulnerabilities

### Safe Rendering with EJS
- Notes are displayed using EJS's `<%= %>` syntax, which escapes HTML by default
- Ensures that even if malicious input somehow bypasses sanitation, it cannot execute in the browser

### Simple, Clean UI
- Modern, minimalist design
- The form prevents empty submissions and trims input for consistency
- Character limit (500 chars) to prevent abuse

## Installation & Usage

```bash
# Install dependencies
npm install

# Run the app
npm start
```

Open your browser at `http://localhost:3000` to add and view notes. Any attempts to insert scripts or HTML tags will be safely escaped.

## Technologies Used
- **Node.js** - Runtime environment
- **Express** - Web framework
- **EJS** - Templating engine
- **Helmet** - Security middleware
- **sanitize-html** - Input sanitization

## Security Testing

Try submitting: `<script>alert("XSS!")</script>`

The malicious script will be stripped out and won't execute, demonstrating the XSS protection in action.
