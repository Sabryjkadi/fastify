
const { Schema, model } = require('mongoose')

const todoSchema = new Schema({

    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const todo = model('todo', todoSchema)

module.exports = todo