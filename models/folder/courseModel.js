const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    duration:{
        type: Number,
        required: true
    },
    fee:{
        type: String,
        required: true
    },
    shortName:{
        type: String,
        required: true
    },

})

const courseModel = mongoose.model('student',CourseSchema)

module.exports = courseModel