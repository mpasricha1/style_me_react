module.export = (sequelize, DataTypes) => {
	const Post = sequelize.define("Post", {
		user_id: {
			type: DataType.Integer, 
			allowNull: false
		},
		outfit_id: {
			type: DataType.Integer, 
			allowNull: false
		}, 
		text: {
			type: DataType.STRING(255), 
			allowNull: false
		}, 
		likes: {
			type: DataType.Integer
		}
	}); 
	models.Post.belongsTo(models.User {foreignKey: {allowNull: false}}); 
	models.Post.belongsTo(models.Outfit {foreignKey: {allowNull: false}}); 

	return Post;
}	