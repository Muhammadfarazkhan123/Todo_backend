const express=require('express')
const route=express.Router();
const mongoose=require('mongoose');
const TodoItem=require('../Models/TodoList')

route.get('/get',(req,res,next)=>{
    TodoItem.find().exec().then(result=>{
        console.log(result)
        res.status(200).json(result)
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})

route.post('/post',(req,res,next)=>{
    const todoItem=new TodoItem({
        _id:new mongoose.Types.ObjectId,
        item:req.body.item
    })
    todoItem.save().then(doc=>{
        console.log(doc)
        res.status(201).json({
            message:"post work",
            Posted:true
        })
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            errror:err
        })
    })
   
})

route.patch('/:ListId',(req,res,next)=>{
    const id=req.params.ListId
    const updatedList={[req.body.ItemParam]:req.body.NewItem}
    TodoItem.update({_id:id},{$set:updatedList}).exec().then(result=>{
        console.log(result)
        res.status(200).json({updated:true})
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
   
})
route.delete('/:ListId',(req,res,next)=>{
    const id=req.params.ListId
    TodoItem.remove({_id:id}).exec().then(result=>{
        console.log(result)
        res.status(200).json({
            deleted:true
        })
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})
module.exports=route