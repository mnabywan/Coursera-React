import Menu from './MenuComponent'
import React, { Component } from 'react';
import DishDetail from './DishdetailComponent'
import Home from './HomeComponent';
import Header from './HeaderComponent'
import Footer from './FooterCompoonent';
import Contact from './ContactComponent';
import About from './AboutusComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
  }
}

class Main extends Component {
  constructor(props){
    super(props);

  };


  // onDishSelect(dishId){
  //   this.setState({selectedDish: dishId});
  // }


  render() {
    const HomePage = () => {
      return(
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]} 
          promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>
      )
    }

    const DishWthId = ({match}) => {
       return(
         <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
         />
       )
    }

    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/> // does not allow to pass ant props
          <Route exact path="/menu" 
            component={() => <Menu dishes={this.props.dishes}/>}/> //better way we can pass props
          <Route path="/menu/:dishId" component={DishWthId}/>
          <Route path="/aboutus" component={()=><About leaders={this.props.leaders}/>} />
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}


export default withRouter(connect(mapStateToProps)(Main));
