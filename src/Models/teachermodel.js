
const mongoose=require("mongoose")





const teacherSchecma=new mongoose.Schema({

name:{type:String,required:true},
img:{type:String,required:true},
gender:{type:String,required:true},
age:{type:String,required:true},
classes:[{grade:{type:String,required:true},section:{type:String,required:true},subject:{type:String,required:true}}]


})



module.exports=mongoose.model('teacher',teacherSchecma)