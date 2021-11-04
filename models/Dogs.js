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
        breedGroup: {
            type: DataTypes.STRING,
            allowNull: false
        },
        breedName: {
            type: DataTypes.STRING,
        },
     //   hypoallergenic: {
       //     type: DataTypes.BOOLEAN,
    //    }, 
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
        children: {
            type: DataTypes.INTEGER,
        },
        protective: {
            type: DataTypes.INTEGER,
        },
        playfulness: {
            type:DataTypes.INTEGER,
        },
        energy: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        trainable: {
            type: DataTypes.INTEGER,
        },
        barking: {
            type: DataTypes.INTEGER,
        },
        energy: {
            type: DataTypes.INTEGER,
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