require('.././config/config');


const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');


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

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    console.log("Id:",id);
    var body = _.pick(req.body, ['text','completed']);

    if( !ObjectID.isValid(id)){
        console.log(id);
        console.log("ID not valid");
        return res.status(400).send();
    }

    if( _.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }else{
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set:body},{new:true} ).then( (todo) => {
        if(todo){
            res.send({todo});
        }else{
            console.log("Update not working");
            res.status(404).send({});
        }
    }).catch( (e) => {
        res.status(400).send();
    });
});

app.listen(port, () => {
    console.log(`Server is up and running at port ${port}`);
});

// Users

app.post('/users', (req,res) => {
    var new_user = _.pick(req.body, ['email','password']);

    var user = new User(new_user);

    user.save().then( () => {
        return user.generateAuthToken();
        // res.send(doc);
    }).then( (token) => {
        res.header('x-auth',token).send(user);
    }).catch( (e) => {
        res.status(400).send(e);
    });
});



app.get('/users/me', authenticate, (req,res) => {

    res.send(req.user);

});

app.post('/users/login', (req,res) => {
    var body = _.pick(req.body, ['email','password']);

    User.findByCredentials(body.email, body.password).then( (user) => {
        return user.generateAuthToken().then( (token) => {
            res.header('x-auth',token).send(user);
        });
    }).catch( (err) => {
        res.status(400).send();
    });

});

app.delete('/users/me/token', authenticate, (req, res) => {
    req.user.removeToken(req.token).then( () => {
        res.status(200).send();
    }, () => {
        res.status(400).send();
    });
});

module.exports = {app};