import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());

app.get("/hello-minimarket", (_req, res) => res.json({ ok: true }));

const PORT = Number(process.env.PORT) || 3001;
app.listen(PORT, () => {
  console.log(`API lista en http://localhost:${PORT}`);
});
