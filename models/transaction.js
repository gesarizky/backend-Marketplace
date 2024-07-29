import { DataTypes } from "sequelize";
import DB from "../config/database.js";

const Transaction = DB.define("Transaction", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  shippingCost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  discount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

export default Transaction;
