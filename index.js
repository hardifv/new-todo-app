const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser
const app = express();
const PORT = 3000;

// Use body-parser middleware
app.use(bodyParser.json());

app.post('/add-task', (req, res) => {
  const { task } = req.body; // Make sure this is defined
  if (task) {
    res.send(`Task ${task} added`);
  } else {
    res.status(400).send('Task is required');
  }
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server }; // Export app and server
