const router = require("express").Router(); 
const catalogController = require("../../controllers/catalogController"); 

router.route("/:id")
	.get(catalogController.getCatalogs)

router.route("/item")
	.post(catalogController.insertCatItem)

module.exports = router; 