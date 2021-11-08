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
        image:{
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
        height: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        size: {
            type: DataTypes.STRING,
        }, 
        weight: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        life: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        breedGroup: {
            type: DataTypes.STRING,
            allowNull: false
        },
        children: {
            type: DataTypes.INTEGER,
        },
        otherDogs: {
            type: DataTypes.INTEGER,
        },
        grooming: {
            type: DataTypes.INTEGER,
        },
        coat: {
            type: DataTypes.STRING,
        },
        strangers: {
            type: DataTypes.INTEGER,
        },
        playfulness: {
            type:DataTypes.INTEGER,
        },
        protective: {
            type: DataTypes.INTEGER,
        },
        trainable: {
            type: DataTypes.INTEGER,
        },
        barking: {
            type: DataTypes.INTEGER,
        },
        energy: {
            type: DataTypes.INTEGER,
        },
    },

{
    sequelize,
    modelName: "dogs",
    timestamps: false,
}
);

module.exports = Dogs;
