const express = require('express');
const app = express();
const studentsRouter = require('./Routes/StudentRouter');
const mongoose = require('mongoose');
require('dotenv').config();
app.use(express.json())

app.use('/api/student',studentsRouter)

// app.get('/',(req, res)=>{
//     res.send("Server Chal raha hai")
// })


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
    console.log('server listening on 4000 and database is connnected');
    })

}).catch((err)=>{
    console.log("Database not connection established", err);
})
