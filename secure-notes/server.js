const express = require('express');
const helmet = require('helmet');
const sanitizeHtml = require('sanitize-html');

const app = express();
let notes = [];

// Security headers
app.use(helmet());

// Body parsing for forms
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static('public'));

// View engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { notes });
});

app.post('/add', (req, res) => {
  const noteText = req.body.note?.trim();
  if (noteText) {
    const clean = sanitizeHtml(noteText, {
      allowedTags: [],
      allowedAttributes: {}
    });
    if (clean && clean.length > 0 && clean.length <= 500) {
      notes.push(clean); // max 500 chars
    }
  }
  res.redirect('/');
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
