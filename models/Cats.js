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
        hypo_allergenic: {
            type: DataTypes.STRING,
        },
        grooming_frequency: {
            type: DataTypes.STRING,
        },
        like_children: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        outdoor_indoor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        energy_level: {
            type: DataTypes.STRING,
        },
        affectionate: {
            type: DataTypes.STRING,
        },
        independence: {
            type: DataTypes.STRING,
        },
        images: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        }, 
    },

{
    sequelize,
    modelName: "cats",
    timestamps: false,
}
);

module.exports = Cats;