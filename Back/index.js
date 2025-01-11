const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const cors =require("cors")
const dotenv=require("dotenv")
let mongoose=require("mongoose")

dotenv.config()
app.use(cors());
app.use(bodyParser.json())  ;

mongoose.connect(process.env.MONGO_URL)
.then(()=> { console.log("Connected");})
.catch((err) => console.error("Failed to connect to MongoDB", err));

app.listen(3001,()=>{
    console.log("app listened 3001 port");
    
})

app.get ("/",(req,res)=>{
    res.send("Welcome to Db")
})

let MemberSchema=new mongoose.Schema({
    image:String,
    name:String,
    job:String,
})


let MemberModel=mongoose.model("member",MemberSchema)

app.post("/member",async(req,res)=>{
    let newMember=MemberModel(req.body)
    await newMember.save()
    res.send({
        data:req.body
    })
})


app.get("/member", async(req,res)=>{
    let members= await MemberModel.find()
    res.send(members)
})

app.get("/member/:id",async (req,res)=>{
    let id =req.params.id
    let selectedMember=await MemberModel.findById(id)
    res.send({
        message:"This is selected members",
        data:selectedMember,
    })
})



app.delete("/member/:id",async (req,res)=>{
    let {id}=req.params
    await  MemberModel.findByIdAndDelete(id)
    res.send({
        message:"Deleted member"
    })
})