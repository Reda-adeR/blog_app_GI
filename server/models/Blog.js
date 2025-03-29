const mongoose = require('mongoose');

// Define the schema for a blog post
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Title is required
    },
    content: {
        type: String,
        required: true, // Content is required
    },
    image_url: {
        type: String,
        required: true, // Author is required
    },
    published_at: {
        type: String,
        default: Date.now, // Automatically set the creation date
    },
});

// Create and export the Blog model
const BlogModel = mongoose.model('Blog', blogSchema);
module.exports = BlogModel;
