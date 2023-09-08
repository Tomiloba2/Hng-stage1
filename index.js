import express from 'express';
import cors from "cors"
import dotenv from "dotenv"
import result from './utils/result.js';
dotenv.config()

const Port = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())

//get request
app.get(`/api`, async (req, res) => {
    const {
        track,
        slack_name
    } = req.query
    try {
        const data = result.filter((item) => {
            return item.slack_name === slack_name && item.track === track
        })
        res.status(200).json(data[0])

    } catch (err) {
        console.log(err);
        res.json({
            error: `error`,
            message: err.message
        })
    }
})

app.listen(Port, () => {
    console.log(`server is live on port ${Port}`)
})