

const mongoose=require("mongoose")
const bcryptjs=require("bcryptjs")




const adminschema=new mongoose.Schema({
email:{type:String,required:true},
password:{type:String,required:true},



})
adminschema.pre('save',async function(next){


    if(!this.isModified("password"))
    {
        next()
    }
    
    this.password =await bcryptjs.hashSync(this.password)
    })
    


module.exports=mongoose.model('admin',adminschema)