module.exports = (sequelize, DataTypes) => {
	const Comment = sequelize.define("Comment", {
		user_id: {
			type: DataTypes.INTEGER, 
			allowNull: false
		}, 
		text: DataTypes.STRING(255),
		likes: DataTypes.INTEGER
	}); 
	Comment.associate = (models) => {
		models.Comment.belongsTo(models.User, {foreignKey: {allowNull: false}}); 
	}
	

	return Comment; 
}