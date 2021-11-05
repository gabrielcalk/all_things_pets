const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");
// sequelize Locations model
class locations extends Model {}

locations.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
        }, 
        phoneNumber: {
            type: DataTypes.STRING,
        },
        website: {
            type: DataTypes.TEXT,
        },
        image: {
            type: DataTypes.TEXT,
        },
    },

{
    sequelize,
    modelName: "locations",
    timestamps: false,
}
);

module.exports = locations;