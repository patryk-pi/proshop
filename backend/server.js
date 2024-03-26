import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
const port = process.env.PORT || 8000;
import productRoutes from "./routes/productRoutes.js";

connectDB(); // Connect to MongoDB

const app = express();

app.get("/", (req, res) => {
    res.send("Api is running");
});

app.use("/api/products", productRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
