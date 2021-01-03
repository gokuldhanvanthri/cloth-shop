import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Homepage from "./pages/home/homepage";
import Shoppage from "./pages/shop/shoppage";
import Loginpage from "./pages/login/loginpage";
import CheckoutPage from "./pages/checkout/checkout";
import Header from "./components/header/header";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.action";
import { GlobalStyle } from "./global.styles";

const App = ({ checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shoppage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            this.props.currentUser ? <Redirect to="/" /> : <Loginpage />
          }
        />
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
