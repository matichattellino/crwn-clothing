import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckOutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';

import {selectCurrentUser} from './redux/user/user.selector';
import { checkUserSesion } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;
  
  componentDidMount() {
     const { checkUserSesion } = this.props;
     checkUserSesion();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {  
    return (
      <div>
         <Header />
         <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckOutPage} />
            <Route exact path="/signin" render={() => this.props.currentUser ? (
                                          <Redirect to="/" />
                                            ) : ( 
                                              <SignInAndSignUpPage />
                                            )
                                            } 
                                          />
         </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    checkUserSesion: () => dispatch(checkUserSesion())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
