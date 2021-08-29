const express = require("express");
const mongoose = require("mongoose");

const stuffRoutes = require("./routes/stuff");
const quizzRoutes = require("./routes/quizz");
const userRoutes = require("./routes/user");
const sauceRoutes = require("./routes/sauces");

const app = express();

mongoose
  .connect("mongodb+srv://usertest:6pqJecu7FazQCZ7@ocfullstack.7leet.mongodb.net/OCFullstack?retryWrites=true&w=majority", { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connexion à MongoDB réussie ! You rocks !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/stuff", stuffRoutes);
app.use("/api/products", quizzRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);

module.exports = app;
