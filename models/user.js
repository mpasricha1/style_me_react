const bcrypt = require("bcrypt"); 

module.exports = (sequelize, DataTypes) =>{
	const User = sequelize.define("User", {
		full_name: {
			type: DataTypes.STRING(50),
			allowNull: false 
		}, 
		first_name:{
			type: DataTypes.STRING(25)
		}, 
		last_name: {
			type: DataTypes.STRING(25)
		}, 
		email: {
			type: DataTypes.STRING(25),
			unique: true,
			allowNull: false, 
			validate: {
				isEmail: true
			}
		}, 
		password: {
			type: DataTypes.STRING(255), 
			allowNull: false
		},
		google_id: DataTypes.STRING(50), 
		age: DataTypes.INTEGER, 
		gender: DataTypes.STRING(15)
	});

	User.prototype.validPassword = function(password){
		return bcrypt.compareSync(password, this.password); 
	};
	User.addHook("beforeCreate", (user) =>{
		if(user.password){
			user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
		};
	});

	User.associate = (models) => {models.User.hasMany(models.Item, {onDelete: "cascade"})};
	User.associate = (models) => {models.User.hasmany(models.Comment)}
	
	return User;
}
