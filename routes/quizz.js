const express = require("express");
const router = express.Router();

const productCTRL = require("../controllers/quizz");

router.get("/", productCTRL.getProduct);
router.post("/", productCTRL.saveProduct);
router.get("/:id", productCTRL.getOneProduct);
router.put("/:id", productCTRL.modifyProduct);
router.delete("/:id", productCTRL.deleteProduct);

module.exports = router;