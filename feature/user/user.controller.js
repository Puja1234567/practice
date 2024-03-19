//getting all user
import jwt from "jsonwebtoken";
import UserModel from "./user.model.js";

export default class UserController{
     signUp(req,res,next){
        const {name,email,password}=req.body;
         try{
            const user=UserModel.signUp(name,email,password);
            res.status(201).send(user);
        }catch(err){
            next(err);
        }
    }
   login(req,res,next){
         const {email,password}=req.body;
         try{
            const result=UserModel.login(email,password);
            if(!result){
                return res.status(400).send("Incorrect Credentials");
            }
            else{
                const token=jwt.sign({   //creating a token
                userID:result.id,
                email:result.email
            },
            "tuygnoahydhoa",
            {
                expiresIn:'1h'
            }
            );
            //send token
            return res.status(200).send(token);
        }
    }catch(err){
        next(err);
    }
}
    getAllUsers(req,res){
        const allUsers= UserModel.getAll();
        return res.status(200).send(allUsers);

    }

}