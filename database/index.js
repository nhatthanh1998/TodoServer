const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGOURL,{ useNewUrlParser: true })

module.exports = {
    mongoose
}