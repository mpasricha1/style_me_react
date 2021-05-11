module.exports = (sequelize, DataTypes) => {
	const Outfit = sequelize.define("Outfit", {
		outfit_name: {
			type: DataTypes.STRING(50), 
			allowNull: false
		}
	}); 
	Outfit.associate = (models) => {models.Outfit.hasMany(models.Outfit_item)};
	return Outfit;
	
}