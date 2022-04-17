const express=require("express")
const cors=require("cors")
const app=express()
const mongoose=require("mongoose")

const {Register,Login}=require("./Controllers/authcontroller")
const teacher=require("./Controllers/teachercontroller")
const connect=()=>{

    mongoose.connect("mongodb+srv://walson:123@cluster0.9zmxk.mongodb.net/teachers")
    
    
    }

    const corsOpts = {
        origin: '*',
      
        methods: [
          'GET',
          'POST',
        ],
      
        allowedHeaders: [
          'Content-Type',
        ],
      };
      
      app.use(cors(corsOpts));

    app.use(express.json())





app.post("/signup",Register)
app.post("/signin",Login)
app.use("/teacher",teacher)



    app.listen(process.env.PORT ||8080,async()=>{
        try{
         await connect()
         console.log("listening 8080")
         }
 
         catch(err)
         {
            console.log(err) 
         }
         
         })