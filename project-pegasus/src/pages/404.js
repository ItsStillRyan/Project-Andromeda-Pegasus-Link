import React from "react";
import {Link} from 'react-router-dom'
//Bootstraps
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
//CSS
import '../main.css'
// image imports
import logo from '../images/404.png'
import backHome from '../images/logo-small.png'


const PageNotFound = () => {
    return (
        <React.Fragment>
            <div>
                <Container>
                    <Row>
                        <Col className="lost-col" >
                            <img
                                src={logo}
                                width="800"
                                height="500"
                                alt="404"
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col className="title-sub text-center">
                            You must be lost. This page doesn't exist!
                        </Col>
                    </Row>
                    <Row>
                        <Col className="sub-sub text-center">
                            Click here to go back to the main page
                        </Col>
                    </Row>
                    <Col className="logo-sub text-center">
                        <Link to="/">
                            <img
                                src={backHome}
                                width="100"
                                height="100"
                                alt="Back Home"
                            />
                            
                        </Link>
                    </Col>
                </Container>

            </div>
        </React.Fragment >

    )
}
export default PageNotFound