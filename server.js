// Importing required modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
// Importing routes
const bfhlRoutes = require('./apis/bfhl');

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors());
// Use the bfhl routes
app.use('/bfhl', bfhlRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
