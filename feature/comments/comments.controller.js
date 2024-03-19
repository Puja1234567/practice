import CommentModel from "./comments.model.js";

export default class CommentController{

    createComment(req,res){
        const {userID,postID,content}=req.body;
        const newComment=CommentModel.commentPost(userID,postID,content);
        res.status(201).send(newComment);
    }
    updateComment(req,res){
         const { id, newContent } = req.body;
         const updatedComment = CommentModel.updateComment(id, newContent);
         if(updatedComment){
            res.status(200).send(updatedComment);
        }else{
            res.status(404).send('Comment not found');
        }
    }
    deleteComment(req,res){
         const commentId = req.params.id;
         const removedComment = CommentModel.removeComment(commentId);
         if(removedComment){
            res.status(200).send(removedComment);
        }else{
            res.status(404).send('Comment not found');
        }
    }
    getAllComments(req,res){
         const postID = req.params.postID;
         const comments = CommentModel.getAllCommentsOnPost(postID);
         res.status(200).send(comments);
        }
}


 
  
 