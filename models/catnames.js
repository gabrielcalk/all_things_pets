const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");
// sequelize catnames model
class catnames extends Model {}

catnames.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        names: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },

    {
    sequelize,
    modelName: "catnames",
    }
    );
    module.exports = catnames;