'use strict';
const { Model, DataTypes } = require('sequelize');

module.expoerts = (sequelize) => {
    class User extends Model {}
    User.init({
        firstName: {
            type: DataTypes.STRING,

        },
        lastName: {
            type: DataTypes.STRING,

        },
        emailAddress: {
            type: DataTypes.STRING,
            
        },
        password: {
            type: DataTypes.STRING,
            
        },
    }, {  });           // not sure if sequelize should be passed as second parameter here..????????
    
    User.associate = (models) => {
        // Tells Sequelize that a user can be associated with one or more courses
        User.hasMany(models.Course, {
            foreignKey: {
                fieldName: 'userId',
                allowNull: false,
            },
        });
    };
    
    
    return User;
};