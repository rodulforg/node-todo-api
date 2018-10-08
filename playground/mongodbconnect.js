// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        console.log('Unable to connect to MongoDB Server');
        return;
    }
    console.log('Connected to Mongo Server');
    const db = client.db('TodoApp');

    // db.collection('Users').insertOne({
    //     name: 'Andrew',
    //     age: 23,
    //     location: 'Barcelona'
    // }, (err, result) => {
    //     if(err)
    //     {
    //         return console.log('Unable to insert:', err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err)
    //     {
    //         return console.log('Unable to insert:', err);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });
    client .close();
});
