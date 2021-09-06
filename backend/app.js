//                                         -------------------------------------------------------
//                                         --                EXPRESS APPLICATION                --
//                                         -------------------------------------------------------


// Call modules
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

// Call Routes files
const userRoutes = require("./routes/user");
const sauceRoutes = require("./routes/sauces");

// Launch Xpress
const app = express();


// Create a connexion with MongoDB Atlas database
mongoose
  .connect(process.env.MONGO_KEY, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Database Online! You rocks !"))
  .catch(() => console.log("MongoDB Databse Offline, you've got a problem ! Please check .env config file."));


// CORS Definition  
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

// Set static folder for multer
app.use('/images', express.static(path.join(__dirname, 'images')));

// Define BodyParser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Define Routes
app.use("/api/auth", userRoutes); // Routes to identification
app.use("/api/sauces", sauceRoutes); // Routes to sauces

module.exports = app;
