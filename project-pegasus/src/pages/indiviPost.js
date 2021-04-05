import React from "react";
import axios from "axios";
//Bootstraps
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdbreact';
//CSS
import '../main.css'
//API
const baseURL = "https://rtwz-pegasus-backend.herokuapp.com"

export default class indiviPost extends React.Component {

    state = {
        user_details: [],
        name: "",
        location: "",
        pIndex: "",
        img: "",
        title: "",
        equipment: "",
        processing: "",
        pIndexCheck: "",
        comments: [],
        commentName: "",
        commentContent: ""

    }

    async componentDidMount() {
        let response = await axios.get(baseURL + "/show/" + this.props.match.params._id)
        let response2 = await axios.get(baseURL + '/commentsList')
        this.setState({
            user_details: response.data,
            comments: response2.data,
            name: response.data.user_uploads.details.name,
            location: response.data.user_uploads.details.location,
            pIndex: response.data.user_uploads.details.pIndex,
            img: response.data.user_uploads.content.img,
            title: response.data.user_uploads.content.title,
            equipment: response.data.user_uploads.content.equipment,
            processing: response.data.user_uploads.content.processing,
        })
    }

    //Form Field updates
    updateFormField = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //pIndex submit
    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        if (event.target.reportValidity() && this.state.pIndexCheck == this.state.pIndex) {
            this.props.history.push('/update/' + this.props.match.params._id)
        }
    }

    //comment submit
    submitHandler2 = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        if (event.target.reportValidity()){
            this.uploadComments()
            window.location.reload();
        }
    }

    //comments upload
    uploadComments = async event => {
        let newComment = {
            userComs: {
                name: this.state.commentName,
                comment: this.state.commentContent,
                pIndex: this.state.pIndex
            }
        }

        let response = await axios.post(baseURL + "/uploadCom", newComment)

        newComment._id = response.data._id

        let clone = [this.state.comments]

        clone.push(newComment)

        this.setState({
            comments: clone
        })
    }

    renderComments = () => {
        let accum = [];
        for (let s of this.state.comments) {
            if (this.state.pIndex === s.userComs.pIndex) {
                accum.push(
                    <div key={s._id}>
                        <Container>
                            <Row>
                                <Col className="commentName">
                                    <p>{s.userComs.name}:</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="commentDesc">
                                    <p>{s.userComs.comment}</p>
                                </Col>
                            </Row>
                        </Container>
                        <hr className='hr-light' />
                    </div>
                )
            }
        }
        return accum
    }
    commentAlertBox = () => {
        alert("Comment Added")
        this.uploadComments()
        window.location.reload(false);
    }



    render() {
        return (
            <React.Fragment>
                <Container>
                    {/* image */}
                    <Row>
                        <Col className="postImg">
                            <img
                                src={this.state.img}
                                alt={this.state.title}
                            />
                        </Col>
                    </Row>
                    <div className="postTextWidth">
                        {/* title */}
                        <Row>
                            <Col className="postTitle">
                                <p>{this.state.title}</p>
                            </Col>
                        </Row>
                        {/* subtitle - name */}
                        <Row>
                            <Col className="postDivider" md="1">
                                <p>|</p>
                            </Col>
                            <Col className="postsubTitle">
                                <p><span>Photography by: </span>{this.state.name}</p>
                            </Col>
                            <Col className="postDivider" md="1">
                                <p>|</p>
                            </Col>
                            {/* subtitle - location */}
                            <Col className="postsubTitle">
                                <p><span>Location: </span>{this.state.location}</p>
                            </Col>
                            <Col className="postDivider" md="1">
                                <p>|</p>
                            </Col>
                        </Row>
                        <hr className='hr-light' />
                        {/* Equipment */}
                        <Row>
                            <Col className="equip-AQPTitle">
                                <p>Equipment Used</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="equip-AQPDesc">
                                <p>{this.state.equipment}</p>
                            </Col>
                        </Row>
                        {/* Aquisitions and Processing */}
                        <Row>
                            <Col className="equip-AQPTitle">
                                <p>Aquisitions and Processing</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="equip-AQPDesc">
                                <p>{this.state.processing}</p>
                            </Col>
                        </Row>
                        {/* edit button and pindex box */}
                        <div className="edit-row">
                            <MDBContainer>
                                <form
                                    className="needs-validation"
                                    onSubmit={this.submitHandler}
                                    noValidate>
                                    <MDBRow>
                                        <MDBCol md="2">
                                            <MDBBtn color="primary" type="submit">Edit</MDBBtn>

                                        </MDBCol>
                                        <MDBCol md="2" className="ml-3 mt-2">
                                            <input
                                                value={this.state.pIndexCheck}
                                                name="pIndexCheck"
                                                onChange={this.updateFormField}
                                                type="text"
                                                className="form-control"
                                                placeholder="Index"
                                                required
                                            />
                                            <div className="invalid-feedback">Invalid Personal Index</div>
                                        </MDBCol>
                                    </MDBRow>
                                </form>
                            </MDBContainer>
                        </div>
                    </div>
                    <hr className='hr-light' />
                </Container>


                <Col className="commentTitle">
                    <p>Comments</p>
                </Col>
                <form
                    className="needs-validation"
                    onSubmit={this.submitHandler2}
                    noValidate>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol sm={10} className="commentNamebox">
                                <input
                                    value={this.state.commentName}
                                    name="commentName"
                                    onChange={this.updateFormField}
                                    type="text"
                                    className="form-control"
                                    placeholder="Name / Username"
                                    required
                                />
                            </MDBCol>
                            <MDBCol sm={2}>
                                <MDBBtn color="primary" type="submit">Comment</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol>
                                <textarea
                                    value={this.state.commentContent}
                                    name="commentContent"
                                    onChange={this.updateFormField}
                                    className="form-control"
                                    placeholder="Add your Comments"
                                    rows = "3"
                                    required
                                />
                            </MDBCol>
                        </MDBRow>
                        <hr className='hr-light' />
                    </MDBContainer>
                </form>
                <div className="commentSectionWhole">
                    {this.renderComments()}
                </div>

            </React.Fragment>
        )
    }
}