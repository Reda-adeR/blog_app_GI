import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function PostDetail() {
  const loc = useLocation();
  const { post } = loc.state || {};


  // const { id } = useParams();
  const navigate = useNavigate();

  // const post = {
  //   id: id,
  //   title: 'Sample Post Title',
  //   content:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  //   image_url: 'https://via.placeholder.com/1200x400',
  //   published_at: '2025-03-28T14:30',
  // };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
    <div className="post-detail-page">
      <button className="back-button" onClick={() => navigate('/blog')}>
        ← Retour au Blog
      </button>

      <div className="title-container">
        <h1 className="post-title">{post.title}</h1>
        <div className="title-underline"></div>
      </div>

      <p className="post-date">
        Publié le: {new Date(post.published_at).toLocaleString()}
      </p>

      {post.image_url && (
        <div className="post-image-container">
          <img src={post.image_url} alt={post.title} className="post-image" />
        </div>
      )}

      <div className="post-content">
        <p>{post.content}</p>
      </div>

      <style jsx>{`
        .post-detail-page {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          }
          
          .back-button {
            background: none;
            border: none;
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
          cursor: pointer;
          margin-bottom: 20px;
          padding: 0;
          }
          
          .back-button:hover {
            color: #007bff;
            }
            
            .title-container {
              position: relative;
              margin-bottom: 20px;
              }
              
              .post-title {
                font-size: 4rem; /* Match the large headline style from Home */
          font-weight: bold;
          line-height: 1;
          margin-bottom: 10px;
          }
          
          .title-underline {
            width: 100%;
            height: 8px; /* Thick black line like on Home */
            background-color: #000;
            }
            
            .post-date {
              font-size: 1.2rem;
              color: #666;
              margin-bottom: 20px;
              }
              
              .post-image-container {
                margin-bottom: 30px;
                }
                
                .post-image {
                  width: 100%;
                  height: auto;
                  border-radius: 8px;
                  }
                  
        .post-content {
          font-size: 1.5rem; /* Larger text for readability */
          line-height: 1.6;
          color: #333;
          }
          
        @media (max-width: 768px) {
          .post-title {
            font-size: 2.5rem;
            }
            
            .post-date {
              font-size: 1rem;
              }
              
              .post-content {
                font-size: 1.2rem;
                }
                }
                `}</style>
    </div>
      </>
  );
}

export default PostDetail;