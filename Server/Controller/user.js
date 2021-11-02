const express = require('express');
const router = express.Router();
const tutionModel = require('../Model/userModel')

router.get("/",async(req,res)=>{
    try{
        console.log("call");
        const tution = await tutionModel.find();
        res.json(tution);
    }catch(err){
        console.log(err);
    }
})

router.get("/:id",async(req,res)=>{
    
    console.log("byID");
    await console.log(req.params.id);
    const isId = req.params.id
    try{
        if(isId){
            const tution = await tutionModel.find({
                _id:req.params.id
            });
            res.json(tution);
        }
    }catch(err){
        console.log(err);
        res.json("Invalid Id")
    }
})
module.exports = router;