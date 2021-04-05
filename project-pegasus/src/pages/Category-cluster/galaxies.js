import React from "react";
import axios from "axios";
//Bootstraps
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdbreact';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
//CSS
import '../../main.css'
//API
const baseURL = "https://rtwz-pegasus-backend.herokuapp.com"

export default class Galaxies extends React.Component {

    state = {
        user_details: [],
        filterCondi: ""

    }

    async componentDidMount() {
        let response = await axios.get(baseURL + "/galaxies")
        this.setState({
            user_details: response.data
        })
        window.scrollTo(0, 0)
    }

    //Form Field updates
    updateFormField = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    renderDetails = () => {
        let accum = [];
        for (let s of this.state.user_details) {
            if (this.state.filterCondi == s.user_uploads.content.title || this.state.filterCondi == "") {
                accum.push(
                    <div key={s._id} className="cateIndiviRow show-col">
                        <MDBCol size="3">
                            <MDBCard className="cateCardStyle" >
                                <Link to={"/galaxies/" + s._id}>
                                    <MDBCardImage className="img-fluid cateImgSize" src={s.user_uploads.content.img} waves /></Link>
                                <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                    <MDBCardTitle>{s.user_uploads.content.title}</MDBCardTitle>
                                    <hr className='hr-light' />
                                    <MDBCardText>{s.user_uploads.details.name}</MDBCardText>
                                    <Link to={"/galaxies/" + s._id}>
                                        <a className='black-text d-flex justify-content-end'><h5 className='white-text'>Engage<MDBIcon icon='angle-double-right' className='ml-2' /></h5>
                                        </a>
                                    </Link>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </div>
                )
            }

        }
        return accum
    }




    render() {
        return (
            <React.Fragment>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol className="cateTitle">
                            <p>Galaxies</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className="cateSub">
                            <p>
                                gal•ax•y găl′ək-sē
                        </p>
                            <p>Any of numerous large-scale aggregates of stars, gas, and dust that constitute the universe, containing an average of 100 billion (10<sup>11</sup>) solar masses and ranging in diameter from 1,500 to 300,000 light-years.</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                {/* Filter */}
                <div className="filterWidth">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <div>
                                                <MDBInput label="Filter by Title" name="filterCondi" value={this.state.filterCondi} onChange={this.updateFormField} />
                                            </div>
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
                {/* PAST HERE IS THE ACTUAL CONTENT */}
                <div className="cateCardContain">
                    <MDBRow className="cateIndiviRow show-col">

                        {this.renderDetails()}

                    </MDBRow>
                </div>

            </React.Fragment >

        )
    }
}


