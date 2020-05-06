import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/home/homepage";
import Shoppage from "./pages/shop/shoppage";
import Loginpage from "./pages/login/loginpage";
import Header from "./components/header/header";
import "./App.css";

function App() {
  return (
    <>
      <Header
        options={[
          { text: "SHOP", path: "shop" },
          { text: "CONTACT" },
          { text: "SIGNIN" },
        ]}
      />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shoppage} />
        <Route path="/login" component={Loginpage} />
      </Switch>
    </>
  );
}

export default App;
