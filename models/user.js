import { DataTypes } from "sequelize";
import DB from "../config/database.js";

const User = DB.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("merchant", "customer"),
    allowNull: false,
  },
});

export default User;
