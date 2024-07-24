const express = require("express");
const { Product, Transaction } = require("../models");
const authenticateJWT = require("../middleware/auth");
const router = express.Router();

router.post("/product", authenticateJWT, async (req, res) => {
  const { name, price } = req.body;
  try {
    const product = await Product.create({
      name,
      price,
      MerchantId: req.user.id,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/product/:id", authenticateJWT, async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    const product = await Product.update(
      { name, price },
      { where: { id, MerchantId: req.user.id } }
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/product/:id", authenticateJWT, async (req, res) => {
  const { id } = req.params;
  try {
    await Product.destroy({ where: { id, MerchantId: req.user.id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/customers", authenticateJWT, async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      where: { MerchantId: req.user.id },
      include: ["Product"],
    });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
