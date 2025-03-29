import React from 'react';
import '../blog.css';
import { useEffect, useState } from 'react';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      const response = await fetch('http://localhost:3001/blogs');
      const data = await response.json();
      
      // Access the 'blogs' property from the response and set it to state
      setBlogData(data.blogs);
    };

    fetchBlogData();
  }, []);

  // let blogData;
  // const data = await fetch('http://localhost:3001/blogs').then(  (response) => {
  //   blogData = response.json()
  // });
  // const data  = await blogData.json();

  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog</h1>
      {blogData.map((post, index) => (
        <div key={index} className="blog-post">
          <img src={`${post.image_url}`} alt="rererer" />
          <div className="blog-post-content">
            <h2 className="blog-post-title">{post.title}</h2>
            <p className="blog-post-description">{post.content}</p>
            <p className="blog-post-date">
              Published on: {new Date(post.published_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;