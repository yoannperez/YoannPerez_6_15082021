//                                         -------------------------------------------------------
//                                         --                  SAUCES CONTROLLER                --
//                                         -------------------------------------------------------


// required modules
const Sauce = require("../models/sauces");
const fs = require("fs");


// Calling all sauces
exports.getSauce = (req, res, next) => {
  Sauce.find()
    .then((sauces) => res.status(201).json(sauces))
    .catch((error) => res.status(404).json({ error }));
};

// Calling one sauce
exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
    .then((sauce) => res.status(200).json(sauce))
    .catch((error) => res.status(404).json({ error }));
};

// Create a sauce
exports.createSauce = (req, res, next) => {
  const sauceObject = JSON.parse(req.body.sauce);
  // Remove id because we don't need it
  delete sauceObject._id;

  const sauce = new Sauce({
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    likes: 0,
    dislikes: 0,
    usersLiked: [""],
    usersDisliked: [""],
  });
  sauce
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifySauce = (req, res, next) => {
  const sauceObject = req.file
    ? {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
      }
    : { ...req.body };
  Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Modified!" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
    .then((sauce) => {
      const filename = sauce.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Sauce.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Objet supprimé !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.likeSauce = (req, res, next) => {
  let like = req.body.like;

  switch (like) {
    // IF like = 1, l'utilisateur aime (= like) la sauce.
    case 1:
      Sauce.updateOne(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
          $push: { usersLiked: req.body.userId },
        }
      )
        .then(() => res.status(200).json({ message: "Modified!" }))
        .catch((error) => res.status(400).json({ error }));
      // L'ID de l'utilisateur doit être ajouté du tableau usersLiked.

      break;

    // Si like = 0, l'utilisateur annule son like ou son dislike.
    case 0:
      Sauce.findOne({ _id: req.params.id })
        .then((sauce) => {
          if (sauce.usersLiked.find((user) => user === req.body.userId)) {
            Sauce.updateOne(
              { _id: req.params.id },
              {
                $inc: { likes: -1 },
                $pull: { usersLiked: req.body.userId },
              }
            )
              .then(() => {
                res.status(200).json({ message: "Modified!" });
              })
              .catch((error) => {
                res.status(400).json({ error: error });
              });

            // check that the user hasn't already diliked the sauce
          }
          if (sauce.usersDisliked.find((user) => user === req.body.userId)) {
            Sauce.updateOne(
              { _id: req.params.id },
              {
                $inc: { dislikes: -1 },
                $pull: { usersDisliked: req.body.userId },
              }
            )
              .then(() => {
                res.status(200).json({ message: "Modified!" });
              })
              .catch((error) => {
                res.status(400).json({ error: error });
              });
          }
        })
        .catch((error) => {
          res.status(404).json({ error: error });
        });
      // L'ID de l'utilisateur doit être retiré du tableau usersLiked.
      break;

    // Si like = -1, l'utilisateur n'aime pas (=dislike) la sauce.
    case -1:
      Sauce.updateOne(
        { _id: req.params.id },
        {
          $inc: { dislikes: 1 },
          $push: { usersDisliked: req.body.userId },
        }
      )
        .then(() => res.status(200).json({ message: "Modified!" }))
        .catch((error) => res.status(400).json({ error }));
      // L'ID de l'utilisateur doit être ajouté du tableau usersDisliked.
      break;
      default : console.log('error');
  }
};
