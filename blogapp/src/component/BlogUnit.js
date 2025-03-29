import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../blogUnit.css';



const BlogUnit = ( {index, post} ) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/blog/${index}`, { state : {post}}); // Replace '/desired-route' with your target path
    };
    return (
    <div key={index} className="blog-post">
          <img src={`${process.env.PUBLIC_URL}${post.image_url}`} alt="" />
          <div className="blog-post-content" onClick={handleClick}>
            <h2 className="blog-post-title">{post.title}</h2>
            {/* <p className="blog-post-description">{post.content}</p> */}
            <p className="blog-post-date">
              Published on: {new Date(post.published_at).toLocaleDateString()}
            </p>
          </div>
    </div>
        // console.log(index, post.title);
    )
}


export default BlogUnit;