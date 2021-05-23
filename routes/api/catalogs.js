const router = require("express").Router(); 
const catalogController = require("../../controllers/catalogController"); 

router.route("/:id")
	.get(catalogController.getCatalogs)

module.exports = router; 