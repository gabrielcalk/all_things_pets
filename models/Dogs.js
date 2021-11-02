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
        hypoallergenic: {
            type: DataTypes.BOOLEAN,
        }, 
        lifeSpan: {
            type: DataTypes.INTEGER,
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
        temperment: {
            type: DataTypes.STRING,
        },
        children: {
            type: DataTypes.BOOLEAN,
        },
        guarding: {
            type: DataTypes.BOOLEAN,
        },
        dependence: {
            type: DataTypes.STRING,
        },
        Sports: {
            type:DataTypes.BOOLEAN,
        },
        hunting: {
            type: DataTypes.BOOLEAN,
        },
        livingEnvironment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        yardSize: {
            type: DataTypes.STRING,
        },
        trainingReqs: {
            type: DataTypes.STRING,
        },
        exerciseReqs: {
            type: DataTypes.STRING,
        },
        priorExpReq: {
            type: DataTypes.STRING,
        },
        vet: {
            type: DataTypes.STRING,
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