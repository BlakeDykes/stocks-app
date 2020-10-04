const Stock = require('../models/stock-model')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

createStock = (req, res) => {
    const body = req.body
    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a stock'
        })
    }

const stock = new Stock(body)
stock._id = new ObjectId

if(!stock) {
    return res.status(400).json({ success: false, error: err})
}

stock
    .save()
    .then(() => {
        return res.status(201).json({
            success: true,
            id: stock._id,
            message: 'Stock created'
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message: 'Stock not created'
        })
    })
}

updateStock = async(req, res) => {
        const body = req.body

        if(!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a body to update',
            })
        }

    Stock.findOne({_id: req.params.id }, (err, stock) => {
        if(err) {
            return res.status(404).json({
                err,
                message: 'Stock not found'
            })
        }
        stock.ticker = body.ticker
        stock.industry = body.industry
        stock.company = body.company
        stock
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: stock._id,
                    message: 'Stock updated',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Stock not updated'
                })
            })
    })
}

deleteStock = async (req, res) => {
    await Stock.findOneAndDelete({ _id: req.params.id }, (err, stock) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!stock) {
            return res
                .status(404)
                .json({ success: false, error: `Stock not found` })
        }

        return res.status(200).json({ success: true, data: stock })
    }).catch(err => console.log(err))
}


getStockById = async(req, res) => {
    await Stock.findOne({_id: req.params.id}, (err, stock) => {
        if(err) {
            return res.status(400).json({success:false, error: err})
        }

        if(!stock){
            return res
                .status(404)
                .json({success: false, error: 'Stock not found'})
        }
        
        return res.status(200).json({success: true, data: stock })
    }).catch(err => console.log(err))
}

getStocks = async(req, res) => {
    await Stock.find({}).exec(function(err, stocks) {
        if(err) {
            return res.status(400).json({success: false, error: err})
        }
        if(!stocks.length) {
            return res
                .status(404)
                .json({success: false, error: "Stock not found"})
        }
        return res.status(200).json({success: true, data: stocks})
    })
}

module.exports = {
    createStock,
    updateStock,
    deleteStock,
    getStocks,
    getStockById
}