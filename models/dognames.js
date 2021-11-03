const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");
// sequelize Dogs model
class dognames extends Model {}

dognames.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        male: {
            type: DataTypes.STRING,
            allowNull: false
        },
        female: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },

    {
    sequelize,
    modelName: "dognames",
    }
    );
    module.exports = dognames;
