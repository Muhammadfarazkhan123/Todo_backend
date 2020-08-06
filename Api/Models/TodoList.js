const mongoose=require('mongoose');
 const TodoSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    item:{type:String,required:true}
 })

 module.exports=mongoose.model('todoItem',TodoSchema)