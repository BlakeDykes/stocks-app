const express = require('express')
const StockCtrl = require('../controllers/stock-controller')
const router = express.Router()

router.post('/stock', StockCtrl.createStock)
router.put('/stock/:id', StockCtrl.updateStock)
router.delete('/stock/:id', StockCtrl.deleteStock)
router.get('/stock/:id', StockCtrl.getStockById)
router.get('/stocks', StockCtrl.getStocks)

module.exports = router