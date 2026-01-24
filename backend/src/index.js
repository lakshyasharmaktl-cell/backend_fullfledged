import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import nodemon from "nodemon"
import routes from './routes/routes.js'



dotenv.config() 

const app = express()
const PORT = 1234

 
app.use(cors())
app.use(express.json())
const MONGODB_URI = "mongodb+srv://bansalkunal2510_db_user:tj4juCPE9q32HO1z@cluster0.vfwkj91.mongodb.net/"

mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected ...'))
    .catch((err) => console.log('MongoDB error =>', err.message))

app.use('/', routes)

app.listen(PORT, () => console.log('server is running', PORT))