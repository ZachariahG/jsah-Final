import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

const errorResponse = (error) => {
  console.error("FAIL", error);
  return { message: "Internal Server Error" };
};

const sayHello = async () => {
  try {
    await client.connect();
    const collection = client.db().collection("one");
    const result = await collection.find({}).toArray();

    return result;
  } catch (error) {
    return errorResponse(error);
  } finally {
    await client.close();
  }
};

export default sayHello;