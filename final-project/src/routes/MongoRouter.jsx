import express from "express";
import { MongoClient, ObjectId} from "mongodb";
import newStreamer from "../components/StreamerObject";
import dotenv from "dotenv";

dotenv.config();
const mongoRouter = express.Router();
const client = new MongoClient(process.env.MONGODB_URI);

const errorResponse = (error, res) => {
    console.error("FAIL", error);
    res.status(500).json({ message: "Internal Server Error" });
  };


mongoRouter.post("/twitchUsers", async (req, res) => {
    try {
      await client.connect();
      const collection = client.db().collection("twitchUsers");
  
      const newStreamer = req.body;
      const result = await collection.insertOne(newStreamer);
      
      res.status(201).json({ _id: result.insertedId, ...newStreamer });
    } catch (error) {
      errorResponse(error, res);
    } finally {
      await client.close();
    }
  });
  
  export default mongoRouter;