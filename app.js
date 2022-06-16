import express from "express";
import Database from "./db.js";
const app = express();

app.use(express.json());

Database.connectDB();

app.get("/messages", async (req, res) => {
  try {
    const messages = await Database.Messages.find();

    res.json(messages);
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
});

app.post("/messages", async (req, res) => {
  try {
    const message = await Database.Messages.create(req.body);
    console.log("message", message);
    res.json(message);
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
});

app.listen(3000, () => console.log(`app listening on port 3000!`));
