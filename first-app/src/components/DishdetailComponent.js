import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody} from 'reactstrap';

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

    function RenderComments({dish}) {
    if (dish != null){
        return(
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {dish.comments.map((comment)=> (
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
        console.log('DishDetail Component render invoked');

        if (props.dish != null){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments dish={props.dish}/>
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