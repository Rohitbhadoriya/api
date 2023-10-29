const express = require ('express')
const app = express()
const dotenv = require ('dotenv')
const web = require ('./routes/web')
dotenv.config({path:'./.env'})
const connectdb = require('./db/connectdb')
const cors = require('cors')
app.use(cors()) // for api communication in react


const fileUpload = require("express-fileupload");//for file upload
// for file upload
app.use(fileUpload({useTempFiles: true}));
const cookieParser = require('cookie-parser')


app.use(cookieParser())//for getting token in auth

connectdb()



// loadroute
app.use('/api',web)






//server create
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on localhost: ${process.env.PORT}`)
})
