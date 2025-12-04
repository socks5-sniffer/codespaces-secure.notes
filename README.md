# GitHub Codespaces ♥️ Jupyter Notebooks

#This is my second Codespaces project (5th overall).
#I am very new so #please point out anything that I missed.  
#I've created a simple notes app that is built upon 
#security best practices.

Secure Notes App

This is a simple notes application built with Node.js, Express, and EJS that focuses on security and safe user input.

Features & Security Highlights:

XSS Protection:

All user input is sanitized using sanitize-html
 before being stored.

Any HTML or script tags entered by the user are rendered as plain text, preventing malicious scripts from executing.

Helmet Security Headers:

The app uses helmet
 to set HTTP headers that protect against common web vulnerabilities.

Safe Rendering with EJS:

Notes are displayed using EJS’s <%= %> syntax, which escapes HTML by default.

Ensures that even if malicious input somehow bypasses sanitation, it cannot execute in the browser.

Simple, Clean UI:

The form prevents empty submissions and trims input for consistency.

Lightweight & Extensible:

Easy to extend with additional features, such as note editing, deletion, or API endpoints, while maintaining strong input sanitization practices.


Usage:
# Install dependencies
npm install

# Run the app
npm start


Open your browser at http://localhost:3000 to add and view notes. Any attempts to insert scripts or HTML tags will be safely escaped.