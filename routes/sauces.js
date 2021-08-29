const express = require("express");
const router = express.Router();

const sauceCTRL = require("../controllers/sauce");

router.get("/", sauceCTRL.getSauce);
router.get("/:id", sauceCTRL.getOneSauce);
router.post("/", sauceCTRL.createSauce);
router.put("/:id", sauceCTRL.modifySauce);
router.delete("/:id", sauceCTRL.deleteSauce);
router.post("/:id/like", sauceCTRL.likeSauce);

module.exports = router;
