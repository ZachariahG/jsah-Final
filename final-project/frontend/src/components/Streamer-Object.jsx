import { ObjectId } from "mongodb";

const newStreamer = {
  _id: ObjectId,
  title: String,
  user_id: String,
  user_name: String,
};

export default newStreamer;
