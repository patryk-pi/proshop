import express from "express";
const port = 5001;
import products from "./data/products.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Api is running");
});

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
