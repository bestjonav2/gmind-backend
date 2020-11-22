import * as postController from "../controllers/post";
import express from "express";

const router = express.Router();
// Create a new Post
router.post("/", postController.create);

// Retrieve all Posts
router.get("/", postController.findAll);

// Retrieve all published Posts
router.get("/published", postController.findAllPublished);

// Retrieve a single Post with id
router.get("/:id", postController.findOne);

// Update a Post with id
router.put("/:id", postController.update);

// Delete a Post with id
router.delete("/:id", postController.deleteOne);

// Create a new Post
router.delete("/", postController.deleteAll);

export const postRouter = router;
