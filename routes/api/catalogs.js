const router = require("express").Router(); 
const catalogController = require("../../controllers/catalogController"); 

router.route("/")
	.get(catalogController.getCatalogs)

module.exports = router; 