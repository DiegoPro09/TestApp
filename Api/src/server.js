import express from 'express'
import { cors } from './middlewares/middlewares.js'

export const app = express()
export const port = 3001
app.use(cors)