const db = require("../models"); 

module.exports = {
	getCatalogs: function(req, res){
		db.Catalog.findAll({
			raw: true,
			attributes: ["id", "catalog_name"],
			where: {
				UserId: req.userId
			}
		})
	}
}