import LikesModel from "./likes.model.js"

export default class LikesController{

    createLike(req,res){
        const{userID,postID}=req.body;
        const newLike = LikesModel.likePost(userID, postID);
        res.status(201).send(newLike);
    }
    removeLike(req,res){
        const { userID, postID } = req.body;
        const removedLike = LikesModel.removeLike(userID,postID);
        if (removedLike) {
            res.status(200).send(removedLike);
        }else{
            res.status(404).send('Like not found');
        }
    }

    getAll(req,res){
        const postID = req.params.postID;
        const likes = LikesModel.getAllLikes(postID);
        res.status(200).send(likes);
    }
    
}