// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like stylesheets or images)
app.use(express.static('public'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/submit', (req, res) => {
  const { name, email, password, confirmPassword, age, terms } = req.body;

  // Server-side validation
  if (password.length < 8) {
    return res.status(400).send('Password must be at least 8 characters long');
  }

  if (password !== confirmPassword) {
    return res.status(400).send('Password and Confirm Password do not match');
  }

  // Additional server-side validation logic if needed

  // Store validated data in temporary server-side storage (for demonstration purposes)
  const validatedData = { name, email, age, terms };
  // Store data in a database or other storage solution in a real application

  res.render('submit', validatedData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
