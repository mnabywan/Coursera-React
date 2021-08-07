import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody} from 'reactstrap';
import DishDetail from './DishdetailComponent'


class Menu extends Component {
    constructor(props) {
        super(props);

        this.state={
          selectedDish: null
        }
    }

    onDishSelect(dish){
      this.setState({selectedDish: dish});
    }


    renderDish(dish){
      if (dish != null){
        return(
          <Card>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        )
      }
      else{
        return(
          <div></div>
        );
      }
    }

    renderSelectedDish(dish){
      if (dish != null){
        return (
          <div className="col-12 col-md-5 m-1">
            <DishDetail dish={dish}/>
          </div>
        );
      }
      else{
        return ( 
        <div></div>
        );
      }
    }

    renderComments(dish){
      if (dish != null){
        const comments = dish.comments.map((comment) => {
          return(
            <div>
              <p>{comment.comment}</p>
              <p>-- {comment.author} {comment.date}</p>
            </div>
          )

        })
        
        return(
          <div className="col-12 col-md-5 m-1">
            <h4>Comments </h4>
            <div>
              {comments}
            </div>
          </div>
        );
      }
      else{
        return(
          <div className="col-12 col-md-5 m-1">
          daaaa
          </div>
        )
      }
    }


    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" object src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        // console.log(this.state.selectedDish);
        // if (this.state.selectedDish != null){ 
        //   console.log('BBBBBB')
        // }
        // else{
        //   console.log('AAAA');
        // }


        
        return (
          <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className="row">
                {this.renderSelectedDish(this.state.selectedDish)}
                {this.renderComments(this.state.selectedDish)}
           </div>
          </div>
        );
    }
}

export default Menu;