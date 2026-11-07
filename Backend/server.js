const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("AVENTRA Backend is running 🚀");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`AVENTRA Server running on port ${PORT}`);
});