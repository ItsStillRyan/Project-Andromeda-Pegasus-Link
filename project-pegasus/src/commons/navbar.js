import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
//bootstraps
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
//import images
import logo from '../images/logo-small.png'
//css
import '../main.css'
//API
const baseURL = "https://rtwz-pegasus-backend.herokuapp.com"

export default class NavbarMain extends React.Component {
    state = {
        web_cats: []
    }
    async componentDidMount() {
        let response = await axios.get(baseURL + "/showCate")
        this.setState({
            web_cats: response.data
        })
    }

    renderCategories = () => {
        let accum = []
        for (let x of this.state.web_cats) {
            for (let i = 0; i < x.categories.length; i++) {
                accum.push(
                    <NavDropdown.Item>
                        <Link to={"/" + x.categories[i].toLowerCase()}>
                            {x.categories[i]}
                        </Link>
                    </NavDropdown.Item>
                )
            }
        }
        return accum
    }
    render() {
        return (
            <React.Fragment>
                <Navbar expand="lg" bg="dark" varient="dark">
                    <Navbar.Brand>
                        <Link to="/">
                            <img
                                src={logo}
                                width="60"
                                height="60"
                                className="d-inline-block align-top"
                                alt="Pegasus Logo"
                            />
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navLink" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title={
                                <span className="navLink ml-5">Categories</span>
                            } id="collasible-nav-dropdown">
                                {this.renderCategories()}

                            </NavDropdown>

                            <Nav.Link>
                                <Link to="/gettingstarted">
                                    <span className="navLink ml-5 mt-5">Getting Started</span>
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/uploads">
                                    <span className="navLink ml-5">Upload into the Index</span>
                                </Link>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment >
        )
    }
}