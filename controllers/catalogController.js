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
		console.log("INSERT into CATALOG", req.body)
		db.Catalog_item.create({
			CatalogId: req.body.catalogId, 
			OutfitId: req.body.outfitId
		})
	}
}