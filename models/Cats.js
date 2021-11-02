const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");
// sequelize Cats model
class Cats extends Model {}

Cats.init(
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
modelName: "cats",
}
);

module.exports = Cats;