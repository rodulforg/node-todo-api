var env = process.env.NODE_ENV || "development";
console.log("**** env", env);

if(env === "development"){
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
}else if( env === "test"){
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}else if( env == "production"){
    process.env.MONGODB_URI = 'mongodb://dudemonkey:dudemonkeyT3stDB@ds241723.mlab.com:41723/todo-api-db';
}