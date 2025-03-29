import React from 'react'
import { Link } from "react-router-dom";
import {Row,Col} from 'react-bootstrap'
import "../assets/styles/head-nav.css"
const NavbarHome = () => {
  return (
    <div className='divnavbar'>
      <Row>
        <Col>
        <h3 className='head-nav'>
          <img className='logoPic' src="/pictures/logo.png" alt='' />
        </h3>
        </Col>
        <Col>
          <Row>
            <Col width="20px">
              <h5 className='head-nav-component'><Link to="/">Home</Link></h5>
            </Col>
            <Col>
              <h5 className='head-nav-component'><Link to="/blog">Blog</Link></h5>
            </Col>
            <Col>
              <h5 className='head-nav-component'><Link to="/post">Post</Link></h5>
            </Col>
            <Col>
              <h5 className='head-nav-component'><Link to="/about">About</Link></h5>
            </Col>
            <Col>
              <h5 className='head-nav-component'><Link to="/contact">Contact</Link></h5>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    
  )
}

export default NavbarHome