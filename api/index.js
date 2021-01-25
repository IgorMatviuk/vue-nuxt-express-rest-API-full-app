const express = require('express')

// Create express instance
const app = express()

// Require API routes
let products = require('./routes/products')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import API Routes
app.use(products)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
