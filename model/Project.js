const mongoose=require('mongoose');
const taskSchema = require('./Task');
const projSchema=new mongoose.Schema({

    name: {
        type: String,
        required: true,
        min:6,
        max:255
    },
    facultyName:{
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    description:{
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    studIds:{
        any: Array
    },
    tasks:{
        type: [taskSchema],
        default: undefined
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports= mongoose.model('Project',projSchema );
