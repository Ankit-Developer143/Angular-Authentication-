const express = require('express');
const router = express.Router();
const multer  = require('multer')
const cors = require('cors')
const app = express();
const tutionModel = require('../Model/userModel')
const uploadModel = require('../Model/upload')
var data;
app.use(cors());
// const storage = multer.diskStorage({
//     destination:'./',
//     filename:function(req,file,cb){
//       cb(null,Date.now() + '.' + file.mimetype.split('/')[1])
//     }
//   })
//   const upload = multer({storage:storage})
router.post('/', async (req,res) =>{
    console.log("call2",req.body);

    const tution = new tutionModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        birthday:req.body.birthday,
        paid:req.body.paid,
        total:req.body.total,
        class:req.body.class,
    })
    try{

       const val = await tution.save()
       res.json(val)
    }catch(err){
        console.log(err);
    }
})

module.exports = router;