const ObjectID = require('mongodb');

var {Mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

var id = '5bbe1bad713c430766a04c7a';

// if( !ObjectID.isValid(id)){
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then( (todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then( (todo) => {
//     console.log('Todos', todo);
// });

// Todo.findById(id).then( (todo) =>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch( (e) => {
//     console.log(e);
// });

User.findById(id).then( (user) => {
    console.log(JSON.stringify(user, undefined, 2));
}, (err) => {
    console.log(err)
});