import express from 'express'
import "dotenv/config"

import productRoutes from './router/product.route.js'
import connectDB from './db/connectDB.js'

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use('/api/items', productRoutes)

app.listen(PORT, ()=> {
    console.log(`Server is Running on PORT: 5000`)
    connectDB()
})