//                                         -------------------------------------------------------
//                                         --                 ROUTES FOR SAUCES                 --
//                                         -------------------------------------------------------

// Call modules
const express = require("express");
const router = express.Router();

// Call Middlewares
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

// Call controller
const sauceCTRL = require("../controllers/sauce");

router.get("/", auth, sauceCTRL.getSauce);
router.get("/:id", auth, sauceCTRL.getOneSauce);
router.post("/", auth, multer, sauceCTRL.createSauce);
router.put("/:id", auth, multer, sauceCTRL.modifySauce);
router.delete("/:id", auth, sauceCTRL.deleteSauce);
router.post("/:id/like", auth, sauceCTRL.likeSauce);

// Export module
module.exports = router;
