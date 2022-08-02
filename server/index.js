const express=require('express')
const cors=require('cors')
const app=express()
const mongoose=require('mongoose')
const User=require('./models/usermodel')

const jwt=require('jsonwebtoken')
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://localhost:27017/Syoft_Assign')
app.post("/api/register", async(req,res)=>{

    console.log(req.body)
    
        try {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                pass:req.body.pass,
            })
           res.json({status:'ok'})
        } catch (error) {
            res.json({status: 'error', error:'wrong email or email already exist'})
        }
    

})

app.post("/api/login", async(req,res)=>{


    
      
          const user= await User.findOne({
               email: req.body.email,
               pass:req.body.pass, 
            })
        if(user)
        {
            const token =jwt.sign({
             pass:user.pass,
              email: user.email,
            },"tokensecr")
            return res.json({status:'ok', user: token})
        }
        else{
           return  res.json({status:'error', user:false})
        }
   
        } 
    

)

app.listen(8080,()=>{
    console.log("server started on 8080")
})