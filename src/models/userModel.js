const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        unique:true
    },
    authorName: String,
    catagory: {
        type: String,
        required: true
    },
    year: Number,

}, { timestamps: true });

module.exports = mongoose.model('Library', bookSchema) 



// String, Number
// Boolean, Object/json, array