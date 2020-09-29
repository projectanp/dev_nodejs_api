"use strict";
// Include Sequelize module. 
var Sequelize = require('sequelize');
// Import sequelize object,  
// Database connection pool managed by Sequelize. 
var sequelize = require('../utils/database');
// Define method takes two arrguments 
// 1st - name of table 
// 2nd - columns inside the table 
var User = sequelize.define('user', {
    // Column-1, user_id is an object with  
    // properties like type, keys,  
    // validation of column. 
    user_id: {
        // Sequelize module has INTEGER Data_Type. 
        type: Sequelize.INTEGER,
        // To increment user_id automatically. 
        autoIncrement: true,
        // user_id can not be null. 
        allowNull: false,
        // For uniquely identify user. 
        primaryKey: true
    },
    // Column-2, name 
    firstname: { type: Sequelize.STRING, allowNull: false },
    lastname: { type: Sequelize.STRING, allowNull: false },
    // Column-3, email 
    email: { type: Sequelize.STRING, allowNull: false },
    mobileno: { type: Sequelize.INTEGER, allowNull: true },
    // Column-4, default values for 
    // dates => current time 
    myDate: { type: Sequelize.DATE,
        defaultValue: Sequelize.NOW },
    // Timestamps 
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
});
function createUser(user) {
    User.create({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email
    }).then(function (users) {
        if (users) {
            console.log('User has been created successfully.');
        }
        else {
            console.log('Unable to create user. Please try again later.');
        }
    });
}
function updateUser(user) {
    User.update({ lastname: user.lastname }, { where: { user_id: user.id } })
        .then(function (rowsUpdated) {
        console.log('User has been updated successfully.');
    });
    // Exporting User, using this constant 
    // we can perform CRUD operations on 
    // 'user' table. 
}
module.exports = User;
