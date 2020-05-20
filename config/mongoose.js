const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/To_Do_list_db');

const db = mongoose.connection;
db.on('error' , console.error.bind(console,'its not working fine.'));
db.once('open', function(){
    console.log('successfully connect to db');
});

module.exports = db;

