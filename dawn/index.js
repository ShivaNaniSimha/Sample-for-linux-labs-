const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Dawn App Running Successfully 🚀");
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    app: "dawn",
    time: new Date().toISOString()
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Dawn app running on port ${PORT}`);
});
