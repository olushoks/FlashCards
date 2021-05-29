const connectDB = require("./starter/database");
const express = require("express");
const app = express();
const cors = require("cors");
const cards = require("./routes/cards");
const collections = require("./routes/collections");

connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/cards", cards);
app.use("/api/collections", collections);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Started on PORT ${PORT}`);
});
