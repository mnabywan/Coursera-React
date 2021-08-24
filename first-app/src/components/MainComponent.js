import Menu from './MenuComponent'
import React, { Component } from 'react';
import { DISHES } from '../shared/dishes'
import DishDetail from './DishdetailComponent'
import Home from './HomeComponent';
import Header from './HeaderComponent'
import Footer from './FooterCompoonent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      dishes : DISHES,
      // selectedDish : null
    }
  };

  // onDishSelect(dishId){
  //   this.setState({selectedDish: dishId});
  // }


  render() {
    const HomePage = () => {
      return(
        <Home/>
      )
    }

    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/> // does not allow to pass ant props
          <Route exact path="/menu" 
            component={() => <Menu dishes={this.state.dishes}/>}/> //better way we can pass props
          <Redirect to="/home" />

        </Switch>
        <Footer/>
      </div>
    );
  }
}


export default Main;
