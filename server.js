const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
