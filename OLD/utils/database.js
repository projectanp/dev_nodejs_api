"use strict";
//Including dependency
var Sequelize = require('sequelize');
//Setting up the config
var sequelize = new Sequelize('mysql', 'root', null, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
//Checking connection status
sequelize
    .authenticate()
    .then(function (err) {
    console.log('Connection has been established successfully.');
}, function (err) {
    console.log('Unable to connect to the database:', err);
});
module.exports = sequelize;
