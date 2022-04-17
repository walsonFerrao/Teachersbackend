const Teacher=require("../Models/teachermodel")

const { Router } = require('express')
const router = Router()





router.post("",async(req,res)=>{
    try{





    console.log(req.body,"req")
    const  teacher=await Teacher.create(req.body)
    res.status(201).send(teacher)
    
    }
    catch(err){
    
    
    res.status(500).send(err)
    console.log(err)
    }
    
    
    
    
    })
    

    router.get("",async(req,res)=>{
        try{
        var teacher=await Teacher.find()


        if(req.query.filterby=="all")
        {

            teacher=teacher
        }

           else if(req.query.filterby=="male")
            {

                teacher=teacher.filter((ele)=>{return ele.gender=="male"})
            }
            else if(req.query.filterby=="female")
            {
                teacher=teacher.filter((ele)=>{return ele.gender=="female"})

            }
            else{
                teacher=teacher.filter((ele)=>{return ele.gender=="transgender"||ele.gender=="other"})

            }
            if(req.query.sortby=="asc")
            {
                teacher.sort((a,b)=>(a.age-b.age))
            }
           
                if(req.query.sortby=="dsc")
            {
                teacher.sort((a,b)=>(b.age-a.age))
            }
            


        console.log(teacher,"req")
        //   teacher=await Teacher.find()
        res.status(201).send(teacher)
        
        }
        catch(err){
        
        
        res.status(500).send(err)
        console.log(err)
        }
        
        
        
        
        })



        router.get("/:id",async(req,res)=>{
            try{
            var teacher=await Teacher.findById(req.params.id)
    
    
           
                
    
    
            console.log(teacher,"req")
            //   teacher=await Teacher.find()
            res.status(201).send(teacher)
            
            }
            catch(err){
            
            
            res.status(500).send(err)
            console.log(err)
            }
            
            
            
            
            })
    
    







        module.exports=router