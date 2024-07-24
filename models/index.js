const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config.json");

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Merchant = require("./merchant")(sequelize, DataTypes);
db.Product = require("./product")(sequelize, DataTypes);
db.Transaction = require("./transaction")(sequelize, DataTypes);

db.Merchant.hasMany(db.Product);
db.Product.belongsTo(db.Merchant);

db.Transaction.belongsTo(db.Product);
db.Transaction.belongsTo(db.Merchant);

module.exports = db;
