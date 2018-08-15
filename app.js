const express = require('express');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
//    dialectOptions: {
//        ssl: 'Google Cloud'
//    },
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 2000,
        idle: 1000
    },
})

const app = express();

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

app.get('/', function(req, res) {
    res.send('App is running');
}).listen(PORT);

console.log("Waiting for requests. Go to LocalHost:5000");

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });