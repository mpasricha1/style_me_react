const router = require("express").Router(); 
const outfitController = require("../../controllers/outfitController"); 

router.route('/')
	.get(outfitController.getOutfits)
	.post(outfitController.addOutfit)

router.route('/item')
	.post(outfitController.addOutfitItem)

module.exports = router; 