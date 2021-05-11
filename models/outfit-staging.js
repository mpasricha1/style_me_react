module.exports = (sequelize, DataTypes) => {
	const Outfit_staging = sequelize.define("Outfit_staging", {
		item_id: {
			type: DataTypes.INTEGER, 
			allowNull: false
		},
		img: {
			type: DataTypes.STRING(255), 
			allowNull: false
		}, 
		name: {
			type: DataTypes.STRING(50), 
			allowNull: false
		}
	}); 
	return Outfit_staging;
}