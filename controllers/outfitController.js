const db = require("../models"); 

module.exports = {
		getOutfits: function(req, res){
			db.Catalog_item.findAll({
			raw: true, //img link, item id, item name, outfit name,
			where: { catalogId: catId },
			include: [{
				model: db.Outfit,
				required: true,
				attributes: ["outfit_name","id"],
				include: [{
					model: db.Outfit_item,
					required: true,
					include: [{
						model: db.Item,
						required: true,
						where: { userId: userId },
						attributes: ["image_link"]
					}]
				}]
			}]
		})
	}
}