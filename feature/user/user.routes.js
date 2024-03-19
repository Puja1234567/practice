import express from "express";
import UserController from "./user.controller.js";

//intialize express router
const userRouter=express.Router();
const userController=new UserController();

userRouter.post("/signup",userController.signUp);
userRouter.post("/login",userController.login);
userRouter.get('/',userController.getAllUsers);

export default userRouter;