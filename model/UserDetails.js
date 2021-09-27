const mongoose=require('mongoose');

const userDetailSchema=new mongoose.Schema({

    id: {
        type: String,
        required: true,
        min:6,
        max:255
    },
    //projs
    //tasks assigned for this user in each proj
    //no of finished in each proj
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports= mongoose.model('UserDetail',userDetailSchema );
