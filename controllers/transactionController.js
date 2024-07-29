import { Transaction, Product, User } from "../models/index.js";

export const createTransaction = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const user = req.user; // user is populated by authMiddleware

    const transaction = await Transaction.create({
      productId,
      quantity,
      UserId: user.id,
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTransactionsByMerchant = async (req, res) => {
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
