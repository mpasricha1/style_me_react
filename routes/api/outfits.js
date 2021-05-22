const router = require("express").Router(); 
const outfitController = require("../../controllers/outfitController"); 

router.route('/')
	.get(outfitController.getOutfits)

module.exports = router; 