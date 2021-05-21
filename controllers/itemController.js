const db = require("../models"); 

module.exports = {
	newItem: function(req, res){
		db.Item.create({
			UserId: req.user.id,
			CategoryId: req.body.id,
			item_name: req.body.item_name,
			image_link: req.body.image,
			image_thumbnail: req.body.thumbnail,
		});
	}
};