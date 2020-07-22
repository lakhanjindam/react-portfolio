import React from "react";
import "./App.css";
import Home from "./contents/Home";
import { BrowserRouter, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <Home />} />
    </BrowserRouter>
  );
};

export default App;
