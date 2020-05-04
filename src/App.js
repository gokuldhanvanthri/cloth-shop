import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/home/homepage";
import Shoppage from "./pages/shop/shoppage";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={Shoppage} />
    </Switch>
  );
}

export default App;
