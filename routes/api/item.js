const router = require("express").Router(); 
const itemController = require("../../controllers/itemController"); 

router.route('/')
	.post(itemController.newItem)

module.exports = router; 