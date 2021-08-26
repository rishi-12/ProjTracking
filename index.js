const express = require('express');
const app= express();
const mongoose =require('mongoose');
const cors =require('cors');

const dotenv=require('dotenv');

//IMPORT ROUTES
const authRoute=require('./routes/auth');
const postRoute=require('./routes/posts');
dotenv.config();
//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECT,
()=>console.log('connected to DB'));

//MIDDLEWARES
app.use(express.json());
app.use(cors());
//ROUTE MIDDLEWARES
app.use('/api/user',authRoute);
app.use('/api/posts',postRoute);

app.listen(3000,()=> console.log('server is running'));
