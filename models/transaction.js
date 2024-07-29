import { DataTypes } from "sequelize";
import DB from "../config/database.js";

const Transaction = DB.define("Transaction", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Transaction;
