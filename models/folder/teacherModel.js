const mongoose = require('mongoose');
const TeacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    course:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },

})

const teacherModel = mongoose.model('student',TeacherSchema)

module.exports = teacherModel