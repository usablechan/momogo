const dbConfig = require('../config/dbconfig');
const Sequelize = require('sequelize');

const sequelizeConfig = new Sequelize(
    dbConfig.db,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
    }
);

const db = {};

db.sequelize = Sequelize;
db.sequelizeConfig = sequelizeConfig;

db.Food = require('./model')(sequelizeConfig, Sequelize).Food;
db.User = require('./model')(sequelizeConfig, Sequelize).User;

module.exports = db;