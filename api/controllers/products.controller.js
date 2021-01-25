let products = require('../db/products.db.js')

export const get = (req, res) => {
    res.json(products)
}

export const getID = (req, res) => {
    const id = parseInt(req.params.id)
    if (id >= 0 && id < products.length) {
      res.json(products[id])
    } else {
      res.sendStatus(404)
    }
}

export const create = (req, res) => {
    const createProduct = {
       id: req.body.id,
       name: req.body.name,
       fullName: req.body.fullName,
       price: req.body.price,
       titleDescription: req.body.titleDescription,
       currency: req.body.currency
    }
    products.push(createProduct)
    res.status(201).json(createProduct)
}

export const remove = (req, res) => {
    products = products.filter((product) => product.id !== req.params.id);
    res.json({message: 'Server has been removed.'})
}
