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
        names: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
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