const db = require("../models"); 

module.exports = {
	getCatalogs: function(req, res){
		db.Catalog.findAll({
			raw: true,
			attributes: ["id", "catalog_name"],
			where: {
				UserId: req.params.id
			}
		}).then(catalogs => {
			res.json(catalogs);
		})
	}, 
	insertCatItem: function(req, res){
		db.Catalog_item.create({
			CatalogId: catalog_id, 
			OutfitId: outfit_id
		})
	}
}