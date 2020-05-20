const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');
const Todo = require('./models/todo_schema');

app.use(express.static('./assets'));
app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views','views');

var todo_list;

app.use('/', require('./routes/home'));

app.listen(port, function(err){
    if(err){
        console.log("error");
        return;
    }
    console.log("Express run fine at port",port);
});