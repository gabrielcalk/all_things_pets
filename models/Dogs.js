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
        breedName: {
            type: DataTypes.STRING,
        },
        breedGroup: {
            type: DataTypes.STRING,
            allowNull: false
        },
        size: {
            type: DataTypes.STRING,
        }, 
        energy: {
            type: DataTypes.INTEGER,
        },
        children: {
            type: DataTypes.INTEGER,
        },
        protective: {
            type: DataTypes.INTEGER,
        },
        otherDogs: {
            type: DataTypes.INTEGER,
        },
        strangers: {
            type: DataTypes.INTEGER,
        },
        grooming: {
            type: DataTypes.INTEGER,
        },
        trainable: {
            type: DataTypes.INTEGER,
        },
        barking: {
            type: DataTypes.INTEGER,
        },
        life: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        coat: {
            type: DataTypes.STRING,
        },
        weight: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        height: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        playfulness: {
            type:DataTypes.INTEGER,
        },
        energy: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        coat: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },

{
    sequelize,
    modelName: "dogs",
    timestamps: false,
}
);

module.exports = Dogs;