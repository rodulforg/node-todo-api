const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp'); mongodb://<dbuser>:<dbpassword>@ds241723.mlab.com:41723/todo-api-db
mongoose.connect('mongodb://dudemonkey:giqwak-riwtym-seWsa6@ds241723.mlab.com:41723/todo-api-db'); 



// var newTodo = new Todo({
//     text: true
// })

// var newTodo = new Todo({
//     text: 'Buy groceries',
//     completed: true,
//     completedAt: 123   
// });

// newTodo.save().then( (doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('unable to save todo');
// });



// var newUser = new User({
//     email: 'myemail@mail.com   '
// });

// newUser.save().then( (doc) => {
//     console.log('Saved user:', doc);
// }, (e) => {
//     console.log('Unable to save user:', e);
// });

module.exports = {
    mongoose: mongoose
};