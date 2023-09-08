import express from 'express';
import cors from "cors"
import dotenv from "dotenv"
import router from './routes/result.js';
dotenv.config()

const Port = process.env.PORT ||2001
const app = express()
app.use(express.json())
app.use(cors())

//get request
app.use(`/api`, router)

app.listen(Port, () => {
    console.log(`server is live on port ${Port}`)
})