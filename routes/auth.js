const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Merchant } = require("../models");
const router = express.Router();
const SECRET_KEY = "your_secret_key";

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const merchant = await Merchant.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json(merchant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const merchant = await Merchant.findOne({ where: { email } });
  if (!merchant) return res.status(400).send("Email or Password is wrong");

  const validPass = await bcrypt.compare(password, merchant.password);
  if (!validPass) return res.status(400).send("Invalid password");

  const token = jwt.sign({ id: merchant.id }, SECRET_KEY);
  res.header("Authorization", token).send(token);
});

module.exports = router;
