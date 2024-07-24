module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define("Transaction", {
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
  return Transaction;
};
