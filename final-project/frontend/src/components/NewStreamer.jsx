import { MongoClient } from "mongodb";
import newStreamer from "./StreamerObject";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

const errorResponse = (error) => {
  console.error("FAIL", error);
  return { message: "Internal Server Error" };
};

const addNewStreamer = async () => {
  try {
    await client.connect();
    const collection = client.db().collection("TwitchStreamers");
    const result = await collection.insertOne(newStreamer);

    return { _id: result.insertedId, ...newStreamer };
  } catch (error) {
    return errorResponse(error);
  } finally {
    await client.close();
  }
};

export default addNewStreamer;