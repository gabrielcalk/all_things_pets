const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");
// sequelize Dogs model
class Dogs extends Model {}

Dogs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        breed: {
            type: DataTypes.STRING,
        },
        hair: {
            type: DataTypes.TEXT,
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        talkative: {
            type: DataTypes.BOOLEAN,

        },
        hypoallergenic: {
            type: DataTypes.BOOLEAN,
        } 
    },

{
sequelize,
modelName: "dogs",
}
);

module.exports = Dogs;