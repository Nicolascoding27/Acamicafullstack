const mongoose= require('mongoose')
mongoose.connect('mongodb://localhost:27017/acamicatale3')
const Schema= mongoose.Schema;
const Model=mongoose.model;

const userSchema= new Schema({
    name:{type:String, required:true},
    lastName:{type:String, required:true},
    emai:{type:String, required:true}
})
const userModel= Model('Users',userSchema);
const user1= new userModel({
    name:'Nicolas',
    lastName:'Diaz',
    email:'nicoding27@gmail.com'
})
user1.save();
userModel.find({},(err,users)=>{
    console.log(users);
})
//Debemos tener datos persistentes
userModel.find({name:'Nicolas'},(err,users)=>{
    console.log(users);
})