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

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5bbb7f693fccd8c8e2d59965")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then( (result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bbb7ace3fccd8c8e2d597a6')
    },{
        $set:{
            name: 'Miguel'
        },
        $inc:{
            age: 1
        }
    },{
        returnOriginal: false
    }).then( (result) => {
        console.log(result);
    });

    client .close();
}); 