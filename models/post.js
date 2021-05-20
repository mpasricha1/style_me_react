module.exports = (sequelize, DataTypes) => {
	const Post = sequelize.define("Post", {
		user_id: {
			type: DataTypes.INTEGER, 
			allowNull: false
		},
		outfit_id: {
			type: DataTypes.INTEGER, 
			allowNull: false
		}, 
		text: {
			type: DataTypes.STRING(255), 
			allowNull: false
		}, 
		likes: {
			type: DataTypes.INTEGER
		}
	}); 

	Post.associate = (models) => {
		models.Post.belongsTo(models.User,{foreignKey: {allowNull: false}}); 
		models.Post.belongsTo(models.Outfit, {foreignKey: {allowNull: false}}); 
	}
	

	return Post;
}	