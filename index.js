const express = require('express')
const {mongoose} = require("./database")
const { Todo } = require("./models/Todo")
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get("/", async (req, res) => {
    res.status(200).send(await Todo.find())
})

app.post("/", async (req, res) => {
    const {name} = req.body
    const todo = await Todo.create({
        name,
        status:"not yet"
    })
    res.status(200).send(todo)
})

app.get("/update/:id", async (req, res) => {
    const {id} = req.params
    let todo = await Todo.findById(id)
    todo.status = "done"
    await todo.save()
    console.log(todo)
    res.status(200).send(todo)
})

app.get("/delete/:id" ,async (req,res) => {
    const {id} = req.params
    let todo = await Todo.findByIdAndDelete(id)
    res.status(200).send(todo)
})

app.listen(process.env.PORT || 3001, () => {
    console.log("Start on port 3001")
})