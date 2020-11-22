import mongoose from "mongoose";
import { MongooseDocument, Schema } from "mongoose";

var schema: Schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    published: Boolean,
  },
  { timestamps: true }
);

schema.method("toJSON", function (this: MongooseDocument) {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export const Post = mongoose.model("post", schema);
