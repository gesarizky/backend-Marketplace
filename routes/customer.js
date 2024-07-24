const express = require("express");
const { Product, Transaction } = require("../models");
const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/buy", async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const product = await Product.findByPk(productId);
    if (!product) return res.status(404).send("Product not found");

    let total = product.price * quantity;
    let shippingCost = total > 15000 ? 0 : 5000;
    let discount = total > 50000 ? total * 0.1 : 0;
    total = total - discount + shippingCost;

    const transaction = await Transaction.create({
      ProductId: productId,
      MerchantId: product.MerchantId,
      quantity,
      total,
      shippingCost,
      discount,
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
