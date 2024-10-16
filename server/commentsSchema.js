// commentsSchema.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  blogId: String, // Add blogId to link comments with specific blogs
  name: String,
  comment: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);
