import express from 'express'

import productRoutes from './router/product.route'

const app = express()

app.use('/api/product', productRoutes)

app.listen(5000, ()=> {
    console.log(`Server is Running on PORT: 5000`)
})