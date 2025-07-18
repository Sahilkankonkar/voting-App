const mongoose = require('mongoose');
require('dotenv').config();


//const mongoURL = process.env.MONGODB_URL_LOCAL 
const mongoURL = process.env.MONGODB_URL;

// Set up MongoDB connection
mongoose.connect(process.env.MONGODB_URL);


const db = mongoose.connection;


db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;

