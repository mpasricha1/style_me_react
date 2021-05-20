module.exports = (sequelize, DataTypes) =>{
	const Post_item = sequelize.define("Post_item"); 

	Post_item.associate = (models) => {
		models.Post_item.belongsTo(models.Post, {foreignKey: {allowNulls: false}});
		models.Post_item.belongsTo(models.Comment, {foreignKey: {allowNulls: false}});
	}

	return Post_item; 
}