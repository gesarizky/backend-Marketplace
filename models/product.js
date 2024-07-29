import { DataTypes } from "sequelize";
import DB from "../config/database.js";

const Product = DB.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

export default Product;
