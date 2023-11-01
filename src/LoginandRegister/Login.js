import React from "react";
import './login.css';
import { Container ,Row,Col } from "react-bootstrap";
import Logo1 from '../assert/tab_icon.png';
import {Link} from 'react-router-dom';



function Login()
{
    return(
        <>
        
               <Container>
               <div className="logs">
                <Row>
                 
                    <Col  md={12} lg={12}>
                        <div className="calls ">
                            <h1><img src={Logo1} width={25} height={25} alt="Photos" /><span>AdRoll</span></h1>
                        </div><br></br>
                        <div>
                            <label>Email Address</label>
                            <input type="text" className="form-control" ></input>
                        </div><br></br>
                        <div>
                            <label>Password</label>
                            <input type="password" className="form-control" ></input>
                        </div><br></br>
                        <div>
                            <button className="btnsnn">Sign In</button>
                        </div>
                        <h6 className="text-center mt-3"><Link >Forget Your Password</Link></h6>

                        <hr></hr>

                        <p className="text-center mt-3">Don't have An Account ? <Link>Sign Up</Link></p>


                        <h6 className="spans"><span>Terms of Service</span><span>Privacy Notice</span> <span>Adjust Ad Preferences</span></h6>
                        <h6 className="text-center mt-3">Copyright © 2023 NextRoll, Inc. All rights reserved.</h6>
                    </Col>
                   
                </Row>
                </div>
               </Container>
         
        
        </>
    )
}
export default Login