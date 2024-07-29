import express from "express";
const router = express.Router();
import {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.post("/", authMiddleware, createProduct);
router.get("/", getAllProducts);
router.put("/:id", authMiddleware, updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);

export default router;
