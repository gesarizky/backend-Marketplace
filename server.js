import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import DB from "./config/database.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/transactions", transactionRoutes);

const startServer = async () => {
  try {
    await DB.sync();
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

startServer();
