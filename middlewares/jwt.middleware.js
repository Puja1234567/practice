import jwt from "jsonwebtoken";

const jwtAuth=(req,res,next)=>{
    //read token
    const token =req.headers["authorization"];

    //if no token return error
    if(!token){
        return res.status(401).send("Unauthorized");
    }

    //check if token is valid
    try{
        const payload=jwt.verify(token,"tuygnoahydhoa");
        req.userID=payload.userID;
    }catch(err){
        console.log(err)
        return res.status(401).send('Unauthorized');

    }
    next();

}

export default jwtAuth;