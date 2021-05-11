module.exports = (sequelize, DataTypes) => {
	const Categories = sequelize.define("Categories",{
		category_name: {
			type: DataTypes.STRING(50),
			allowNull: false
		} 
	});
	
	Categories.associate = (models) => {models.Categories.hasOne(models.Item)};

	return Categories;
}