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
        lifeSpan: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        hair: {
            type: DataTypes.TEXT,
        },
        weight: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        height: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        temperment: {
            type: DataTypes.BOOLEAN,
        },
        hypoallergenic: {
            type: DataTypes.BOOLEAN,
        }, 
        children: {
            type: DataTypes.BOOLEAN,
        },
        guarding: {
            type: DataTypes.BOOLEAN,
        },
        Sports: {
            type:DataTypes.BOOLEAN,
        },
        dependence: {
            type: DataTypes.BOOLEAN,
        },
        hunting: {
            type: DataTypes.BOOLEAN,
        },
        livingEnvironment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        yardSize: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        trainingReqs: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        exerciseReqs: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        priorExpReq: {
            type: DataTypes.BOOLEAN
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },

{
sequelize,
modelName: "dogs",
}
);

module.exports = Dogs;