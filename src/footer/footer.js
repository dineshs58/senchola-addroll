import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import './footer.css';


function Footer()
{
    return(
        <>
        
        <Container className="mt-5">
            <Row className="mt-3">
                <Col lg={2} md={6}>
                  <div className="footers">
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

                <Col lg={2} md={6}>
                <div className="footers">
                  <h6>Marketing Platform</h6>    
                   <p>One platform, every need</p>
                   <p>Find more customers</p>
                   <p>Build profitable relationships</p>
                   <p>Track and improve results</p>
                   <p>Protect customer data</p>
                   <p>Marketing Recipes</p>
                   <p>What are marketing recipes?</p>
                   <p>Abandoned cart recovery</p>
                   <h6>Customer loyalty</h6>
                   <p>Retargeting</p>
                   <p>Brand awareness</p>
                  </div>
                </Col>


                <Col lg={2} md={6}>
                <div className="footers">
                  <h6>Resources</h6>
                   <p>Resource library</p>
                   <p>Blog</p>
                   <p>Community</p>
                   <p>Events</p>
                   <p>Help Center</p>
                   <p>Third-Party Cookies</p>
                   <p>AdRoll UTM Link Builder</p>
                   <p>Digital Marketing Newsletter</p>
                  </div>
                </Col>

                <Col lg={2} md={6}>
                <div className="footers">
                  <h6>Partners</h6>
                   <p>Overview</p>
                   <p>Agencies</p>
                   <p>Agency Directory</p>
                   <p>Partner Directory</p>
                   <p>Referral Program</p> 
                   <p>API docs</p>
                  </div>

                </Col>
                <Col lg={2} md={6}>
                <div className="footers">
                   <h6>Company</h6>
                   <p>About</p>
                   <p>News</p>
                   <p>Careers</p>
                   <p>NextRoll Engineering</p>
                   </div>
                </Col>

                <Col lg={2} md={6}>
                   <div className="icons">
                   <h6><i class="bi bi-facebook"></i>  <i class="bi bi-linkedin"></i>  <i class="bi bi-instagram"></i>  <i class="bi bi-twitter"></i></h6>
                   <h6 className="mt-3 "><sapn>iab</sapn> <span>NAI<i class="bi bi-share"></i></span>  <span><i class="bi bi-radioactive"></i></span></h6>
                   <img  className="mt-3" src={require('../assert/white-8.png')}  width={200} height={100} alt=""  />
                   </div>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}

export default Footer