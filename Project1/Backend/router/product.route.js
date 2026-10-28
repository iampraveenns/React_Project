import express from 'express'

import { getAllProducts } from '../controller/product.controller.js'

const router = express.Router()

router.get('/', getAllProducts)

export default router