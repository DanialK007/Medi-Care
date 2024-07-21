const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://danialk007:27102003Danialkcube@cluster0.wnvcsso.mongodb.net/medi-care';

mongoose.connect(mongoURL);

var connection = mongoose.connection;

connection.on('error', () => {
    console.log('Mongo connection error');
});

connection.on('connected', () => {
    console.log('Mongo connection successful');
});

module.exports = mongoose;
