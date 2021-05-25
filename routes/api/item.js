const router = require("express").Router(); 
const itemController = require("../../controllers/itemController");

router.route('/')
	.post(itemController.newItem)

router.route("/:id/:userId")
	.get(itemController.getAllItemsbyCat)

module.exports = router; 