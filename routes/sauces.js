const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const sauceCTRL = require("../controllers/sauce");

router.get("/", auth, sauceCTRL.getSauce);
router.get("/:id", auth, sauceCTRL.getOneSauce);
router.post("/", auth, multer, sauceCTRL.createSauce);
router.put("/:id", auth, multer, sauceCTRL.modifySauce);
router.delete("/:id", auth, sauceCTRL.deleteSauce);
router.post("/:id/like", auth, sauceCTRL.likeSauce);

module.exports = router;
