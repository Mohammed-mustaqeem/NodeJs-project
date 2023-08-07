import express, { Router } from 'express'
import connectDB from './db/connectdb.js';
import {join} from 'path'
import web from './routes/web.js'
const app=express();
const port = process.env.PORT || '4000';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/";

// database connection
connectDB(DATABASE_URL);

app.use(express.urlencoded({extended:false}))

//static file
app.use('/student',express.static(join(process.cwd(),"public")))
app.use('/student/edit',express.static(join(process.cwd(),"public")))


//set template engine
app.set("view engine","ejs")

// load file
app.use('/student',web)
app.listen(port,()=>{
    console.log(`server listening at ${port}`);
})