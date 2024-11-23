const express = require('express');
const mongoose = require('mongoose');
const Comment = require('./commentsSchema.js');
const Contact = require('./contactSchema.js');
const Quotes = require('./quotesSchema.js');

const cors = require('cors'); 

const port = 5000;
const app = express();

app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect("mongodb+srv://Dinesh_41916:dinesh%40123@cluster0.pxucwxc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connected to the Database");
}).catch((e) => {
    console.log("Error Connecting to DB: ", e);
});

// APIs for contact section
app.post("/upload-data", async (req, res) => {
    const formData = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    };

    try {
        await Contact.create(formData);
        res.send({ status: "Ok" });
    } catch (error) {
        res.json({ status: error.message });
    }
});

app.get('/get-data', async (req, res) => {
    try {
        const data = await Contact.find({});
        res.send({ status: "Ok", data });
    } catch (error) {
        res.json({ status: error.message });
    }
});

// Delete contact by ID
app.delete('/delete-contact/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Contact.findByIdAndDelete(id);
        res.status(200).json({ status: "Ok", message: "Contact deleted successfully" });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
});

// APIs for Blog Comments
app.post('/comments', async (req, res) => {
    const { name, comment, blogId } = req.body;

    try {
        const newComment = new Comment({ name, comment, blogId });
        await newComment.save();
        res.status(200).json({ message: 'Comment saved successfully', comment: newComment });
    } catch (error) {
        res.status(500).json({ message: 'Error saving comment', error });
    }
});

// Fetch comments by blogId
app.get('/comments/:blogId', async (req, res) => {
    const { blogId } = req.params;
    try {
        const comments = await Comment.find({ blogId });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching comments', error });
    }
});

app.get('/get-comments', async (req, res) => {
    try {
        const result = await Comment.find({});
        res.send({ status: "Ok", result });
    } catch (error) {
        res.json({ status: error.message });
    }
});

// Delete comment by ID
app.delete('/delete-comment/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Comment.findByIdAndDelete(id);
        res.status(200).json({ status: "Ok", message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ status: "Error", message: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
});





//API for quotes section

app.post("/upload-quotes", async (req, res) => {
    const formData = {
        title: req.body.title,
        text : req.body.text,
    };

    try {
        await Quotes.create(formData);
        res.send({ status: "Ok" });
    } catch (error) {
        res.json({ status: error.message });
    }
});
