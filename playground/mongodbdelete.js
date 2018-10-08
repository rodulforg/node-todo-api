// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        console.log('Unable to connect to MongoDB Server');
        return;
    }
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text:'eat lunch'}).then( (result) => {
    //     console.log(result);
    // });

    db.collection('Todos').findOneAndDelete({completed:false}).then( (result) => {
        console.log(result);
    });

    client .close();
}); 