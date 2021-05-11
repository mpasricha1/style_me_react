module.exports = (sequelize, DataTypes) => {
	const Outfit_item = sequelize.define("Outfit_item");

	Outfit_item.associate = (models) =>{ 
		models.Outfit_item.belongsTo(models.Item, {foreignKey: { allowNull: false}});
		models.Outfit_item.belongsTo(models.Outfit, {foreignKey: { allowNull: false}}); 
	}

	return Outfit_item;
}