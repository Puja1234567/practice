import express from "express";
import swagger from "swagger-ui-express";
import jwtAuth from "./middlewares/jwt.middleware.js";
import bodyParser from "body-parser";
import userRouter from "./feature/user/user.routes.js";
import postRouter from "./feature/posts/post.routes.js";
import likesRouter from "./feature/likes/likes.routes.js";
import commentRouter from "./feature/comments/comments.routes.js";
import apiDocs from './swagger.json' assert {type: 'json'};
import loggerMiddleware from "./middlewares/loggerMiddleware.js";
import { CustomError } from "./middlewares/errorHandler.middleware.js"

const server=express();

server.use("/api-docs", 
swagger.serve, 
swagger.setup(apiDocs))

server.use(bodyParser.json()); 
server.use(express.json());

server.use(loggerMiddleware);
server.use("/api/users",userRouter);
server.use("/api/likes",jwtAuth,likesRouter);
server.use("/api/posts",jwtAuth,postRouter);
server.use("/api/comments",jwtAuth,commentRouter);

server.get("/",(req,res)=>{
    res.send("Welcome to Postaway-1 \n A Social Media Backend API")
})


// Error handler middleware
server.use((err, req, res, next) => {
    console.log(err);
    if (err instanceof CustomError) {
      return res.status(err.code).send(err.message);
    }else{// server errors.
    res.status(500).send('Something went wrong, please try later');
    }
  });

//middleware for handelling 404 requests
server.use((req,res)=>{
    res.status(404).send("API not found");
})

server.listen(3000,()=>{
    console.log("Server is listening at port no. 3000");

})