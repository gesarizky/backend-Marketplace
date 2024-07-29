import express from "express";
const router = express.Router();
import {
  createTransaction,
  getAllTransactions,
  getTransactionsByAuth,
} from "../controllers/transactionController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.post("/", authMiddleware, createTransaction);
router.get("/customer", authMiddleware, getTransactionsByAuth);
router.get("/merchant", authMiddleware, getAllTransactions);

export default router;
