import React from 'react';
import '../blog.css';

const Blog = () => {
  const blogData = [
    {
      title: "Exploring the Mountains",
      image_url: "https://example.com/images/mountains.jpg",
      content: "Join us as we delve into the majestic beauty of the world's most breathtaking mountain ranges.",
      published_at: "2025-03-28T10:15:30Z"
    },
    {
      title: "A Guide to Urban Gardening",
      image_url: "https://example.com/images/urban-gardening.jpg",
      content: "Discover how to transform small urban spaces into lush green gardens with our comprehensive guide.",
      published_at: "2025-03-27T14:22:10Z"
    },
    {
      title: "Culinary Journeys: Tasting the World",
      image_url: "https://example.com/images/culinary-journeys.jpg",
      content: "Embark on a flavorful adventure as we explore diverse cuisines and culinary traditions from around the globe.",
      published_at: "2025-03-26T08:45:00Z"
    },
    {
      title: "Culinary Journeys: Tasting the World",
      image_url: "https://example.com/images/culinary-journeys.jpg",
      content: "Embark on a flavorful adventure as we explore diverse cuisines and culinary traditions from around the globe.",
      published_at: "2025-03-26T08:45:00Z"
    },
    {
      title: "Culinary Journeys: Tasting the World",
      image_url: "https://example.com/images/culinary-journeys.jpg",
      content: "Embark on a flavorful adventure as we explore diverse cuisines and culinary traditions from around the globe.",
      published_at: "2025-03-26T08:45:00Z"
    },
    {
      title: "Culinary Journeys: Tasting the World",
      image_url: "https://example.com/images/culinary-journeys.jpg",
      content: "Embark on a flavorful adventure as we explore diverse cuisines and culinary traditions from around the globe.",
      published_at: "2025-03-26T08:45:00Z"
    }
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog</h1>
      {blogData.map((post, index) => (
        <div key={index} className="blog-post">
          <img src={post.image_url} alt={post.title} />
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