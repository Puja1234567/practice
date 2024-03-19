import { CustomError } from "../../middlewares/errorHandler.middleware.js";
export default class PostModel{
    constructor(postID,userID,caption,imageURL){
        this.postID=postID;
        this.userID=userID;
        this.caption=caption;
        this.imageURL=imageURL;
    }
    static createPost(newPost){
         //newPost=new PostModel(posts.length+1,userID,caption,imageURL);
        newPost.postID=posts.length+1
        console.log(newPost);
        posts.push(newPost);
        return newPost;

    }
    static viewDetailsPost(postID){
        const postDetails = posts.find((p) => p.postID == postID);
        if(!postDetails) {
            throw new CustomError("Post not found",404);   //user defined errors
        }else{
            return postDetails;
        }
    }
    static viewAllPost(userID){
        
        return posts;
    }
    static updatePost(updatedPost){
        const index=posts.findIndex((p)=>p.id==updatedPost.id );
        posts[index]=updatedPost;
        return posts[index];
    }
    static async deletePost(id){
        const index=posts.findIndex((p)=>p.id==id);
        //posts.splice[index,1];
        if (index !== -1) {
            const deletedPost = posts.splice(index, 1);
            return deletedPost[0];
        }
        else{
            console.log("Post not found");
        }
        
    }
    
}
var posts=[
    // new PostModel
    //     (1, 
    //      1,
    //      'With Friends',
    //      'https://cdn.vox-cdn.com/thumbor/sK3gMTENF_LR1DhAUl9e3V_5jC4=/0x0:2592x2017/1200x800/filters:focal(1089x801:1503x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/65282724/friendscast.0.0.1429818191.0.jpg'
    //      ),
    
]