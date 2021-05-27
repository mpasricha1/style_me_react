const router = require("express").Router(); 
const outfitController = require("../../controllers/outfitController"); 

router.route('/item')
	.post(outfitController.addOutfitItem)

module.exports = router; 