import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        console.log('DishDetail Component constructor invoked');

        super(props);
    }

    componentDidMount(){
        console.log('DishDetail Component componentDidMount invoked');
      }

    componentDidUpdate(){
        console.log('DishDetail Component componentDidUpdate invoked');
    }

    renderComments(dish) {
    if (dish != null)
    
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
    else
        return(
            <div></div>
        );
    }

    render(){
        console.log('DishDetail Component render invoked');

        if (this.props.dish != null){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg  object src={this.props.dish.image} alt={this.props.dish.name} />
                                    <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dish)}
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
}

export default DishDetail;