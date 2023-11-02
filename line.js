const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000; // Define the port for your server

// Configure JSON parsing for incoming requests
app.use(bodyParser.json());

// Create a route to handle LINE webhook requests
app.post('/webhook', (req, res) => {
  const data = req.body; // The JSON payload from LINE

  // Access user ID based on the type of event
  if (data.events && data.events.length > 0) {
    const userId = data.events[0].source.userId;
    console.log('User ID:', userId);
  }

  // Handle other events or logic as needed

  res.sendStatus(200); // Respond with a 200 status code to acknowledge receipt
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
