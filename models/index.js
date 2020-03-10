const path = require('path');
const fs = require('fs')
const basename = path.basename(__filename);

const Sequelize = require('sequelize');

const HOST = process.env.DB_HOST || 'localhost'
const USER = process.env.DB_USER || 'root'
const PASSWORD = process.env.DB_PASS || '1234'
const DATABASE = process.env.DB_NAME || 'dummy-db'
const PORT = process.env.DB_PORT || '3360'

let db = {}

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    port: PORT,
    dialect: process.env.DB_TYPE || 'mysql',
    logging: console.log
});

// Test DB
sequelize.authenticate()
    .then(() => {
        console.log('MySQL DB Connected')
    })
    .catch(err => {
        console.log('Error: ' + err)
    });

// import all models
fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model;
    });

// check for model associations
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});


db.sequelize = sequelize
db.Sequelize = Sequelize


module.exports = db;