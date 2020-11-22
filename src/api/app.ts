import express from "express";
import { postRouter } from "./routes/postRouter";

const api = express();

// ******** Routes
// Test routes
api.get("/", (req, res) => {
  res.send("testeroni");
});
// Post routes
api.use("/post", postRouter);

export default api;
