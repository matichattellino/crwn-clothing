import React, { useEffect } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckOutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';

import { GlobalStyle } from './global.styles';

import {selectCurrentUser} from './redux/user/user.selector';
import { checkUserSesion } from './redux/user/user.actions';

const App = ({ checkUserSesion, currentUser }) => {  
  useEffect(() => {
      checkUserSesion()
  }, [ checkUserSesion ]);

  return (
      <div>
        <GlobalStyle />
         <Header />
         <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckOutPage} />
            <Route exact 
              path="/signin" 
              render={() => 
                currentUser ? (
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
