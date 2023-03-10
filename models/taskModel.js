const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const taskSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true  
    },
    task: {
        type: String,
        required:true
    },
    status:{
        type:String,
        required: true,
        enum: {
            values: ['Completed','Incomplete'],
            message: 'status can be either Completed or Incomplete'
        }
    },
    sequence:{
        type:Number
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

taskSchema.plugin(uniqueValidator);

const Task = mongoose.model('Task',taskSchema);

module.exports = Task;

