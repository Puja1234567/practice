import PostModel from "./post.model.js";

export default class PostController{

    createPost(req,res){
        const {userID,caption}=req.body;
        const newPost={userID,caption,imageURL:req.file.filename};
        const createdPost=PostModel.createPost(newPost);
        console.log(createdPost);
        res.status(201).send(createdPost)

    }
    viewDetailsOfPost(req,res){
        const postID=req.params.postID;
        const post=PostModel.viewDetailsPost(postID);
        if(!post){
            return res.status(404).send("Post not found");
        }
        else{
            return res.status(200).send(post);
        }

    }
    viewAllPosts(req,res){
        const post=PostModel.viewAllPost();
        return res.status(200).send(post);

    }
    updatePost(req,res){
        const {userID,caption}=req.body;
        const updatePost={userID,caption,imageURL:req.file.filename};
        const updatedPost=PostModel.updatePost(updatePost);
        res.status(200).send(updatedPost);
        
    }
    deletePost(req,res){
        const postID=req.params.postID;
        const postFound=PostModel.viewDetailsPost(postID);
        if(!postFound){
          return res.status(401).send('Post not found');
        }
        else{
       const deletedPost=PostModel.deletePost(postID);
       res.status(200).send(deletedPost);
        }
    }

    

}