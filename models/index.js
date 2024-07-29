
// Impor model
import User from "./user.js";
import Product from "./product.js";
import Transaction from "./transaction.js";

// Definisikan relasi antar model
User.hasMany(Transaction);
Product.hasMany(Transaction);
Transaction.belongsTo(User);
Transaction.belongsTo(Product);

// Pastikan untuk mengekspor sequelize dan models
export { User, Product, Transaction };
