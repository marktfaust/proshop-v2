import express from "express";
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.port || 5001;

connectDB(); // Connect to MongoDB
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

// Custom error handling middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
