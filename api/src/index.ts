import "dotenv/config";
import express from "express";
import productsRouter from "./products.router";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(express.json());
app.use("/api/products", productsRouter);

app.listen(PORT, () => {
  console.log(`API disponible en http://localhost:${PORT}`);
});
