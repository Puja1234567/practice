import express from "express";
import PostController from "./post.controller.js";
import { upload } from "../../middlewares/fileUpload.middleware.js";

const postRouter=express.Router();
const postController=new PostController();

postRouter.post("/",upload.single("imageURL"),postController.createPost);
postRouter.get("/:postID",postController.viewDetailsOfPost);
postRouter.get("/",postController.viewAllPosts);
postRouter.patch('/:id',upload.single("imageURL"), postController.updatePost);
postRouter.delete('/:id', postController.deletePost);


export default postRouter;