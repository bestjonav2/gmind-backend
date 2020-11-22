import mongoose from "mongoose";
import dbconfig from "../db.config";
import { Post } from "./Post";

mongoose.Promise = global.Promise;

const db = {
  mongoose: mongoose,
  dbUrl: dbconfig.url,
  post: Post,
};

export default db;
