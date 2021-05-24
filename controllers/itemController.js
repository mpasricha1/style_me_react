const db = require("../models"); 

module.exports = {
	newItem: function(req, res){
		db.Item.create({
			UserId: req.body.userId,
			CategoryId: req.body.categoryId,
			item_name: req.body.itemName,
			image_link: req.body.url,
			image_thumbnail: req.body.thumbnail,
			prediction: req.body.prediction
		});
	}, 
	getAllItemsbyCat: function(req, res){ 
		db.Item.findAll({
			raw: true,
			where: { CategoryId: cat_id, userId: user_id }
		}).then(items => {
			res.json(items)
		});
	}
};