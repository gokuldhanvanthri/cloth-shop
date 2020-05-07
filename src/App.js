import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/home/homepage";
import Shoppage from "./pages/shop/shoppage";
import Loginpage from "./pages/login/loginpage";
import Header from "./components/header/header";
import { auth } from "./firebase/firebase.utils";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      status: "LOADING",
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user,
        status: "SUCCESS",
      });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    const headerOptions = [];
    const { currentUser } = this.state;

    if (currentUser) {
      headerOptions.push(
        { text: "SHOP", path: "shop" },
        { text: "CONTACT", path: "shop" },
        {
          text: "SIGNOUT",
          onClick: () => {
            auth.signOut();
          },
        }
      );
    }

    return (
      this.state.status === "SUCCESS" && (
        <>
          <Header options={headerOptions} />
          <Switch>
            {currentUser ? (
              <>
                <Route exact path="/" component={Homepage} />
                <Route path="/shop" component={Shoppage} />
              </>
            ) : (
              <Route path="/" component={Loginpage} />
            )}
          </Switch>
        </>
      )
    );
  }
}

export default App;
