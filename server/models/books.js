const { Schema, model } = require("mongoose");


const bookSchema = new Schema({
    value: {type: String},
    children: {type: Array}
})



const BookModel = model("datasets", bookSchema);


module.exports = BookModel;
