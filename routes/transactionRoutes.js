import express from "express";
const router = express.Router();
import {
  createTransaction,
  getTransactionsByMerchant,
} from "../controllers/transactionController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.post("/", authMiddleware, createTransaction);
router.get("/merchant", authMiddleware, getTransactionsByMerchant);

export default router;
