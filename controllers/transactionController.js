import { Transaction, Product, User } from "../models/index.js";

export const createTransaction = async (req, res) => {
  try {
    const { ProductId, quantity } = req.body;
    const product = await Product.findByPk(ProductId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const user = req.user; // user is populated by authMiddleware
    let total = product.price * quantity;
    let shippingCost = total > 15000 ? 0 : 5000;
    let discount = total > 50000 ? total * 0.1 : 0;
    total = total - discount + shippingCost;

    const transaction = await Transaction.create({
      ProductId,
      quantity,
      UserId: user.id,
      total,
      shippingCost,
      discount,
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTransactionsByAuth = async (req, res) => {
  try {
    const user = req.user; // user is populated by authMiddleware
    const transactions = await Transaction.findAll({
      where: { UserId: user.id },
      include: [Product],
    });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      include: [Product],
    });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
