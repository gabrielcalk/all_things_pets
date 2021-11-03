const sequelize = require('../config/connections')
const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt')

// Create a User Class
class User extends Model{
    checkPassword(password_check){
        return bcrypt.compareSync(password_check, this.password)
    }
}

// Models with the User information
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        pets: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 100]
            },
        },
    },
    {
        hooks:{
            beforeCreate: async (userPassword) =>{
                userPassword.password = await bcrypt.hash(userPassword.password, 10);
                return userPassword
            },
        },
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'user'
    }
);

/**
 * @exports User
 */
module.exports = User;