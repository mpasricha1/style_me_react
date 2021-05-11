module.exports = (sequelize, DataTypes) => {
	const Counters = sequelize.define("Counters", {
		counter_name: DataTypes.STRING(25), 
		value: DataTypes.INTEGER
	})

	return Counters;
}