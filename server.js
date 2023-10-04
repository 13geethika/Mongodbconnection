const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Exampledemo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log('Connection established');

const Item = require("./public/models/Item"); // Create the Item model

app.get("http://localhost:3000/api/users", async (req, res) => {
    try {
      const users = await Item.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(404).json({ error: "Server Error" });
    }
  });  