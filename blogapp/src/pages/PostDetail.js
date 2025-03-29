import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import "../assets/styles/Post/post.css"
function PostDetail() {
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
    }
  ];
  const navigate = useNavigate();
      
    const handleClick = (index, post) => {
      navigate(`/blog/${index}`, { state: { post } });
  };
  
  
  const loc = useLocation();
  const { post } = loc.state || {};


  // const { id } = useParams();
 

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
    <Container>
      <Row className='mt-5'>
        <Col md={6}>
          <h1 className="post-title">{post.title}</h1>
        </Col>
        <Col md={6}>
          <p className='post-title-para'>Chaque ligne de code, chaque page écrite, chaque test réalisé vous rapproche du succès. Le PFE n'est pas une épreuve, mais le dernier pont vers votre avenir brillant. Travaillez dur, rêvez grand, et créez quelque chose dont vous serez fier !</p>
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
          <p className='sousHeadHome'><strong>Text</strong> Jakob Gronberg</p>
        </Col>
        <Col sm={2}>
          <p className='sousHeadHome'><strong>Date</strong> 16. March 2022</p>
        </Col>
        <Col sm={2}>
          <p className='sousHeadHome'><strong>Duration</strong> 1 Min</p>
        </Col>
        
      </Row>
      <Row>
        <img src='/pictures/gg.png' alt='blog image'/>
      </Row>

      <Row className='rowblogcont'>
        <Col sm={4}>
          <div className='divprofilesection'>
            <h3 className='profile'>Jakob Gronberg</h3>
            
              <Row>
                <Col>
                <p className='sousHeadHome'><strong>Date</strong> </p>
                </Col>
                <Col>
                <span className='sousHeadHome' style={{display:"flex",justifyContent:"end"}}>16. March 2022</span>
                </Col>
              </Row>
              <Row>
                <Col>
                <p className='sousHeadHome'><strong>Duration </strong> </p>
                </Col>
                <Col>
                <span className='sousHeadHome' style={{display:"flex",justifyContent:"end"}}> 1 Min</span>
                </Col>
              </Row>
            
          </div>
        </Col>
        <Col sm={7}>
        <p className='clasparablog'>
        Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor morbi non arcu risus quis varius. Posuere ac ut consequat semper viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique risus nec feugiat in fermentum posuere urna nec. Tempus quam pellentesque nec nam aliquam sem et. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet porttitor eget dolor morbi non arcu risus. Justo eget magna fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.<br/><br/>

Tellus orci ac auctor augue mauris augue neque gravida. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis convallis convallis tellus id interdum velit laoreet id. Vulputate mi sit amet mauris commodo quis. Semper viverra nam libero justo laoreet sit amet. Eget nullam non nisi est sit. Nibh cras pulvinar mattis nunc sed blandit libero. Ac felis donec et odio pellentesque diam volutpat. Quis varius quam quisque id diam vel quam elementum. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id diam vel quam elementum pulvinar etiam non. Non consectetur a erat nam at lectus urna duis convallis.
        </p>
        </Col>
      </Row>
      <Row>
        <p className='headerblog'>LATEST POSTS</p>
      </Row>
      
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
    
    {/* <div className="post-detail-page">
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
                font-size: 4rem; /* Match the large headline style from Home 
          font-weight: bold;
          line-height: 1;
          margin-bottom: 10px;
          }
          
          .title-underline {
            width: 100%;
            height: 8px; /* Thick black line like on Home 
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
          font-size: 1.5rem; /* Larger text for readability 
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
    </div> */}
    
      </>
  );
}

export default PostDetail;