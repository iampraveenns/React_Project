import express from 'express'

import { getAllProducts, createProduct, deleteProduct, updateProduct } from '../controller/product.controller.js'

const router = express.Router()

router.post('/create', createProduct)
router.patch('/update/:productId', updateProduct)
router.get('/', getAllProducts)
router.delete('/:id', deleteProduct)

export default router