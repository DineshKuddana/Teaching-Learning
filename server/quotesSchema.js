const mongoose = require('mongoose');
const QuotesSchema = new mongoose.Schema({
    title:String,
    text:String,
} , {collection: "Quotes"});


const Quotes = mongoose.model("Quotes" , QuotesSchema);
module.exports = Quotes;