module.exports = (sequelize, DataTypes) =>{
	const comment_item = sequelize.difine("Comment_item"); 

	Comment_item.associate = (models) => {
		models.Comment_item.belongsTo(models.Post, {foreignKey: {allowNulls: false}});
		models.Comment_item.belongsTo(models.Comment, {foreignKey: {allowNulls: false}});
	}

	return Comment_item; 
}