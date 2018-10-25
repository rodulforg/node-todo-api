var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
const ObjectID = require('mongodb').ObjectID;
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();
const port = process.env.PORT || 80;

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then( (doc) => {
        res.send(doc);
    }, (e) => {
        //console.log(e); 
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then( (todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(e); 
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id

    if( !ObjectID.isValid(id)){
        return res.status(400).send();
    }

    Todo.findById(id).then( (todo) => {
        if(todo){
            res.send({todo});
        }else{
            res.status(404).send({});
        }
        
    }, (err) => {
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id

    if( !ObjectID.isValid(id)){
        return res.status(400).send();
    }

    Todo.findByIdAndDelete(id).then( (todo) => {
        if(todo){
            res.send({todo});
        }else{
            res.status(404).send({});
        }
    }, (err) => {
        res.status(400).send(); 
    });
}); 

app.listen(port, () => {
    console.log(`Server is up and running at port ${port}`);
});

module.exports = {app};