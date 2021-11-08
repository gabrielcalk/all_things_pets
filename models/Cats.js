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
        Breed: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
        fur_length: {
            type: DataTypes.STRING,
        },
        color: {
            type: DataTypes.STRING,
        },
        hypoallergenic: {
            type: DataTypes.STRING,
        },
        grooming: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        energy: {
            type: DataTypes.STRING,
        },
        playful: {
            type: DataTypes.STRING,
        },
        affection: {
            type: DataTypes.STRING,
        },
        independence: {
            type: DataTypes.STRING,
        }, 
        dog_compatibility: {
            type: DataTypes.STRING,
        }, 
        cat_compatibility: {
            type: DataTypes.STRING,
        }, 
        child_compatibility: {
            type: DataTypes.STRING,
        }, 
    },

{
    sequelize,
    modelName: "cats",
    timestamps: false,
}
);

module.exports = Cats;