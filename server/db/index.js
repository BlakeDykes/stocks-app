const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/market', {useNewUrlParser: true, useUnifiedTopology : true})
    .catch(e => {
        console.error('Connection Error: ', e.message)
    })

    const db = mongoose.connection

    db.on('error', console.error.bind(console, 'Connection Error: '))
    db.once('open', function(){
        console.log("Connected to Database")
    })
    
    module.exports = db