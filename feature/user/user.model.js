
export default class UserModel{
    constructor(id,name,email,password){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
    }

    static signUp(name,email,password){
        const newUser=new UserModel(users.length+1,name,email,password);
        users.push(newUser);
        return newUser;
    }
    static login(email,password){
        const user=users.find((u)=>u.email==email && u.password==password);
        return user;
    }

    static getAll(){
        return users;

    }

   

}

var users=[
    new UserModel(
        1,
        "Sai Priya",
        "saipriya123@gmail.com",
        "123456"
        ),


]
    

