const express = require("express");
const mongoose = require("mongoose");
const Thing = require("./models/thing");
const Product = require("./models/product");
const app = express();

mongoose
  .connect("mongodb+srv://usertest:6pqJecu7FazQCZ7@ocfullstack.7leet.mongodb.net/OCFullstack?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/stuff", (req, res, next) => {
  delete req.body._id;
  const thing = new Thing({
    ...req.body,
  });
  thing.save()
  .then(() => res.status(201).json({ message: "Objet enregistré !" }))
  .catch((error) => res.status(400).json({ error }));
    
});

app.put("/api/stuff/:id", (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
});

app.delete("/api/stuff/:id", (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
});

app.get("/api/stuff/:id", (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(404).json({ error }));
});

app.use("/api/stuff", (req, res, next) => {
  Thing.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }));
});
//////////////////////////////////////////////////////////////
// Exo ///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

app.get("/api/products", (req, res, next) => {
  
  Product.find()
    .then((products) => res.status(201).json({products}))
    .catch((error) => res.status(404).json({ error }));
});

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

app.post("/api/products", (req, res, next) => {
  // console.log(req.body);
  delete req.body._id;
  const product = new Product({
    ...req.body,
    });
    // console.log(product)
  product.save()
    .then(product => res.status(201).json({ product }))
    .catch((error) => res.status(400).json({ error }));
}); 

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

app.get("/api/products/:id", (req, res, next) => {
  
  Product.findOne({ _id: req.params.id })
    .then((Product) => res.status(200).json({product : Product}))
    .catch((error) => res.status(404).json({ error }));
});

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

app.put('/api/products/:id', (req, res, next) =>{
  Product.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
  .then(() => res.status(200).json({ message: 'Modified!' }))
  .catch((error) => res.status(400).json({ error }));

});


app.delete("/api/products/:id", (req, res, next) => {
  Product.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Deleted !" }))
    .catch((error) => res.status(400).json({ error }));
});



module.exports = app;
