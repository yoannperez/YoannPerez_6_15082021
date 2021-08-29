const express = require("express");
const router = express.Router();

const auth = require('../middleware/auth');

const stuffCTRL = require('../controllers/stuff')


router.post("/", auth, stuffCTRL.createThing );
router.put("/:id", auth, stuffCTRL.modifyThing);
router.get("/", auth, stuffCTRL.getThing);
router.delete("/:id", auth, stuffCTRL.deleteThing);
router.get("/:id", auth, stuffCTRL.getOneThing);



module.exports = router;
