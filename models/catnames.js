const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");
// sequelize catnames model
class Catnames extends Model {}

Catnames.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },

    {
        sequelize,
        modelName: "catnames",
        timestamps: false,
    }
    );
    
module.exports = Catnames;