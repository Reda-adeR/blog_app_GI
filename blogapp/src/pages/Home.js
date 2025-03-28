import React from 'react'
import {Row,Col} from 'react-bootstrap'
import "../assets/styles/yasser/head-nav.css"
const Home = () => {
  return (
    <div>
      <Row>
        <Col>
        <h3 className='head-nav'>
          FYFRE MAGAZINE
        </h3>
        </Col>
        <Col>
          <Row>
            <Col>
              <h3 className='head-nav-component'>ABOUT</h3>
            </Col>
            <Col>
              <h3 className='head-nav-component'>BLOG</h3>
            </Col>
            <Col>
              <h3 className='head-nav-component'>HOME</h3>
            </Col>
            <Col>
              <h3 className='head-nav-component'>POST</h3>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    
  )
}

export default Home;