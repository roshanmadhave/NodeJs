const jwt = require("jsonwebtoken");

const {MY_SECRET} = process.env;

console.log("Secret Key -> ", MY_SECRET)

const protectedRoute = (req, res) => {
    jwt.verify(req.token, MY_SECRET, (err, data)=>{
        if(err) {
            console.log(err);
            return res.send(err);
        }
        console.log("DATA -> ", data);const jwt = require("jsonwebtoken");
        const UserModel = require("../model/user.model");
        
        const {MY_SECRET} = process.env;
        
        const protectedRoute = (req, res) => {
            jwt.verify(req.token, MY_SECRET, async (err, data)=>{
                if(err) {
                    console.log(err);
                    return res.send(err);
                }
                const { iat, email, password, id} = data;
                const foundUser = await UserModel.findById(id)
                const { username } = foundUser;
                return res.send({message : `Hello ${username.toUpperCase()}, you are authenticated / authorized User`})
            })
        }
        
        module.exports={
            protectedRoute
        }
        return res.send({message : "Protected API"})
    })
}

module.exports={
    protectedRoute
}