module.exports = (sequelize, DataTypes) =>{
	const Item = sequelize.define("Item", {
		item_name: {
			type: DataTypes.STRING(25), 
			allowNull: false
		}, 
		product_link: DataTypes.STRING(255), 
		image_link: {
			type: DataTypes.STRING(255), 
			allowNull: false
		}, 
		image_thumbnail: {
			type: DataTypes.STRING(255), 
			allowNull: false
		}, 
		prediction: {
			type: DataTypes.BOOLEAN,
			allowNull: false	
		},
		type: DataTypes.STRING(255)
	})

	Item.associate = (models) =>{ 
		models.Item.belongsTo(models.User,{foreignKey: { allowNull: false}});
		models.Item.belongsTo(models.Categories, {foreignKey: { allowNull: false}});
		models.Item.hasMany(models.Outfit_item);
	};

	return Item;
}