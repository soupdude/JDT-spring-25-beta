import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { MongoClient } from 'mongodb'

dotenv.config()


const app = express()
app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || 4000

const mongourl = process.env.MONGO_URL
const mongoclient = new MongoClient(mongourl, {})

mongoclient.connect().then(() =>  {
    console.log("Connected to MongoDB")
})

const genAI = new GoogleGenerativeAI(process.env.API_KEY)
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `TBD`, 
})

app.post('/chat',async(req, res) => {
    const userInput = req.body.userInput
    let responseMessage
    try {
        const result = await model.generateContent(userInput)
        responseMessage = result.response.text()
    } catch(e) {
        responseMessage = 'Oops, something went wrong!'
    }
    res.json({
        message: responseMessage,
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.get('/logs', async (req,res) => {
    try{
        const logs = await mongoclient.db('jdt-websites').collection('logs').find({}).toArray()
        res.status(200).json(logs)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Error'})
    }
}) 

app.post('/add', async (req, res) => {
    try {
        const log = req.body
        if (!log.input|| !log.response || Object.keys(log).length !== 2) {
            res.status(400).json({ message: 'Bad Request'})
            return
        }
        await mongoclient.db('jdt-websites').collection('logs').insertOne(log)
        res.status(201).json({ message: 'Success'})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Error'})
    }
})

app.post('/delete', async (req, res) => {
    try {
        const log = req.body
        if (!log.input || !log.response || Object.keys(log).length !== 2) {
            res.status(400).json({ message: 'Bad Request' })
            return
        }
        await mongoclient.db('personal-website').collection('logs').deleteOne(log)
        res.status(201).json({ message: 'Success' })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error' })
    }
})