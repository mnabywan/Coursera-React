import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    render(){
        if (this.props.dish != null){
            return(
                <Card>
                    <CardImg width="100%" object src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
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