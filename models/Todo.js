const mongoose = require('mongoose')
const TodoSchema = new mongoose.Schema({
    name: {
        type: String
    },
    status: {
        type: String
    }
})

const Todo = mongoose.model("Todo", TodoSchema)

module.exports = {
    Todo
}



