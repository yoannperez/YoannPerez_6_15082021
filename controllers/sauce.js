const Sauce = require("../models/sauces");

exports.getSauce = (req, res, next) => {
  console.log("get sauce");
  console.log
  Sauce.find()
    .then((sauces) => res.status(201).json( sauces ))
    .catch((error) => res.status(404).json({ error }));
};

exports.getOneSauce = (req, res, next) => {
  console.log("get one sauce");
  //   Product.findOne({ _id: req.params.id })
  //     .then((Product) => res.status(200).json({ product: Product }))
  //     .catch((error) => res.status(404).json({ error }));
};

exports.createSauce = (req, res, next) => {
  const sauceObject = JSON.parse(req.body.sauce);
  // console.log(sauceObject)
  delete sauceObject._id;
  const sauce = new Sauce({
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    likes: 0,
    dislikes: 0,
    usersLiked: [""],
    usersDisliked: [""],
  });
  console.log(sauce)
  sauce.save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));

  //   delete req.body._id;
  //   const sauce = new Sauce({
  //     ...req.body,
  //   });
  //   console.log(sauce)
  //   sauce
  //     .save()
  //     .then((product) => res.status(201).json({ product }))
  //     .catch((error) => res.status(400).json({ error }));
};

exports.modifySauce = (req, res, next) => {
  Product.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Modified!" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteSauce = (req, res, next) => {
  console.log("delete sauce");
  //   Product.deleteOne({ _id: req.params.id })
  //     .then(() => res.status(200).json({ message: "Deleted !" }))
  //     .catch((error) => res.status(400).json({ error }));
};

exports.likeSauce = (req, res, next) => {
  console.log("like sauce");
  //   Product.deleteOne({ _id: req.params.id })
  //     .then(() => res.status(200).json({ message: "Deleted !" }))
  //     .catch((error) => res.status(400).json({ error }));
};
