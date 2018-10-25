const ObjectID = require('mongodb');

var {Mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

var id = '5bbe1bad713c430766a04c7a';

// Todo.remove({}).then( (result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('5bd09a9d7d721a3841eadadf').then( (doc) => {
    console.log(doc);
});