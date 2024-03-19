import express from "express";
import LikesController from "./likes.controller.js";

const likesRouter =express.Router();
const likesController=new LikesController();

likesRouter.get("/:postID",likesController.getAll);
likesRouter.post("/",likesController.createLike);
likesRouter.delete("/:postID",likesController.removeLike);

export default likesRouter;