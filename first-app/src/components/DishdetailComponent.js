import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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


function RenderDish({dish}){
    return(
        <Card>
        <CardImg  object src={dish.image} alt={dish.name} />
            <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
        </CardBody>
        </Card>
    );
}

function RenderComments({comments}) {
    if (comments != null){
        return(
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment)=> (
                        <li key={comment.id}>{comment.comment}
                            <ul className="list-unstyled">
                                <li>
                                -- {comment.author},  {new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'short', day: '2-digit'}).
                                                                        format(new Date(Date.parse(comment.date)))}
                                </li>
                            </ul>
                            <br  />
                        </li>
                        ))}
                    </ul>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
        }

    const DishDetail = (props) => {
        if (props.dish != null){
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>    
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} />
                            <CommentForm/>
                        </div>
                    </div>
                </div>                    
            );
        }
        else{
            return(
            <div></div>
            );
        }
    }

export default DishDetail;