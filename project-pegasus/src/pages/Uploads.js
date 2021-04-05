import React from "react";
import axios from "axios";
//Bootstraps
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, } from 'mdbreact';
//CSS
import '../main.css'
//API
const baseURL = "https://rtwz-pegasus-backend.herokuapp.com"


export default class Uploads extends React.Component {
    state = {
        user_details: [],
        fname: "",
        location: "",
        pIndex: "",
        category: "",
        img: "",
        title: "",
        equipment: [],
        processing: [],
        cateList: [],
        web_cats: []
    }

    //loading categories
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
                    <option value={x.categories[i]}>{x.categories[i]}</option>

                )
            }
        }
        return accum
    }
    //Form Field updates
    updateFormField = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    uploadAlertBox = () => {
        alert("Post uploaded into the Index!")

    }
    //add entry
    uploadPosts = async event => {
        let newPost = {
            user_uploads: {
                details: {
                    name: this.state.fname,
                    location: this.state.location,
                    pIndex: this.state.pIndex,
                    category: this.state.category
                },
                content: {
                    img: this.state.img,
                    title: this.state.title,
                    equipment: this.state.equipment,
                    processing: this.state.processing,
                }
            }
        }
        let response = await axios.post(baseURL + "/upload", newPost)

        newPost._id = response.data._id;

        let clone = [...this.state.user_details]

        clone.push(newPost)

        this.setState({
            user_details: clone
        })

        this.props.history.push('/' + this.state.category)
        window.location.reload(false);
    }
    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        if (event.target.reportValidity()) {
            this.uploadAlertBox()
            this.uploadPosts()


        }

        console.log(event.target.reportValidity())

    };



    render() {
        return (
            <React.Fragment>
                <Container>
                    {/* title row */}
                    <Row>
                        <Col className="uploadsTitle">
                            <p>Uploads</p>
                        </Col>
                    </Row>
                    {/* image preview box row */}
                    <Row>
                        <Col className="imgPreview">
                            <img
                                src={this.state.img}
                                alt={this.state.title}
                            />
                        </Col>
                    </Row>
                </Container>
                <div className="formWidth">
                    <div className="imgDetails">
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol>
                                    <form
                                        className="needs-validation"
                                        onSubmit={this.submitHandler}
                                        noValidate
                                    >
                                        <MDBRow>
                                            <MDBCol>
                                                <input
                                                    value={this.state.title}
                                                    name="title"
                                                    onChange={this.updateFormField}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Title"
                                                    required
                                                />
                                                <div className="invalid-feedback">Give your post a title!</div>
                                                <div className="valid-feedback">Looks good!</div>
                                            </MDBCol>
                                        </MDBRow>

                                        <MDBRow>
                                            <MDBCol md="6" className="mb-3 mt-3">
                                                <input
                                                    value={this.state.img}
                                                    onChange={this.updateFormField}
                                                    type="text"
                                                    className="form-control"
                                                    name="img"
                                                    placeholder="Image URL"
                                                    required
                                                />
                                                <div className="invalid-feedback">Post your photograph!</div>
                                                <div className="valid-feedback">Looks good!</div>
                                            </MDBCol>

                                            <MDBCol md="6" className="mb-3 mt-3">
                                                <select className="browser-default custom-select"
                                                    name="category"
                                                    value={this.state.category}
                                                    onChange={this.updateFormField}
                                                    custom
                                                    required
                                                >
                                                    <option>--Choose Category--</option>
                                                    {this.renderCategories()}
                                                </select>

                                            </MDBCol>
                                        </MDBRow>
                                        <hr className='hr-light' />
                                        <MDBRow>
                                            <MDBCol md="5" className="mb-3 mt-3">
                                                <input
                                                    value={this.state.fname}
                                                    name="fname"
                                                    onChange={this.updateFormField}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Name or Username"
                                                    required
                                                />
                                                <div className="invalid-feedback">Who do we owe it to this picture?</div>
                                                <div className="valid-feedback">Looks good!</div>
                                            </MDBCol>
                                            <MDBCol md="5" className="mb-3 mt-3">
                                                <input
                                                    value={this.state.location}
                                                    name="location"
                                                    onChange={this.updateFormField}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Location"
                                                />
                                                <small id="emailHelp" className="form-text text-muted">You don't have to post your location if you don't want to!</small>
                                            </MDBCol>
                                            <MDBCol md="2" className="mb-3 mt-3">
                                                <input
                                                    value={this.state.pIndex}
                                                    onChange={this.updateFormField}
                                                    type="text"
                                                    className="form-control"
                                                    name="pIndex"
                                                    placeholder="Personal Index"
                                                    required
                                                />
                                                <small id="emailHelp" className="form-text text-muted">Never share your Personal Index Numbers</small>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol className="mb-3 mt-3">
                                                <textarea
                                                    value={this.state.equipment}
                                                    name="equipment"
                                                    onChange={this.updateFormField}
                                                    type="textarea"
                                                    className="form-control"
                                                    placeholder="Equipment Used"
                                                    rows="4"
                                                    required
                                                />

                                                <div className="invalid-feedback">What telescope and camera did you use?</div>
                                                <div className="valid-feedback">Looks good!</div>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol className="mb-3 mt-3">
                                                <textarea
                                                    value={this.state.processing}
                                                    name="processing"
                                                    onChange={this.updateFormField}
                                                    type="textarea"
                                                    className="form-control"
                                                    placeholder="Acquisition/ Post-processes Used"
                                                    rows="4"
                                                    required
                                                />

                                                <div className="invalid-feedback">Any post processing you did </div>
                                                <div className="valid-feedback">Looks good!</div>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBBtn color="primary" type="submit">Upload</MDBBtn>
                                    </form>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}