const dotenv = require("dotenv");
const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const path = require("path");

dotenv.config();
const app = express();
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error("MONGO_URI not defined");
}
const client = new MongoClient(process.env.MONGO_URI);
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

const mongoRouter = express.Router();
// const client = new MongoClient(process.env.MONGO_URI);

const errorResponse = (error, res) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

mongoRouter.post("/streams", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db().collection("streams");

    const newStreamer = req.body;
    const result = await collection.insertOne(newStreamer);

    res.status(201).json({ _id: result.insertedId, ...newStreamer });
  } catch (error) {
    errorResponse(error, res);
  } finally {
    await client.close();
  }
});

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
