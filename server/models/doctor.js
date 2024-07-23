const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    specialty: {
        type : String,
        required : true
    },
    location: {
        type : String,
        required : true
    },
    phone: {
        type : String,
        required : true
    },
    shift: {
        type : String,
        required : true
    },
    rating: {
        type : Number,
        required : true
    },
}, {
    timeStamps : true,
})

const doctorModel = mongoose.model('doctors', doctorSchema);

module.exports = doctorModel;