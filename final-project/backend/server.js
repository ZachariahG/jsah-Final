const dotenv = require("dotenv");
const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const path = require("path");

dotenv.config();
const app = express();
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error("MONGODB_URI not defined");
}
const client = new MongoClient(process.env.MONGODB_URI);
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

const mongoRouter = express.Router();
const errorResponse = (error, res) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

app.get("/", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db().collection("one");
    const result = await collection.find({}).toArray();

    res.status(200).json(result);
    // console.log(result);
  } catch (error) {
    errorResponse(error, res);
  } finally {
    await client.close();
  }
});

// app.use(express.static(path.join(__dirname, "../frontend/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
// });

// app.get("/", (req, res) => {
//   res.send("Welcome to the backend!");
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
