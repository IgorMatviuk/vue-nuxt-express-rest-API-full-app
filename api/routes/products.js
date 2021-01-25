const { Router } = require('express')
let products = require('../db/products.db.js')
import { get, getID, create, remove } from '../controllers/products.controller.js'
const router = Router()

//get
router.get('/products', get)

//get id
router.get('/products/:id', getID)

//post
router.post('/products', create)

//delete
router.delete('/products/:id', remove)


module.exports = router