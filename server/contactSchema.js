const mongoose = require('mongoose');
const ContactDetailsSchema = new mongoose.Schema({
    name:String,
    email:String,
    message:String
} , {collection: "ContactDetails"});


const Contact = mongoose.model("ContactDetails" , ContactDetailsSchema);
module.exports = Contact;