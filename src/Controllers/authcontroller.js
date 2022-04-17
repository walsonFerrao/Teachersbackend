const bcryptjs=require("bcryptjs")
const  Admin =require("../Models/adminmodel")
const jwt=require("jsonwebtoken")
require('dotenv').config()


var hash = bcryptjs.hashSync("Admin@123");

console.log(hash)

var hash = bcryptjs.hashSync("Admin@123");

console.log(hash)

// var compare=bcryptjs.compareSync("dmin@123","$2a$10$amx98boqEOL0FNuGLN1ge.GH0rtoHE54Ujgb63eo4ZPa0.PlUUDUu")
// console.log(compare,"comapre")
const newToken = (user) => {
    return jwt.sign({ user }, "walson@123")
}

const Register=async(req,res)=>{

try{

    let user=await Admin.findOne({email:req.body.email}).lean().exec()

   

    if(user)
    return res.status(400).send({messege:"there isalready a user with this email "})
   
    
    
    
    user = await Admin.create(req.body)
       console.log(user,"")
    // console.log(req.body)
          

            const token=newToken(user)

          return res
        .status(201)
        .send({ token, status : 1 })


}

catch(err)
{

res.status(500).send(err)
console.log(err)

}

}




const Login=async(req,res)=>{

try{


    const user=await Admin.findOne({email:req.body.email}).lean().exec()

     if(!user)
     {
        return res.status(404).send({message:"user or password is not right"})
     }

  const checkPassword=async function (password) {
        return  await bcryptjs.compareSync(password, user.password)
    }
const ispasswordcorect=await checkPassword(req.body.password)

console.log(ispasswordcorect)
if(!ispasswordcorect)
{
    return res
            .status(404)
            .send({ status : 0 })

}

const token = newToken(user)

const updated_user = { 
    id : user._id ,
    email : user.email, 
    token ,
    status : 1
}

res.status(201).send(updated_user)

}


catch(err)
{
console.log(err)

return res.status(500).send(err)



}





}



module.exports={Register,Login}
