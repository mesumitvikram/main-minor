// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static('public'));

// // Mock database
// const users = [
//   { username: '222', password: '111' },
//   { username: 'user2', password: 'password2' },
// ];

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   // Simple authentication (replace with proper authentication logic)
//   const user = users.find(u => u.username === username && u.password === password);

//   if (user) {
//     res.json({ success: true, message: 'Login successful' });
//   } else {
//     res.json({ success: false, message: 'Invalid username or password' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Mock database
const users = [
  { username: '@222', password: '111' },
  { username: 'user2', password: 'password2' },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple authentication (replace with proper authentication logic)
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.json({ success: false, message: 'Invalid username or password' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
