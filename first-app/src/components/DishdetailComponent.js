import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody, 
    Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';


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