const express = require("express")
const session = require('express-session');

const mongoose = require('mongoose')
const cors = require('cors')

require("dotenv").config(); // Must be at the top of the file


const app = express()

app.use(session({
    secret: process.env.SESSION_SECRET || 'default_secret', // Session secret
    resave: false, // Don't force a session to be saved
    saveUninitialized: false, // Don't save uninitialized sessions
    cookie: {
        secure: false, // Set to `true` if using https
        httpOnly: true, // Ensure the cookie can't be accessed by JavaScript
        maxAge: 1000 * 60 * 60 * 24, // 1 day session
    },
}));

app.use(express.json())
app.use(cors(
    {
        origin: "http://localhost:3000", // Frontend URL
        credentials: true, // Allow credentials (cookies, authorization headers)
    }
))
const UsersModel = require('./models/Users')
const BlogModel = require('./models/Blog')

mongoose.connect("mongodb+srv://redachmouk01:9MUQxUgNj0NPvROs@cluster0.pt6hq0e.mongodb.net/")

app.post('/signup', (req, res) => {
    UsersModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if user exists
        const user = await UsersModel.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        // Compare passwords
        const isMatch = password === user.password
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        // Store user info in session
        req.session.user = { id: user._id, username: user.username };
        res.status(200).json({ message: "Sign-in successful!",
        
        });
    } catch (err) {
        console.error("Sign-in error:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.post("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ error: "Logout failed" });
        }
        res.status(200).json({ message: "Logged out successfully" });
    });
});

app.post("/postBlog", async (req, res) => {
    const { title, content, image_url , published_at } = req.body;

    // Ensure all fields are provided
    console.log(content , title , image_url, published_at);
    if ( !title || !content || !image_url || !published_at ) {
        console.log("gggg");
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // Create a new blog post using the Blog model
        const newBlogPost = new BlogModel({
            title,
            content,
            image_url,
            published_at
        });

        // Save the new blog post to the database
        await newBlogPost.save();

        // Send a response back to the client
        res.status(201).json({ message: "Blog post created successfully", blog: newBlogPost });
    } catch (err) {
        console.error("Error creating blog post:", err);
        res.status(500).json({ error: "Failed to create blog post" });
    }
});


// GET API to fetch all blog posts
app.get("/blogs", async (req, res) => {
    try {
        // Fetch all blogs from the database
        const blogs = await BlogModel.find(); // You can use .find({}) to fetch all posts
        
        // Send a successful response with the blog data
        res.status(200).json({ blogs });
    } catch (err) {
        // Handle any errors that may occur
        console.error("Error fetching blogs:", err);
        res.status(500).json({ error: "Failed to fetch blogs" });
    }
});


app.get("/auth", (req, res) => {
    if (req.session.user) {
        res.status(200).json({ user: req.session.user });
        console.log("yes")
    } else {
        res.status(401).json({ error: "Not authenticated" });
        console.log("no")

    }
});

app.listen(3001 , () => {
    console.log("server runing now")
})