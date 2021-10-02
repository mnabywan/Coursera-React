import Menu from './MenuComponent'
import React, { Component } from 'react';
import DishDetail from './DishdetailComponent'
import Home from './HomeComponent';
import Header from './HeaderComponent'
import Footer from './FooterCompoonent';
import Contact from './ContactComponent';
import About from './AboutusComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      dishes : DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      // selectedDish : null
    }
  };

  // onDishSelect(dishId){
  //   this.setState({selectedDish: dishId});
  // }


  render() {
    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
          promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>
      )
    }

    const DishWthId = ({match}) => {
       return(
         <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
         />
       )
    }

    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/> // does not allow to pass ant props
          <Route exact path="/menu" 
            component={() => <Menu dishes={this.state.dishes}/>}/> //better way we can pass props
          <Route path="/menu/:dishId" component={DishWthId}/>
          <Route path="/aboutus" component={()=><About leaders={this.state.leaders}/>} />
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}


export default Main;
