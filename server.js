const express = require("express");
const app = express();
const PORT = 3002;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  const { email, token } = req.body;

  res.json({
    email,
    token,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
