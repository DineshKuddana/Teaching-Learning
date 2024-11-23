const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 

// Import Schemas
const Comment = require('./commentsSchema.js');
const Contact = require('./contactSchema.js');
const Quotes = require('./quotesSchema.js');

// App Initialization
const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect("mongodb+srv://Dinesh_41916:dinesh%40123@cluster0.pxucwxc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Connected to the Database"))
.catch((e) => console.error("Error Connecting to DB:", e));

// *** Contact APIs ***

// Add Contact
app.post("/upload-data", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const formData = { name, email, message };
        await Contact.create(formData);
        res.status(201).json({ status: "Ok" });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
});

// Get All Contacts
app.get('/get-data', async (req, res) => {
    try {
        const data = await Contact.find({});
        res.status(200).json({ status: "Ok", data });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
});

// Delete Contact by ID
app.delete('/delete-contact/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Contact.findByIdAndDelete(id);
        res.status(200).json({ status: "Ok", message: "Contact deleted successfully" });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
});

// *** Comment APIs ***

// Add Comment
app.post('/comments', async (req, res) => {
    try {
        const { name, comment, blogId } = req.body;
        const newComment = new Comment({ name, comment, blogId });
        await newComment.save();
        res.status(201).json({ status: "Ok", message: 'Comment saved successfully', comment: newComment });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
});

// Get Comments by Blog ID
app.get('/comments/:blogId', async (req, res) => {
    try {
        const { blogId } = req.params;
        const comments = await Comment.find({ blogId });
        res.status(200).json({ status: "Ok", comments });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
});

// Get All Comments
app.get('/get-comments', async (req, res) => {
    try {
        const result = await Comment.find({});
        res.status(200).json({ status: "Ok", result });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
});

// Delete Comment by ID
app.delete('/delete-comment/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Comment.findByIdAndDelete(id);
        res.status(200).json({ status: "Ok", message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
});

// *** Quote APIs ***

// Add Quote
app.post("/upload-quotes", async (req, res) => {
    try {
        const { title, text } = req.body;
        const formData = { title, text };
        await Quotes.create(formData);
        res.status(201).json({ status: "Ok" });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
});

// Get All Quotes
app.get('/get-quotes', async (req, res) => {
    try {
        const data = await Quotes.find({});
        res.status(200).json({ status: "Ok", data });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
});

// Update Quote by ID
app.put('/update-quote/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, text } = req.body;
        const updatedQuote = await Quotes.findByIdAndUpdate(id, { title, text }, { new: true, runValidators: true });

        if (!updatedQuote) {
            return res.status(404).json({ status: "Error", message: "Quote not found" });
        }
        res.status(200).json({ status: "Ok", data: updatedQuote });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
});

// Delete Quote by ID
app.delete('/delete-quote/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedQuote = await Quotes.findByIdAndDelete(id);

        if (!deletedQuote) {
            return res.status(404).json({ status: "Error", message: "Quote not found" });
        }
        res.status(200).json({ status: "Ok", message: "Quote deleted successfully" });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
