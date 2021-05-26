model.exports = (sequelize, DataTypes) => {
	const Comment = sequelize.define("Comment", {
		user_id: {
			type: DataTypes.Integer, 
			allowNull: false
		}, 
		text: DataTypes.String(255); 
		likes: DataTypes.Integer; 
	}); 
	models.Comment.belongsTo(models.User {foreignKey: {allowNull: false}}); 

	return Comment; 
}