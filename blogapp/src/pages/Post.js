import { useState } from 'react';
import Footer from '../Footer';

function Post() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image_url: '',
    published_at: new Date().toLocaleTimeString()
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('New post:', formData);
    
    alert('Post created successfully!');
    
    setFormData({
      title: '',
      content: '',
      image_url: '',
      published_at: ''
    });

  };

  return (
    <>
    <div className="post-page">
      <h1>Create New Post</h1>
      <div className="title-underline"></div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter post title"
            />
        </div>
        
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            placeholder="Write your post content here"
            rows="10"
            />
        </div>

        <div>
          <label htmlFor="image_url">Image URL:</label>
          <input
            type="url"
            id="image_url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            placeholder="Enter image URL (https://...)"
            />
        </div>
        
        <button type="submit">Submit Post</button>
      </form>
      
      {/* Basic styling */}
      <style jsx>{`
        .post-page {
        font-family: 'General Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 120%;
        color: #000000;
        max-width: 800px;
        margin: 20px auto;
        padding: 20px;
        }
        h1{
          font-size: 4rem;
          font-weight: bold;
          line-height: 1;
          margin-bottom: 10px;
        }
        .title-underline {
          width: 100%;
          height: 8px;
          background-color: #000;
          margin-bottom:20px;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        label {
          margin-bottom: 5px;
          font-weight: bold;
        }
        input, textarea {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
    
    </>
  );
}

export default Post;