'use strict';
const { Model, DataTypes } = require('sequelize');

module.expoerts = (sequelize) => {
    class Course extends Model {}
    Course.init({
        title: {
            type: DataTypes.STRING,

        },
        description: {
            type: DataTypes.TEXT,

        },
        estimatedTime: {
            type: DataTypes.STRING,
            
        },
        materialsNeeded: {
            type: DataTypes.STRING,
            
        },

    }, {  });           // not sure if sequelize should be passed as second parameter here..????????

    Course.associate = (models) => {
        // Tells Sequelize that a course can be associated with only 1 user
        Course.belongsTo(models.User, {
            foreignKey: {
                fieldName: 'userId',
                allowNull: false,
            },
        });
    };


    return User;
};