const router = require('express').Router();
const User =require('..//model/User');
const jwt =require('jsonwebtoken');
const bcrypt =require('bcryptjs');
const {registerValidation,loginValidation} =require('../validation');





router.post('/register', async (req,res)=>{
    // res.send('Register');
    
    //lets validate before we create a user
    const {error} =registerValidation(req.body);
    console.log(error);
    // res.send(error.details[0].message);
    if(error!=undefined) return res.send(error.details[0].message);

    console.log(11111111);
    //Checking if the user is already in the database
    const emailExist= await User.findOne({email: req.body.email});
    // console.log(emailExist);
    if(emailExist) return res.send('Email already exists');


    //Hash passwords
    const salt =await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(req.body.password,salt);
    


    //Create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try{
        const savedUser= await user.save();
        res.send({user:user._id});
    }
    catch(err){
        res.send(err);
    }
});

//LOGIN
router.post('/login',async (req,res)=>{
    const {error} =loginValidation(req.body);
    console.log(error);
    // res.send(error.details[0].message);
    if(error!=undefined) return res.status(400).send(error.details[0].message);

    //Checking if email exist or not
    const user= await User.findOne({email: req.body.email});
    // console.log(emailExist);
    if(!user) return res.status(400).send('Email doesnt exists');

    //Password is correct
    const validPass=await bcrypt.compare(req.body.password,user.password);
    if(!validPass) return res.status(400).send('Invalid Password');

    //Create and Assign a token
    const token= jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
    console.log(token);
    res.header('auth-token',token).send(token);



    // res.send("Logged in");



});


module.exports=router;