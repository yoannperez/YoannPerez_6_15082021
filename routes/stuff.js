const express = require("express");
const router = express.Router();

const stuffCTRL = require('../controllers/stuff')


router.post("/", stuffCTRL.createThing );
router.put("/:id", stuffCTRL.modifyThing);
router.get("/", stuffCTRL.getThing);
router.delete("/:id", stuffCTRL.deleteThing);
router.get("/:id", stuffCTRL.getOneThing);



module.exports = router;
