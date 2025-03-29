import React from 'react';
import '../blog.css';


import BlogUnit from '../component/BlogUnit';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const blogData = [
    {
      title: "Exploring the Mountains",
      image_url: "/pictures/gilfoyle.jpg",
      content: "Join us as we delve into the majestic beauty of the world's most breathtaking mountain ranges.",
      published_at: "2025-03-28T10:15:30Z"
    },
    {
      title: "A Guide to Urban Gardening",
      image_url: "/pictures/gilfoyle.jpg",
      content: "Discover how to transform small urban spaces into lush green gardens with our comprehensive guide.",
      published_at: "2025-03-27T14:22:10Z"
    },
    {
      title: "Culinary Journeys: Tasting the World",
      image_url: "/pictures/gilfoyle.jpg",
      content: "Embark on a flavorful adventure as we explore diverse cuisines and culinary traditions from around the globe.",
      published_at: "2025-03-26T08:45:00Z"
    },
    {
      title: "Culinary Journeys: Tasting the World",
      image_url: "/pictures/gilfoyle.jpg",
      content: "Embark on a flavorful adventure as we explore diverse cuisines and culinary traditions from around the globe.",
      published_at: "2025-03-26T08:45:00Z"
    },
    {
      title: "Culinary Journeys: Tasting the World",
      image_url: "/pictures/gilfoyle.jpg",
      content: "Embark on a flavorful adventure as we explore diverse cuisines and culinary traditions from around the globe.",
      published_at: "2025-03-26T08:45:00Z"
    },
    {
      title: "Culinary Journeys: Tasting the World",
      image_url: "/pictures/gilfoyle.jpg",
      content: "Embark on a flavorful adventure as we explore diverse cuisines and culinary traditions from around the globe.",
      published_at: "2025-03-26T08:45:00Z"
    },
    {
      title: "Culinary Journeys: Tasting the World",
      image_url: "/pictures/gilfoyle.jpg",
      content: "Embark on a flavorful adventure as we explore diverse cuisines and culinary traditions from around the globe.",
      published_at: "2025-03-26T08:45:00Z"
    },
    {
      title: "Culinary Journeys: Tasting the World",
      image_url: "/pictures/gilfoyle.jpg",
      content: "Embark on a flavorful adventure as we explore diverse cuisines and culinary traditions from around the globe.",
      published_at: "2025-03-26T08:45:00Z"
    },
    {
      title: "Culinary Journeys: Tasting the World",
      image_url: "/pictures/gilfoyle.jpg",
      content: "Embark on a flavorful adventure as we explore diverse cuisines and culinary traditions from around the globe.",
      published_at: "2025-03-26T08:45:00Z"
    },
    {
      title: "Culinary Journeys: Tasting the World",
      image_url: "/pictures/gilfoyle.jpg",
      content: "Embark on a flavorful adventure as we explore diverse cuisines and culinary traditions from around the globe.",
      published_at: "2025-03-26T08:45:00Z"
    },
    {
      title: "Culinary Journeys: Tasting the World",
      image_url: "/pictures/gilfoyle.jpg",
      content: "Embark on a flavorful adventure as we explore diverse cuisines and culinary traditions from around the globe.",
      published_at: "2025-03-26T08:45:00Z"
    },
    {
      title: "Culinary Journeys: Tasting the World",
      image_url: "/pictures/gilfoyle.jpg",
      content: "Embark on a flavorful adventure as we explore diverse cuisines and culinary traditions from around the globe.",
      published_at: "2025-03-26T08:45:00Z"
    },
    {
      title: "Culinary Journeys: Tasting the World",
      image_url: "/pictures/gilfoyle.jpg",
      content: "Embark on a flavorful adventure as we explore diverse cuisines and culinary traditions from around the globe.",
      published_at: "2025-03-26T08:45:00Z"
    },
    {
      title: "Culinary Journeys: Tasting the World",
      image_url: "/pictures/gilfoyle.jpg",
      content: "Embark on a flavorful adventure as we explore diverse cuisines and culinary traditions from around the globe.",
      published_at: "2025-03-26T08:45:00Z"
    }
  ];
  const navigate = useNavigate();
    
  const handleClick = (index, post) => {
    navigate(`/blog/${index}`, { state: { post } });
};



  return (
    <>
    <Container className='containerhead'>
      <Row>
        <Col>
          <h1 className='header-home'>BLOG</h1>
        </Col>
      </Row>
      
    </Container>
    

    <div className="blog-container">
      {/* <h1 className="blog-title">Blog</h1> */}
      <Container >
        <Row>
      {blogData.map((post, index) => (
    
            <Col className='colblogpagetable' md={4} key={index}>
                <div className="blog-post">
                    <img src='/pictures/blogPage.png' className='imgbloglistpage'/>
                    {/* <img src={`${process.env.PUBLIC_URL}${post.image_url}`} alt="" /> */}
                    <div className="blog-post-content" onClick={() => handleClick(index, post)}>
                        <h2 className="blog-post-title">{post.title}</h2>
                        <p className='loremparablog'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
                        </p>
                        
                        <Col>
                          <p className='sousHeadHome'>
                            <strong>Date </strong>
                            {new Date(post.published_at).toLocaleDateString('en-GB', {
                              day: '2-digit',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </p>
                          <button className='btnvoir'>Voir Plus</button>
                        </Col>

                    </div>
                </div>
            </Col>
       
        // <div key={index} className="blog-post">
        //   <img src={`${process.env.PUBLIC_URL}/pictures/gilfoyle.jpg`} alt="" />
        //   <div className="blog-post-content">
        //     <h2 className="blog-post-title">{post.title}</h2>
        //     <p className="blog-post-description">{post.content}</p>
        //     <p className="blog-post-date">
        //       Published on: {new Date(post.published_at).toLocaleDateString()}
        //     </p>
        //   </div>
        // </div>
      ))}
       </Row>
       </Container>
    </div>
      
      </>
  );
};

export default Blog;