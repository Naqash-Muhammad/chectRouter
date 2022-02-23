import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';  

const Navbar = () => {
  return (
    <div className='bg-warning p-5 text-center text-bolde'>
          <Container>
              <Row>
                  <Col>
                      <Link to='/'>Home</Link>
                  </Col>
                  <Col>
                        <Link to='/about'>About</Link>
                  </Col>
                  <Col>
                        <Link to='/context'>About</Link>
                  </Col>
              </Row>
          </Container>
    </div>
  )
}

export default Navbar;