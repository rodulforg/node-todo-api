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
    // const db = client.db('TodoApp');
    // db.collection('Todos').find({_id:ObjectID('5bbb713e19a4a50acb2b2271')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to find docs');
    // }); 

    const db = client.db('TodoApp');
    // db.collection('Todos').find({_id:ObjectID('5bbb713e19a4a50acb2b2271')}).count().then((count) => {
    //     console.log('Todos');
    //     console.log(`Todos count ${count}`);
    // }, (err) => {
    //     console.log('Unable to find docs');
    // }); 

    db.collection('Users').find({location:'Philadelphia'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Error reading");
    });

    client .close();
});
