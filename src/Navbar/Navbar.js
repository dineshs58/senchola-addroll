import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assert/tab_icon.png';
import {Link} from 'react-router-dom';
import './Navbar.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Row,Col} from 'react-bootstrap';


function Navbars()
{
    return(
        <>
      <Navbar expand="lg" className="navbars">
      <Container fluid>
        <Navbar.Brand className="logo" as={Link} to="" ><img src={Logo} width={25} height={25} alt="Photos" />AddRoll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            {/* <Nav.Link className="WhyAdRoll">Why AdRoll?</Nav.Link> */}

            <NavDropdown title="Why AdRoll?" id="basic-nav-dropdown"><br></br>
             <div className="boxes1">
                <div className="values">
                <Container className="mt-0">
            <Row className="mt-3">
                <Col lg={4} md={6}>
                  <div className="mt-0">
                    <p>Why AdRoll?</p>
                    <p>Overview</p>
                    <p>Pricing</p>
                  </div>
                </Col>
                </Row>
               </Container>
                </div>
             </div>
            </NavDropdown>

            <NavDropdown title="Marketing Platform" id="basic-nav-dropdown"><br></br>
             <div className="boxes">
                <div className="values">
                  <div className="lists">
            <Container className="mt-0">
            <Row className="mt-3">
                <Col lg={4} md={6}>
                  <div className="mt-0">
                  <h6>Why AdRoll?</h6>
                   <p>Overview</p>
                   <p>Pricing</p>
                   <h6>For ecommmerce stores</h6>
                   <p>AdRoll for ecommerce</p>
                   <p>Shopify</p>
                   <p>WooCommerce</p>
                   <p>BigCommerce</p>
                   <p>Magento</p>
                  </div>
                </Col>

                <Col lg={4} md={6}>
                <div className="mt-0">
                  <h6>Marketing Platform</h6>    
                   <p>One platform, every need</p>
                   <p>Find more customers</p>
                   <p>Build profitable relationships</p>
                   <p>Track and improve results</p>
                   <p>Protect customer data</p>
                   <p>Marketing Recipes</p>
                   <p>What are marketing recipes?</p>
                   <p>Abandoned cart recovery</p>
                  
                  </div>
                </Col>
                </Row>
               </Container>
                  </div>
                </div>
             </div>
            </NavDropdown>


            <NavDropdown title="For Ecommerce" id="basic-nav-dropdown"><br></br>
             <div className="boxes1">
                <div className="values">
                <Container className="mt-0">
            <Row className="mt-3">
                <Col lg={4} md={6}>
                  <div className="mt-0">
                  <h6>Why AdRoll?</h6>
                   <p>Overview</p>
                   <p>Pricing</p>
                   <h6>For ecommmerce stores</h6>
                   <p>AdRoll for ecommerce</p>
                   <p>Shopify</p>
                   <p>WooCommerce</p>
                   <p>BigCommerce</p>
                   <p>Magento</p>
                  </div>
                </Col>
                </Row>
               </Container>
                </div>
             </div>
            </NavDropdown>

            <Nav.Link >Pricing</Nav.Link>

            <NavDropdown title="Resources" id="basic-nav-dropdown"><br></br>
             <div className="boxes">
                <div className="values">
                <Container className="mt-0">
            <Row className="mt-3">
                <Col lg={4} md={6}>
                  <div className="mt-0">
                  <h6>Why AdRoll?</h6>
                   <p>Overview</p>
                   <p>Pricing</p>
                   <h6>For ecommmerce stores</h6>
                   <p>AdRoll for ecommerce</p>
                   <p>Shopify</p>
                   <p>WooCommerce</p>
                   <p>BigCommerce</p>
                   <p>Magento</p>
                  </div>
                </Col>

                <Col lg={4} md={6}>
                <div className="mt-0">
                  <h6>Marketing Platform</h6>    
                   <p>One platform, every need</p>
                   <p>Find more customers</p>
                   <p>Build profitable relationships</p>
                   <p>Track and improve results</p>
                   <p>Protect customer data</p>
                   <p>Marketing Recipes</p>
                   <p>What are marketing recipes?</p>
                   <p>Abandoned cart recovery</p>
                  
                  </div>
                </Col>


                <Col lg={4} md={6}>
                <div className="mt-0">
                  <h6>Marketing Platform</h6>    
                   <p>One platform, every need</p>
                   <p>Find more customers</p>
                   <p>Build profitable relationships</p>
                   <p>Track and improve results</p>
                   <p>Protect customer data</p>
                   <p>Marketing Recipes</p>
                   <p>What are marketing recipes?</p>
                   <p>Abandoned cart recovery</p>
                  
                  </div>
                </Col>
                </Row>
               </Container>
                </div>
             </div>
            </NavDropdown>
 
          </Nav>
          <Nav className="d-flex px-5">
            <Nav.Link as={Link} to='/login'  className="logins" >Login</Nav.Link>
            <Nav.Link className="buton">Getstart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container fluid>
      <Row>
        <div className="banner_header text-center">
          <p className="text-white my-3">Learn how to optimize your webpages and ad creative at our upcoming workshop 👀  <Link to='/register'  >Register Now <i class="bi bi-arrow-right-circle"></i></Link></p>
        </div>
      </Row>
    </Container>
        </>
    )
}
export default Navbars