import { CustomError } from "../../middlewares/errorHandler.middleware.js";
export default class LikesModel{
    constructor(id,userID,postID){
        this.id=id;
        this.userID=userID;
        this.postID=postID;
    }
    static likePost(userID,postID){
        const newLike=new LikesModel(likes.length+1,userID,postID);
        //newLike.id=likes.length+1;
        likes.push(newLike);
        return newLike;

    }
    static removeLike(userID,postID){
        const index=likes.findIndex((p)=>p.userID==userID && p.postID==postID);
        if(index !== -1){
            const removedLike = likes.splice(index, 1);
            return removedLike[0];
        }
        else{
            console.log("like not found");
        }
       

    }
    static getAllLikes(postID){
        const like=likes.find((p)=>p.postID==postID);
         if(!like){
            throw new CustomError("like not found",404); 
        }else{
            return like;
        }
    }
}

 var likes=[];
  
   

  