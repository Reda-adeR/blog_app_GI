import React from 'react'
import {Row,Col, Container, Table} from 'react-bootstrap'
import "../assets/styles/Home/home.css"
import { motion } from "framer-motion";
const Home = () => {
  const newsItems = [
    "Breaking News: React 19 is coming soon!", 
    "Tech Update: AI is evolving faster than ever.",
    "Sports: The Champions League final is approaching!",
    "Weather: Expect sunny skies this weekend.",
  ];
  const authors = [
    { name: "Jakob Gronberg", title: "Hope dies last" },
    { name: "Jakob Gronberg", title: "Hope dies last" },
    { name: "Jakob Gronberg", title: "Hope dies last" },
  ];
  return (
    <>
    <Container>
      <Row>
        <Col>
          <h1 className='header-home'>Home</h1>
        </Col>
      </Row>
      
    </Container>
    <div style={{ overflow: "hidden", width: "100%", background: "#000", color: "#fff", padding: "10px 0",marginBottom:"55px"}}>
    <motion.div
      style={{ display: "flex", whiteSpace: "nowrap" }}
      animate={{ x: ["100%", "-100%"] }}
      transition={{ ease: "linear", duration: 30, repeat: Infinity }}
    >
      {newsItems.map((item, index) => (
        <span key={index} style={{fontFamily:'General Sans' , marginRight: "50px", fontSize: "18px", fontWeight: 500 }}>
          {item}
        </span>
      ))}
    </motion.div>
  </div>
  <Row>
    <Col md={6}>
      <p className='pHeadHome'>
      Don’t close your eyes
      </p>
    </Col>
    <Col md={6}>
      <p className='pHeadHome2'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
      </p>
      <Row>
        <Col>
          <p className='sousHeadHome'><strong>Text</strong> Jakob Gronberg</p>
        </Col>
        <Col>
          <p className='sousHeadHome'><strong>Date</strong> 16. March 2022</p>
        </Col>
        <Col>
          <p className='sousHeadHome'><strong>Duration</strong> 1 Min</p>
        </Col>
        
      </Row>
    </Col>
  </Row>
  <Row>
    <Col className='colimghome'>
      <img className='imgHomeBlog' src="/pictures/home.png" alt="image blog"/>
    </Col>
  </Row>
  <Row>
    <Col md={8} className='colsousimageblog' >
    <Row className='rowBlogListHome'>
        <Col sm={3}>
          <img src='/pictures/blog1.png' alt="blog1"/>
        </Col>
        <Col sm={9}>
          <h4 className='headbloghome'>Hope dies last</h4>
          <p className='pHeadHome2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
          </p>
          <Row>
            <Col>
              <p className='sousHeadHome'><strong>Text</strong> Jakob Gronberg</p>
            </Col>
            <Col>
              <p className='sousHeadHome'><strong>Date</strong> 16. March 2022</p>
            </Col>
            <Col>
              <p className='sousHeadHome'><strong>Duration</strong> 1 Min</p>
            </Col>
            
          </Row>
        </Col>
      </Row>
      <Row className='rowBlogListHome'>
        <Col sm={3}>
          <img src='/pictures/blog1.png' alt="blog1"/>
        </Col>
        <Col sm={9}>
          <h4 className='headbloghome'>Hope dies last</h4>
          <p className='pHeadHome2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
          </p>
          <Row>
            <Col>
              <p className='sousHeadHome'><strong>Text</strong> Jakob Gronberg</p>
            </Col>
            <Col>
              <p className='sousHeadHome'><strong>Date</strong> 16. March 2022</p>
            </Col>
            <Col>
              <p className='sousHeadHome'><strong>Duration</strong> 1 Min</p>
            </Col>
            
          </Row>
        </Col>
      </Row>
      <Row className='rowBlogListHome'>
        <Col sm={3}>
          <img src='/pictures/blog1.png' alt="blog1"/>
        </Col>
        <Col sm={9}>
          <h4 className='headbloghome'>Hope dies last</h4>
          <p className='pHeadHome2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
          </p>
          <Row>
            <Col>
              <p className='sousHeadHome'><strong>Text</strong> Jakob Gronberg</p>
            </Col>
            <Col>
              <p className='sousHeadHome'><strong>Date</strong> 16. March 2022</p>
            </Col>
            <Col>
              <p className='sousHeadHome'><strong>Duration</strong> 1 Min</p>
            </Col>
            
          </Row>
        </Col>
      </Row>
      <Row className='rowBlogListHome'>
        <Col sm={3}>
          <img src='/pictures/blog1.png' alt="blog1"/>
        </Col>
        <Col sm={9}>
          <h4 className='headbloghome'>Hope dies last</h4>
          <p className='pHeadHome2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
          </p>
          <Row>
            <Col>
              <p className='sousHeadHome'><strong>Text</strong> Jakob Gronberg</p>
            </Col>
            <Col>
              <p className='sousHeadHome'><strong>Date</strong> 16. March 2022</p>
            </Col>
            <Col>
              <p className='sousHeadHome'><strong>Duration</strong> 1 Min</p>
            </Col>
            
          </Row>
        </Col>
      </Row>
      <Row className='rowBlogListHome'>
        <Col sm={3}>
          <img src='/pictures/blog1.png' alt="blog1"/>
        </Col>
        <Col sm={9}>
          <h4 className='headbloghome'>Hope dies last</h4>
          <p className='pHeadHome2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
          </p>
          <Row>
            <Col>
              <p className='sousHeadHome'><strong>Text</strong> Jakob Gronberg</p>
            </Col>
            <Col>
              <p className='sousHeadHome'><strong>Date</strong> 16. March 2022</p>
            </Col>
            <Col>
              <p className='sousHeadHome'><strong>Duration</strong> 1 Min</p>
            </Col>
            
          </Row>
        </Col>
      </Row>
      <Row className='rowBlogListHome'>
        <Col sm={3}>
          <img src='/pictures/blog1.png' alt="blog1"/>
        </Col>
        <Col sm={9}>
          <h4 className='headbloghome'>Hope dies last</h4>
          <p className='pHeadHome2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
          </p>
          <Row>
            <Col>
              <p className='sousHeadHome'><strong>Text</strong> Jakob Gronberg</p>
            </Col>
            <Col>
              <p className='sousHeadHome'><strong>Date</strong> 16. March 2022</p>
            </Col>
            <Col>
              <p className='sousHeadHome'><strong>Duration</strong> 1 Min</p>
            </Col>
            
          </Row>
        </Col>
      </Row>
      
    </Col>
    <Col md={3}>
      <div>
        <p className='printmagazin'>Printmagazine</p>
        <p className='printmagazindate'>03/2022</p>
        <img src='/pictures/Poster.png' alt="postercine"/>
        <button className='btnposter'>VOIR</button>
      </div>
      <div className='divmultiple'>
        <p className='printmagazin'>MOST POPULAR</p>
        <Row className='rowPopular'>
          <Col md={3}>
            <p className='sousMultipleNumb'>01</p>
          </Col>
          <Col md={9}>
            <p className='sousMultiple'>Street art festival</p>
            <p className='sousHeadHome'><strong>Text</strong> Jakob Gronberg</p>
            
          </Col>
          
        </Row>
        <Row className='rowPopular'>
          <Col md={3}>
            <p className='sousMultipleNumb'>02</p>
          </Col>
          <Col md={9}>
            <p className='sousMultiple'>Hope dies last</p>
            <p className='sousHeadHome'><strong>Text</strong> Jakob Gronberg</p>
            
          </Col>
          
        </Row>
        <Row className='rowPopular'>
          <Col md={3}>
            <p className='sousMultipleNumb'>03</p>
          </Col>
          <Col md={9}>
            <p className='sousMultiple'>Artists who want to rise above</p>
            <p className='sousHeadHome'><strong>Text</strong> Jakob Gronberg</p>
            
          </Col>
          
        </Row>
      </div>
      <div className='divmultiple'>
        <div className='newsbg'>
          <p className='printmagazin'>NewsLetter</p>
          <p className='newsletter'>Design News to your inbox</p>
          <input className='inpnewsletter' type='email' placeholder='EMAIL'/>
          <div className='btnspacenewsletter'>
            <button className='btnposter'>ENVOYER</button>
          </div>

        </div>
      </div>
      
    </Col>
    
  </Row>
  {/* <Row>
  <h3 className="aythor">Authors</h3>
  <Table className="table-bordered" responsive>
        <tbody>
          {authors.map((author, index) => (
            <tr key={index}>
              <td>
                <Row>
                  <Col sm={3}>
                    <img src="/pictures/profile.png" alt="profil" className="profile-img" />
                  </Col>
                  <Col sm={9} className='coltable'>
                    <div >
                    <h4 className="headbloghome">{author.title}</h4>
                    <p className="sousHeadHome">
                      <strong>Text:</strong> {author.name}
                    </p>
                    </div>
                  </Col>
                </Row>
              </td>
              <td>
                <Row>
                  <Col sm={3}>
                    <img src="/pictures/profile.png" alt="profil" className="profile-img" />
                  </Col>
                  <Col sm={9} className='coltable'>
                    <div >
                    <h4 className="headbloghome">{author.title}</h4>
                    <p className="sousHeadHome">
                      <strong>Text:</strong> {author.name}
                    </p>
                    </div>
                  </Col>
                </Row>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
  </Row> */}
  </>
  )
}

export default Home;