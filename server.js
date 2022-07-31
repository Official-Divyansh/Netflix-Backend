import bodyParser from "body-parser";
import cors from  'cors'
import dotenv from 'dotenv'
import express from "express";
import connection from "./db/connection.js";
import DefaultData from "./default.js";
import Routes from './routes/routes.js'
dotenv.config()
const app = express()

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use('/', Routes)
const URL = `mongodb+srv://Divyansh-singh:bNzDk9ssSD4jfROr@cluster0.fcck7.mongodb.net/?retryWrites=true&w=majority`
connection(URL)

app.listen(8000, ()=> console.log('port is running'))

// DefaultData()