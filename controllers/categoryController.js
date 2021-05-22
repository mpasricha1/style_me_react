const db = require("../models"); 

module.exports = {
	getCategory: function(req, res){
		db.Categories.findAll({
		raw: true,
		attributes: ["id", "category_name"]
	}).then(cat => res.json(cat))
	}
}