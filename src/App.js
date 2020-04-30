import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/home/homepage";
import "./App.css";

const HatsPage = () => {
  return <h1>Hats buy page!!!</h1>;
};

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop/hats" component={HatsPage} />
    </Switch>
  );
}

export default App;
