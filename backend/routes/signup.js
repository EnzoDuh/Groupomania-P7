const router = require("express").Router();
//Controllers
const signupCtrl = require("../controllers/signup");
//Route pour la création d'un utilisateur en user puis en admin
router.post("/", signupCtrl.signup);

module.exports = router;