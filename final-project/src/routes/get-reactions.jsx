import { REACTIONS } from "../components/Emojis";
import { MongoClient } from "mongodb";

const uri = import.meta.env.MONGODB_URI;
const client = new MongoClient(uri);
await client.connect();

const database = client.db("Emojis");

export default async function getPostReations(req, res) {
  const {
    query: { id: postId },
  } = req;

  try {
    // Here is where we will integrate with MongoDB database

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({}));
  } catch (e) {
    console.error(e);

    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({}));
  }
}

const postId = req.query.id;
const posts = database.collection("posts");
const postDoc = await posts.findOne({ postId }, { reactions: true });
const { reactions = {} } = postDoc || {};

const reactionValues = Object.fromEntries(
  Object.entries(reactions).filter(([key]) =>
    Object.prototype.hasOwnProperty.call(REACTIONS, key)
  )
);

res.statusCode = 200;
res.setHeader("Content-Type", "application/json");
res.end(JSON.stringify(reactionValues));
