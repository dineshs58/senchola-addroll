import React from "react";
import { Container, Row,Col} from "react-bootstrap";
import './banner.css';
import './NewBan.css';
import {Link} from 'react-router-dom';
import Navbars from "../Navbar/Navbar";
import Footer from "../footer/footer";


function Home()
{
    return(
        <>
       <Navbars/>
       <div className="full_banner_section">
            <Container>
              
                <Row>
                    
                    <Col lg={6} md={12}>
                        <div className="banner_Main mt-5">
                            <h1>Smaller budgets need </h1>
                            <h3>smarter dollars</h3>

                            <div className="mt-3">
                                <p>Create, manage, and analyze your display, Facebook, 
                                    Instagram, Pinterest, TikTok, and email 
                                    campaigns from a single platform. AdRoll helps 
                                    marketers do more with less.</p>
                            </div>

                            <div className="btns mt-4">
                                <button className="btns1">GETSTART</button>
                                <button className="btns2">GET IN TOUCH</button>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} d-none d-md-none>
                        <div className="right  ">
                            <img src={require('../assert/banner_right.webp')}
                            //  height={300} width={300}
                              alt=""  />
                        </div>
                    </Col>
                </Row>
                
            </Container>
            </div>



<div className="mt-5">
            <Container>
              
              <Row>
                  
                  <Col lg={6} md={12}>
                      <div className="banner_Main mt-5">
                          <h1>AdRoll works for the </h1>
                          <h3>scrappy new entrepreneur.</h3>

                          <div className="mt-3">
                              <p>Our industry-first automation builder gives you full control of campaigns
                                 across display, social, and email — all from one place.</p>
                          </div>

                          <div className="btns mt-4">
                             <Link  className="links">Explore automation builder  <i class="bi bi-arrow-right-circle"></i></Link>
                          </div>
                      </div>
                  </Col>

                  <Col lg={6} md={12}>
                      <div className="right1 mt-5">
                          <img src={require('../assert/bancomputer.webp')} height={300} width={400} alt=""  />
                      </div>
                  </Col>
              </Row>
              
          </Container>
          </div>


          <div className="mt-5">
            <Container>
                <Row>
                    <Col lg={12}>
                    <div className="logos_banners mx-0">
                        <img src={require("../assert/1.webp")} width={130} height={50} alt="" />
                        <img src={require("../assert/2.webp")} width={150} height={20} alt="" />
                        <img src={require("../assert/3.webp")} width={160} height={30} alt="" />
                        <img src={require("../assert/4.webp")} width={150} height={15} alt="" />
                        <img src={require("../assert/5.webp")} width={150} height={17} alt="" />
                        <img src={require("../assert/6.webp")} width={150} height={20} alt="" />
                    </div>
                    </Col>
                </Row>
            </Container>
          </div>


          <div className="next_banner">
            <Container className="mt-5">
            
              <Row className="mt-5">
                  
              <Col lg={6} md={12}>
                      <div className="right1 mt-4">
                          <img src={require('../assert/next.webp')} height={300} width={400} alt=""  />
                      </div>
                
                  </Col>

                      <Col lg={6} md={12}>
                      <div className="banner_Main mt-5">
                          <h2>For 15 years, we've been the leader </h2>
                          <h3>in helping our customers find their</h3>
                          <h3>best customers</h3>

                          <div className="mt-3">
                              <p>The AdRoll platform is powered by 15+ years of data from hundreds of thousands of brands and billions of shoppers. 
                                Let our expertise find the right customers for your business..</p>
                          </div>

                          <div className="btns mt-4">
                             <Link  className="links">Learn More  <i class="bi bi-arrow-right-circle"></i></Link>
                          </div>
                      </div>
                  </Col>
              </Row>
             
          </Container>
          </div>

    
          <div className="New">
                <Container>
                    <Row>
                        <Col lg={6} md={12} className="mt-5">
                            <div className="mt-4">
                                <h3>Save time and energy by running all
                                    your campaigns across millions of websites
                                    and mobile apps — from one place</h3>
                            </div>
                            <div className="mt-3">
                                <p>When we say one-stop shop, we mean one-stop. Launch, pause, and edit
                                    ad campaigns across all the places you want to advertise,
                                    plus use that data to see your campaigns holistically and make improvements.</p>
                            </div>
                            <div>
                                <Link className="links">Explore social ads manager <i class="bi bi-arrow-right-circle"></i></Link>
                            </div>
                        </Col>


                        <Col lg={6} md={12}>
                            <div className="mt-4 mx-3 dd">
                                <img src={require('../assert/save-time.webp')} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>




            {/* NEW NEXT */}

            <div className="New1">
                <Container>
                    <Row>
                        <Col lg={6} md={12} className="mt-5">
                            <div className="mt-5 mx-3">
                                <img src={require('../assert/correct-choices.webp')} alt="" />
                            </div>
                        </Col>


                        <Col lg={6} md={12} className="mt-4">


                            <div className="mt-4">
                                <h3>Our retargeting and brand </h3>
                                <h3>awareness ads make billions </h3>
                                <h3>of correct choices every day</h3>
                            </div>
                            <div className="mt-3">
                                <p>Our AI does what even the most savvy marketer alone cannot.
                                    Our powerful machine learning makes more predictions per second
                                    than the NASDAQ to attract the
                                    right customers to your site and get them buying again and again.</p>
                            </div>
                            <div>
                                <Link className="links">Explore retargeting ads <i class="bi bi-arrow-right-circle"></i></Link>

                            </div>
                            <div>
                                <Link className="links">Explore brand awareness ads <i class="bi bi-arrow-right-circle"></i></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ADDD ADES */}

            <div className="New">
                <Container>
                    <Row>
                        <Col lg={6} md={12} className="mt-5">
                            <div className="mt-4">
                                <h2>Experts to manage your advertising</h2>
                            </div>
                            <div className="mt-3">
                                <p>Want to run effective campaigns but don’t have the
                                    bandwidth to manage different platforms? AdRoll managed services can
                                    be an extension of your marketing team, providing you with a dedicated platform expert to partner with,
                                    helping you and your team achieve your marketing goals and maximize return from your campaigns.</p>
                            </div>
                            <div>
                                <Link className="links">Get the support you deserve  <i class="bi bi-arrow-right-circle"></i></Link>
                            </div>
                        </Col>


                        <Col lg={6} md={12} className="mt-4">
                            <div className="mt-4 mx-3">
                                <img src={require('../assert/experts.webp')} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


            <div>
                <Container>
                    <div className="full_Couverds">
                    <Row>
                        <Col lg={6} md={12}>
                            <div className="back_Colors">
                                <img src={require('../assert/logo-volcanica.webp')}  alt=""  />
                                <p>"Since last year,<b> our revenue has increased 191%, our attributed conversions 177%, and our engagement 33%.</b> We’re reaching and converting customers higher in the funnel."</p>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className="back_Ground_Waues">
                                <div className="text-center"> 
                                    <h2>AdRoll customers make</h2>
                                    <h1 className="fw-bolder">$165B</h1>
                                    <h3>in sales every year</h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    </div>
                </Container>
            </div>


            <Container>
                <Row>
                    <Col lg={12} md={12} className="mt-5">
                        <div className="grades text-center">
                            <img src={require('../assert/m1.png')} width={150} height={200} alt=""  />
                            <img src={require('../assert/m2.png')} width={150} height={200} alt=""  />
                            <img src={require('../assert/m3.png')} width={150} height={200} alt=""  />
                            <img src={require('../assert/m4.png')} width={150} height={200} alt=""  />
                        </div>
                    </Col>
                </Row>
            </Container>


        <div className="box1234 mt-5">
            <Container className="mt-4">
                <Row>
                    <Col lg={12} md={12} className="mt-5">
                        <div className="grades text-center">
                            <h2>Increase ROI. Learn from your data.</h2>
                            <h3>Maximize sales.</h3>
                        </div>
                        <div className="text-center  btns mt-4">
                                <button className="btns1">GETSTART</button>
                                <button className="btns2">GET IN TOUCH</button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>

    
<Footer/>
        
        </>
    )
}
export default Home