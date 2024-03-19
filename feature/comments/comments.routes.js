import express from "express";
import CommentController from "./comments.controller.js";

const commentRouter= express.Router();
const commentController=new CommentController();

commentRouter.get("/:postID",commentController.getAllComments);
commentRouter.post("/",commentController.createComment);
commentRouter.patch("/update",commentController.updateComment);
commentRouter.delete("/:id",commentController.deleteComment);


export default commentRouter;
