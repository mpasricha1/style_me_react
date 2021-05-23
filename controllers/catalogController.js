const db = require("../models"); 

module.exports = {
	getCatalogs: function(req, res){
		console.log("THIS IS REQ", req.params.id)
		db.Catalog.findAll({
			raw: true,
			attributes: ["id", "catalog_name"],
			where: {
				UserId: req.params.id
			}
		}).then(catalogs => {
			res.json(catalogs);
		})
	}
}