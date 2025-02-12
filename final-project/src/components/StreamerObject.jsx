import { ObjectId } from "mongodb";

const newStreamer = {
_id: ObjectId,
title: String,
user_name: String,
timesCalled: Number
}

export default newStreamer;