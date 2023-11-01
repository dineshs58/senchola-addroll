import React from "react";
import './Register.css';
import { Container ,Row,Col } from "react-bootstrap";
import Logo12 from '../assert/tab_icon.png';



function Register()
{
    return(
        <>
        <div className="register">
         <Container >
                <Row>
                    <Col  md={12} lg={7}>
                        <div>
                        <h3 className="mt-4"><img src={Logo12} width={25} height={25} alt="Photos" /><span>AddRoll</span></h3>
                        <h1 className="mt-3">Convert Who You’ve Got Conversion Rate Optimization Workshop</h1>
                        <h5 className="mt-4">Thursday, November 2, 2023</h5>
                        <h4>10AM PT / 1PM ET</h4>
                        </div>
                    </Col>

                    <Col  md={12} lg={5} className="mt-5">
                        <div className="register_Forms mt-5">
                            <h2 className="reg">Register now!</h2>
                            <p><b>Can't make the live session?</b> Register now and we'll send you the recording after the event.</p>
                        <div>
                            <label>FIRST NAME<span className="erros">*</span></label>
                            <input type="text" className="form-control" ></input>
                        </div><br></br>

                        <div>
                            <label>LAST NAME<span className="erros">*</span></label>
                            <input type="text" className="form-control" ></input>
                        </div><br></br>


                        <div>
                            <label>WORK EMAIL<span className="erros">*</span></label>
                            <input type="text" className="form-control" ></input>
                        </div><br></br>


                        <div>
                            <label>COMPANY NAME<span className="erros">*</span></label>
                            <input type="text" className="form-control" ></input>
                        </div><br></br>

                        <div>
                            <label>WEBSITE<span className="erros">*</span></label>
                            <input type="text" className="form-control" ></input>
                        </div><br></br>


                        <div>
                            <label>HAVE A QUESTION FOR OUR SPEAKERS?<span className="erros">*</span></label>
                            <input type="text" className="form-control" ></input>
                        </div><br></br>

                        <div>
                            <label>COUNTRY<span className="erros">*</span></label>
                            <input type="text" className="form-control" ></input>
                        </div><br></br>
                        <p>You are opting in to NextRoll, Inc. marketing communications. 
                            We value your privacy and you can learn all about our data
                             collection practices in our Privacy
                             Notice and CCPA Notice at Collection. Don't forget,
                              you can unsubscribe any time.</p>
                       

                        <div>
                            <button className="btnsnn1">REGISTER NOW</button>
                        </div>
                        </div>
                    </Col>

                    <Col md={12} lg={7} className="mt-5">
                    <div className="contents mt-5">
                        <h3 className="mt-4">Did you know? Acquiring a new customer is 5x more expensive than retaining your existing ones.</h3>
                    </div>
                    <div>
                        <p className="backs1243 mt-4">
                        While effective marketing and advertising begins with reaching the right people, 
                        in the right places, and at the right time, marketers who fall short in their 
                        Conversion Rate Optimization (CRO) skills miss out on bringing revenue-generating
                        traffic to their 
                        marketing site and driving account creation, form fill, or purchase conversions once there. 
                        </p>
                    </div>
                    <div>
                        <h1>Key Takeaways:</h1>
                    </div>

                    <div className="mt-4">
                        <p className="mt-2">Learn ad creative CRO best practices to drive conversions to your site</p>
                        <p>Learn webpage CRO best practices to drive end-goal conversions</p>
                        <p>Get tangible steps to implement CRO best practices to fire up growth through
                             the end of this year</p>
                        <p>Have the opportunity to get live coaching // CRO optimization consulting from 
                            subject matter experts</p>
                    </div>
                    
                    </Col>
                </Row>
         </Container>
         

         <Container>
            <Row className="mt-5">
                <Col className="mt-5">
                    <div className="cont mt-5">
                        <h2 className="mt-5">Your Workshop Coaches</h2>
                    </div>

                    <div className="images-love">
                        <img src={require('../assert/eeee.webp')} alt="" />
                        <img src={require('../assert/experts.webp')} alt="" />
                        <img src={require('../assert/aaaa.webp')} alt="" />
                    </div>
                </Col>
            </Row>
          </Container>


         <Container className="mt-4">
            <Row>
            <Col >
                <h1 className="mt-5">Check out these AdRoll Resources:</h1>
            </Col>
            </Row>
         </Container>

         <div className="bcacks">
          <Container>
              <Row>
                
                    <p className="mt-4">© 2006-2023, NextRoll, Inc. All rights reserved. 
                        AdRoll is a division of NextRoll. To learn more please visit nextroll.com.</p>
                
              </Row>
          </Container>
          </div>
          </div>
        </>
    )
}
export default Register