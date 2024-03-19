import { CustomError } from "../../middlewares/errorHandler.middleware.js";

export default class CommentModel{
    constructor(id,userID,postID,content){
        this.id=id;
        this.userID=userID;
        this.postID=postID;
        this.content=content;
    }
    static commentPost(userID,postID,content){
        const newComment=new CommentModel(comments.length+1,userID,postID,content);
        //newComment.id=comments.length+1;
        comments.push(newComment);
        return newComment;
    }
    static removeComment(id){
        const index=comments.findIndex((p)=>p.id==id);
        if (index !== -1) {
            const removedComment = comments.splice(index, 1);
            return removedComment[0];
        }
        else{
            console.log('Comment not found');
        }
    }
    static updateComment(id,newContent){
        const comment=comments.find((p)=>p.id==id);
        if(comment){
            comment.content=newContent;
            return comment;
        }
        else{
            console.log("Comment not found");
        }
    }
    static getAllCommentsOnPost(postID){
        const comment=comments.filter((p)=>p.postID==postID);
         if(!comment){
            throw new CustomError("Comment not found",404);  
        }else{
            return comment;
        }
    }
} 
var comments=[];