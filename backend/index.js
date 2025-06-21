const express = require("express");
const axios = require("axios");
require("dotenv").config();
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;

// Servíruj frontend staticky
app.use(express.static(path.join(__dirname, "../Frontend")));

app.get("/api/quote", async (req, res) => {
  const symbol = req.query.symbol;
  if (!symbol) return res.status(400).json({ error: "Missing symbol" });

  try {
    const response = await axios.get("https://finnhub.io/api/v1/quote", {
      params: { symbol, token: FINNHUB_API_KEY }
    });
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Pro kořenovou URL pošli index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/index.html"));
});
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../Frontend/index.html"));
});

app.listen(PORT, () => console.log(`API running on port ${PORT}`));

console.log("Serving static from:", path.join(__dirname, "../Frontend"));