import { REACTIONS } from "../components/Emojis";
import dotenv from 'dotenv';

const uri = MONGODB_URI;
const client = new MongoClient(uri);
await client.connect();

const database = client.db('Emojis');

export default async function addPostReaction(req, res) {
    const {
      query: { id: postId },
    } = req;
  
    const clientReactions = req.body;
  
    try {
      // Integrate with MongoDB
      
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(postDoc?.reactions || {}));
    } catch (e) {
      console.error('Error saving reactions', e);
  
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({}));
    }
  }

  const postId = req.query.id;
const inputReactions = req.body;

const posts = database.collection('posts');

const validInputReactions = Object.entries(clientReactions)
  .filter(([reactionKey]) => {
    return Object.prototype.hasOwnProperty.call(REACTIONS, reactionKey);
  });
  
const mutations = Object.fromEntries(
  validReactions.map(([key, value]) => ['reactions.' + key, value])
);

if (!Object.keys(mutations).length) {
  console.error('Reactions mutations was invalid.');
  
  res.statusCode = 500;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({}));
  return;
}

const postDoc = await posts.findOneAndUpdate(
  { postId },
  { $inc: { ...mutations } },
  { upsert: true, returnNewDocument: true }
);

res.statusCode = 200;
res.setHeader('Content-Type', 'application/json');
res.end(JSON.stringify(postDoc.reactions || {}));