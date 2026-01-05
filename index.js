const express = require("express");
const app = express();
app.use(express.json());

app.post("/esim-segdesUsage", (req, res) => {
  console.log("eSIM usage callback received:", req.body);
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
