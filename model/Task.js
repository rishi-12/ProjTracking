const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({

    name: {
        type: String,
        required: true,
        min:6,
        max:255
    },
    description:{
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    status:{
        type: String,
        required: true,
        max: 25,
        min: 6
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports= mongoose.model('Task',taskSchema );
