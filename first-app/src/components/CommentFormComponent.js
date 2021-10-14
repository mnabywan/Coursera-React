import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody, 
    Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label} from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form'


const required = (val) => val && val.length;
const maxLength = (len) => (val) => (!val || val.length <= len);
const minLength = (len) => (val) => (val && val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            isFormOpen: false
        }

        this.toggleOpenForm = this.toggleOpenForm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    toggleOpenForm(){
        console.log(this.state.isFormOpen);
        this.setState({
            isFormOpen : !this.state.isFormOpen
        })
    };

    handleSubmit(values){
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    render(){
        return(
            <>
                <Button outline color="secondary" onClick={this.toggleOpenForm}>
                    <span className="fa fa-pencil fa-bg"> Submit comment </span>
                </Button>
                <Modal isOpen={this.state.isFormOpen} toggle={this.toggleOpenForm}>
                    <ModalHeader>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label>
                                        Rating
                                    </Label>
                                </Col>
                                <Col md={12}>
                                    <Control.select model=".rating" id="rating"
                                    className="form-control"
                                    validators={{required}}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label>
                                    Your Name
                                    </Label>
                                </Col>
                                <Col md={12}>
                                    <Control.text model=".name" id="yourname"
                                    className="form-control"
                                    placeholder="Your Name"
                                    validators={{required, minLength: minLength(2), maxLength: maxLength(15)}}
                                    />
                                    <Errors 
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: "Is required",
                                            minLength: "Must be greater than 2 characetes",
                                            maxLength: "Must be 15 characters or less"
                                        }}   />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label>
                                        Comment
                                    </Label>
                                </Col>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" rows="6"
                                    className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={10}>
                                    <Button type="submit" color="primary" >
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default CommentForm;