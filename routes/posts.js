const router = require('express').Router();
const User = require('../model/User');
const verify=require('./verifyToken');

router.get('/',verify,async (req,res)=>{
    // res.json({posts:{title:'my first post', description:'random data you shouldnt access'}});
    console.log(123);
    res.send(req.user);
    const usr=await User.findOne({_id: req.user});
    console.log(usr);
    // res.send(usr);
});

module.exports=router;