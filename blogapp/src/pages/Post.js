import { useState } from 'react';
import '../post.css';


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
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('New post:', formData);
    
    try {
      const response = await fetch("http://localhost:3001/postBlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( formData ),
      });
      alert(formData.published_at);
      const data = await response.json();
      if ( response.ok )
      {
        setFormData("");
        alert('Post created successfully!');
      }
      else {
        alert("error / .. ", data.error);
      }
    }catch (err){
      alert("error .,; :", err);

    }
    
    setFormData({
      title: '',
      content: '',
      image_url: '',
      published_at: ''
    });

  };

  return (
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
      {/* <style jsx>{`
        
      `}</style> */}
    </div>
  );
}

export default Post;