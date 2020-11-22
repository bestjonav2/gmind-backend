import db from "../models";
import { Request, Response } from "express";

// Create and Save a new Post
export const create = (req: Request, res: Response) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Title can not be empty!" });
    return;
  }
  if (!req.body.description) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a post
  const gpost = new db.post({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  });

  // Save post in the database
  gpost
    .save()
    .then((data: any) => {
      res.send(data);
    })
    .catch((err: any) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Post.",
      });
    });
};

// Retrieve all Posts from the database.
export const findAll = (req: Request, res: Response) => {
  db.post
    .find({ published: true })
    .then((data: any) => {
      res.send(data);
    })
    .catch((err: any) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Posts.",
      });
    });
};

// Find a single Post with an id
export const findOne = (req: Request, res: Response) => {
  const id = req.params.id;

  db.post
    .findById(id)
    .then((data: any) => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch((err: any) => {
      res.status(500).send({
        message: "Error retrieving Post with id=" + id + " err=" + err,
      });
    });
};

// Update a Post by the id in the req: Requestuest
export const update = (req: Request, res: Response) => {};

// Delete a Post with the specified id in the req: Requestuest
export const deleteOne = (req: Request, res: Response) => {};

// Delete all Posts from the database.
export const deleteAll = (req: Request, res: Response) => {};

// Find all published Posts
export const findAllPublished = (req: Request, res: Response) => {};
